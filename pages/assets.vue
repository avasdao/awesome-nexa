<!-- pages/assets.vue -->
<template>
    <main class="px-3 max-w-7xl mx-auto">
        <!-- <section class="my-5 max-w-7xl mx-auto">
            <h1 class="text-4xl font-medium">
                Assets
            </h1>

            <p>
                Chain Value -- $0.00
            </p>
        </section> -->

        <section class="py-5 flex flex-col grid grid-cols-1 sm:grid-cols-2 gap-5">
            <h2 class="col-span-1 sm:col-span-2 text-3xl font-medium">
                Featured Assets
            </h2>

            <NuxtLink
                v-for="asset of topAssets"
                :key="asset.token"
                :to="'/token/' + asset.token"
                class="px-3 py-1 bg-gray-100 border-2 border-gray-300 rounded-lg shadow"
            >
                <h2 class="text-2xl text-sky-800 font-medium">
                    {{asset.name}}
                </h2>

                <h3 class="text-lg text-sky-600 font-medium">
                    ${{asset.ticker}}
                </h3>

                <h5 class="text-sm text-sky-700 font-medium">
                    Decimals: {{asset.decimals || 0}}
                </h5>

                <h4 class="text-sky-600 font-medium">
                    <span class="text-lg text-sky-700 font-bold">
                        {{numeral(asset.txCount).format('0,0')}}
                    </span>
                    transactions
                </h4>

                <section class="w-fit mx-3 my-2 px-3 py-1 bg-sky-100 border-2 border-sky-300 rounded-xl">
                    <h5 class="text-xs text-sky-700 font-medium truncate">
                        {{asset.token}}
                    </h5>

                    <h5 class="text-xs text-sky-700 font-medium truncate">
                        {{asset.tokenIdHex}}
                    </h5>

                    <h5 class="text-xs text-sky-700 font-medium truncate">
                        {{asset.documentUrl}}
                    </h5>

                </section>

            </NuxtLink>
            <!-- <pre>{{topAssets}}</pre> -->
        </section>
    </main>
</template>

<script setup>
/* Import modules. */
import numeral from 'numeral'

useHead({
    title: 'Assets — Awesome Nexa',
    meta: [{
        name: 'description',
        content: 'Assets'
    }]
})


const topAssets = ref(null)


const init = async () => {
    const response = await $fetch('/api/assets/top')
        .catch(err => console.error(err))
    // console.log('RESPONSE', response)

    topAssets.value = response.filter(_asset => {
        return _asset.documentUrl
    })
}


onMounted(() => {
    // init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
