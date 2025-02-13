<script setup>
/* Import modules. */
// import Chart from 'chart.js/auto'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)


useHead({
    title: 'Contract Details - NexaShell',
    meta: [{
        name: 'description',
        content: 'Transaction'
    }]
})

const isLoaded = ref(false)
const contract = ref(null)

const data = ref(null)
const options = ref(null)

/* Initialize route. */
const route = useRoute()

/* Set id. */
const id = route.params.id

const init = async () => {
    /* Initialize locals. */
    let response

    /* Request contract. */
    response = await $fetch('/v1/contract/' + id)
        .catch(err => console.error(err))
    // console.log('RESPONSE', response)

    /* Set contract. */
    contract.value = response
    // console.log('CONTRACT', contract.value)

    /* Set flag. */
    isLoaded.value = true
}

const initCharts = async () => {
    data.value = {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [40, 20, 12] }]
    }

    options.value = {
        responsive: true
    }

}

onMounted(() => {
    init()

    initCharts()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })

</script>

<template>
    <main v-if="!isLoaded" class="max-w-5xl mx-auto py-20">
        <h2 class="text-3xl font-medium text-center">
            Loading. Please wait...
        </h2>
    </main>

    <main v-else-if="contract" class="max-w-7xl mx-auto py-10">
        <div class="px-3 py-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <section>
                <div class="flex flex-row items-center gap-5">
                    <img :src="contract?.iconUrl" class="w-16 h-auto" />

                    <h1 class="text-5xl font-light tracking-widest uppercase">
                        {{contract?.title}}
                    </h1>
                </div>

                <div class="flex flex-row gap-5">
                    <h3 class="text-sm text-gray-600">
                        Version: {{contract?.version}}
                    </h3>

                    <h3 class="text-sm text-gray-600">
                        Type: {{contract?.type}}
                    </h3>
                </div>

                <h3 class="text-sm font-medium text-gray-500 truncate">
                    {{contract?.id}}
                </h3>

            </section>

            <section>
                <img :src="contract?.bannerUrl" class="w-full border-4 border-amber-400 rounded-xl shadow-md" />
            </section>
        </div>

        <!-- <Bar :data="data" :options="options" /> -->

        <!-- <pre class="block text-xs font-medium">{{ contract }}</pre> -->
    </main>

    <main v-else class="max-w-7xl mx-auto">
        <div class="px-5 py-20 flex w-full justify-center">
            <h1 class="text-4xl font-medium">
                Oops! No contract found
            </h1>
        </div>
    </main>
</template>
