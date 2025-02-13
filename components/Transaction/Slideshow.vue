<script setup lang="ts">
/* Import modules. */
import { createClient } from 'graphql-ws'

const props = defineProps({
    title: String,
    value: String,
})

/* Initialize Transactions (array). */
const transactions = ref([])

const MAX_TXS_DISPLAYED = 7

const displayedTxs = computed(() => {
    return transactions.value.reverse().slice(0, MAX_TXS_DISPLAYED)
})

/* Create client. */
const client = createClient({
    url: 'wss://nexa.sh/graphql',
})

const query = `
subscription {
  transaction {
    txidem
    txid
    confirmations
    size
    version
    locktime
    spends
    sends
    fee
    vin {
      outpoint
      amount
      scriptSig {
        asm
        hex
      }
      sequence
    }
    vout {
      value
      type
      n
      scriptPubKey {
        asm
        hex
        type
        scriptHash
        argsHash
        addresses
      }
      outpoint
    }
    blockhash
    time
    blocktime
    hex
  }
}`

const onNext = (_buffer) => {
    // console.log('MEMPOOL TX', _buffer?.data?.transaction)

    if (_buffer?.data?.transaction) {
        transactions.value.push(_buffer?.data?.transaction)
    }
}

let unsubscribe = () => {
    /* complete the subscription */
}

/**
 * Start Updates
 */
const startUpdates = async () => {
    await new Promise((resolve, reject) => {
        unsubscribe = client.subscribe({ query }, {
            next: onNext,
            error: reject,
            complete: resolve,
        })
    })
}

onMounted(() => {
    /* Start updates. */
    startUpdates()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>

<template>
    <main class="px-3 py-2 bg-gray-100 border-4 border-gray-400 rounded-xl shadow-md">
        <h2 class="text-2xl text-gray-700 font-medium">
            $NEXA Transactions
        </h2>

        <h3 class="text-xs text-gray-400 font-medium uppercase">
            Including pending in mempool
        </h3>

        <NuxtLink
            class="block my-5 px-3 py-2 bg-gray-300 border-2 border-gray-500 rounded-lg shadow"
            v-for="transaction of displayedTxs" :key="transaction.txidem"
            :to="'tx/' + transaction.txidem"
        >
            <!-- <span class="block text-xs text-gray-700 font-medium uppercase">
                Hash
            </span> -->

            <h3 class="text-sm text-gray-700 font-medium truncate">
                {{transaction.txidem}}
            </h3>
        </NuxtLink>
    </main>
</template>
