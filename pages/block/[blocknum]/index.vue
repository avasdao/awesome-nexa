<script setup>
useHead({
    title: 'Block — Awesome Nexa',
    meta: [{
        name: 'description',
        content: 'Block'
    }]
})

const route = useRoute()
// console.log('ROUTE PARAMS', route.params)

/* Set block number. */
const blocknum = parseInt(route.params.blocknum)

/* Initialize handlers. */
const block = ref(null)

/* Set GraphQL endpoint. */
const ENDPOINT = 'https://awesomenexa.org/graphql'

const query = `
{
  block(height: ${blocknum}) {
    edges {
      node {
        height
        previousBlockHash
        bits
        ancestorHash
        merkleRoot
        txFilterHash
        chainWork
        size
        txCount
        feePoolAmount
        utxoCommitment
        minerData
        nonce
        createdAt
      }
      cursor
    }
  }
}
`

const init = async () => {
    /* Make query request. */
    const result = await $fetch(ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ query }),
    }).catch(err => console.error(err))
console.log('BLOCK RESULT', result)

    /* Validate result. */
    if (result?.data?.block) {
        block.value = result.data.block.edges[0].node
    }
}

onMounted(() => {
    init()
})
</script>

<template>
    <main v-if="block" class="">
        <main class="py-5 max-w-7xl mx-auto flex flex-col gap-4">
            <h1 class="text-4xl font-medium">
                Block # {{blocknum}}
            </h1>

            <section class="flex gap-4">
                <NuxtLink :to="'/block/' + (blocknum - 1)" class="px-3 py-2 text-sm border border-slate-200 bg-slate-100 hover:bg-sky-100 rounded shadow">
                    Go to Block # {{(blocknum - 1)}}
                </NuxtLink>

                <NuxtLink :to="'/block/' + (blocknum + 1)" class="px-3 py-2 text-sm border border-slate-200 bg-slate-100 hover:bg-sky-100 rounded shadow">
                    Go to Block # {{(blocknum + 1)}}
                </NuxtLink>
            </section>

            <section class="grid grid-cols-4 gap-4">
                <!-- <BlockItem
                    title="Block Hash"
                    :value="block.hash"
                /> -->

                <!-- <BlockItem
                    title="Confirmations"
                    :value="block.confirmations"
                /> -->

                <BlockItem
                    title="Height"
                    :value="block.height"
                />

                <BlockItem
                    title="Size"
                    :value="block.size"
                />

                <BlockItem
                    title="Transaction Count"
                    :value="block.txCount"
                />

                <BlockItem
                    title="Fee Pool Amount"
                    :value="block.feePoolAmount"
                />
            </section>

            <section class="grid grid-cols-1 gap-4">
                <BlockItem
                    title="Merkle Root"
                    :value="block.merkleRoot"
                />
            </section>

            <section class="grid grid-cols-4 gap-4">
                <BlockItem
                    title="Time"
                    :value="block.createdAt"
                />

                <BlockItem
                    title="Median Time"
                    :value="block.createdAt"
                />

                <BlockItem
                    title="Bits"
                    :value="block.bits"
                />

                <BlockItem
                    title="Difficulty"
                    value="n/a"
                />
            </section>

            <section class="grid grid-cols-1 gap-4">
                <BlockItem
                    title="Nonce"
                    :value="block.nonce"
                />

                <BlockItem
                    title="Chainwork"
                    :value="block.chainWork"
                />

                <BlockItem
                    title="UTXO Commitment"
                    :value="block.utxoCommitment"
                />

                <BlockItem
                    title="Miner Data"
                    :value="block.minerData"
                />

                <BlockItem
                    title="Ancestor Hash"
                    :value="block.ancestorHash"
                />

                <BlockItem
                    title="Previous Block Hash"
                    :value="block.previousBlockHash"
                />

                <!-- <BlockItem
                    title="Next Block Hash"
                    :value="block.nextBlockHash"
                /> -->
            </section>

            <!-- <pre>{{JSON.stringify(block, null, 2)}}</pre> -->
        </main>
    </main>

    <main v-else class="max-w-7xl mx-auto">
        <div class="px-5 py-20 flex w-full justify-center">
            <h1 class="text-4xl font-medium">
                Oops! No block found
            </h1>
        </div>
    </main>
</template>
