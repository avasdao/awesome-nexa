<script setup>
useHead({
    title: 'Block - NexaShell',
    meta: [{
        name: 'description',
        content: 'Block'
    }]
})

const route = useRoute()
// console.log('ROUTE PARAMS', route.params)

const blocknum = route.params.blocknum

/* Set Nexa GraphQL endpoint. */
const ENDPOINT = 'https://nexa.sh/graphql'

const query = `
{
    block(height: [${blocknum}]) {
    hash
    confirmations
    height
    size
    txcount
    feePoolAmt
    merkleroot
    time
    mediantime
    nonce
    bits
    difficulty
    chainwork
    utxoCommitment
    minerData
    status
    onMainChain
    ancestorhash
    nextblockhash
    txid
    txidem
  }
}
`

let block

/* Make query request. */
const result = await $fetch(ENDPOINT,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ query }),
    })
    .catch(err => console.error(err))

if (result?.data?.block) {
    block = result.data.block[0]
}

// const init = async () => {
//     /* Initialize locals. */
//     let response
//
//     /* Request transaction. */
//     response = await $fetch('/v1/tx/' + id)
//         .catch(err => console.error(err))
//     // console.log('RESPONSE', response)
//
//     /* Set transaction details. */
//     transaction.value = response
//
//     /* Set flag. */
//     isLoaded.value = true
// }
//
// onMounted(() => {
//     init()
// })

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
