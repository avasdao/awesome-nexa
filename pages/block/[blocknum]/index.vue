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
const blocknum = route.params.blocknum

/* Initialize handlers. */
const block = ref(null)

/* Set GraphQL endpoint. */
const ENDPOINT = 'https://awesomenexa.com/graphql'

const query = `
{
  block(height: ${blocknum}) {
    edges {
      node {
        height
      }
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
        block.value = result.data.block[0]
    }
}

onMounted(() => {
    init()
})
</script>

<template>
    <main v-if="block" class="">
        <main class="max-w-7xl mx-auto">
            <h1 class="text-4xl font-medium">
                Block # {{blocknum}}
            </h1>

            <BlockItem
                title="Block Hash"
                :value="block.hash"
            />

            <BlockItem
                title="Confirmations"
                :value="block.confirmations"
            />

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
                :value="block.txcount"
            />

            <BlockItem
                title="Fee Pool Amount"
                :value="block.feePoolAmt"
            />

            <BlockItem
                title="Merkle Root"
                :value="block.merkleroot"
            />

            <BlockItem
                title="Time"
                :value="block.time"
            />

            <BlockItem
                title="Median Time"
                :value="block.mediantime"
            />

            <BlockItem
                title="Nonce"
                :value="block.nonce"
            />

            <BlockItem
                title="Bits"
                :value="block.bits"
            />

            <BlockItem
                title="Difficulty"
                :value="block.difficulty"
            />

            <BlockItem
                title="Chainwork"
                :value="block.chainwork"
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
                :value="block.ancestorhash"
            />

            <BlockItem
                title="Next Block Hash"
                :value="block.nextblockhash"
            />

            <pre>{{JSON.stringify(block, null, 2)}}</pre>
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
