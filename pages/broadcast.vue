<script setup>
useHead({
    title: 'Broadcast — Awesome Nexa',
    meta: [{
        name: 'description',
        content: 'Broadcast your raw bytecode transaction to the Mainnet.'
    }]
})

const route = useRoute()
// console.log('ROUTE PARAMS', route.params)

const bytecode = ref()
const txidem = ref()

/* Set Nexa GraphQL endpoint. */
const ENDPOINT = 'https://awesomenexa.org/graphql'

/**
 * Make Broadcast
 *
 * Broadcasts the (raw) bytecode of a transaction to the Mainnet.
 */
const makeBroadcast = async () => {
    /* Reset txidem. */
    txidem.value = null

    /* Validate bytecode. */
    if (!bytecode.value || bytecode.value === '') {
        throw new Error('Oops! You MUST provide a valid bytecode.')
    }

    /* Build query. */
    const query = `
    mutation Broadcast {
        broadcast(hexstring: "${bytecode.value}")
    }`

    /* Make query request. */
    const response = await $fetch(ENDPOINT,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ query }),
        })
        .catch(err => console.error(err))
    // console.log('GRAPHQL RESPONSE', response)

    /* Validate response. */
    if (response?.data?.broadcast) {
        txidem.value = response.data.broadcast

        /* Reset input. */
        bytecode.value = null
    }
}

const init = async () => {
    // TODO
}

onMounted(() => {
    // init()
})
</script>

<template>
    <main class="max-w-7xl mx-auto py-5 px-3 flex flex-col gap-6">
        <h1 class="text-5xl font-medium">
            Broadcast
        </h1>

        <div class="grid lg:grid-cols-3 gap-6">
            <section class="lg:col-span-2 flex flex-col gap-4">
                <p>
                    Broadcast your raw bytecode transaction to the Mainnet.
                </p>

                <textarea
                    v-model="bytecode"
                    placeholder="Paste your transaction bytecode here."
                    class="h-48 px-5 py-3 text-xl bg-amber-100 border-2 border-amber-300 rounded-xl shadow-md placeholder:text-amber-700"
                ></textarea>

                <NuxtLink :to="'tx/' + txidem" v-if="txidem" class="text-sm text-blue-500 font-medium italic">
                    {{txidem}}
                </NuxtLink>

                <button @click="makeBroadcast" class="px-3 py-2 bg-rose-500 border-2 border-rose-700 rounded-xl shadow text-2xl text-rose-100 font-medium tracking-widest hover:bg-rose-600">
                    Broadcast to Mainnet
                </button>

            </section>

            <section class="lg:col-span-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ullam, aliquid id est quibusdam hic, voluptas sunt laudantium aperiam ut molestiae ipsam tempore delectus officiis a qui corporis accusantium dolore.
            </section>
        </div>
    </main>
</template>
