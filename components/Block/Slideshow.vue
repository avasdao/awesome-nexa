<script setup lang="ts">
/* Import modules. */
import { createClient } from 'graphql-ws'
import moment from 'moment'
import numeral from 'numeral'

const props = defineProps({
    title: String,
    value: String,
})

/* Initialize Blocks (array). */
const blocks = ref([])

const MAX_BLOCKS_DISPLAYED = 8

const displayedTxs = computed(() => {
    return blocks.value.sort((a, b) => {
        return b.height - a.height
    }).slice(0, MAX_BLOCKS_DISPLAYED)
})

const avgBlockTime = computed(() => {
    if (!blocks.value?.length) {
        return 'n/a'
    }

    const numBlocks = blocks.value.length
    console.log('NUM BLOCKS', numBlocks)

    const duration = blocks.value[0].time - blocks.value[numBlocks - 1].time
    console.log('DURATION', duration, moment.duration(duration, 'seconds').humanize())

    const avg = duration / numBlocks
    console.log('AVG', avg)

    const rate = numeral(avg / 60.0).format('0[.]0')

    return rate
})

const displayTime = (_block) => {
    return moment.unix(_block.time).fromNow()
}

const displayTxCount = (_block) => {
    return numeral(_block.txcount).format('0,0') + ' txs'
}

const displaySize = (_block) => {
    return numeral(_block.size).format('0[.]0 ib')
}


/* Create client. */
const client = createClient({
    url: 'wss://nexa.sh/graphql',
})

const query = `
subscription Block {
  block {
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
}`

const onNext = (_buffer) => {
    // console.log('CONFIRMED', _buffer?.data?.block)

    if (_buffer?.data?.block) {
        blocks.value.push(_buffer?.data?.block)
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


const init = async () => {
    let response

    response = await $fetch('/api/block/slideshow')
        .catch(err => console.error(err))
    console.log('RESPONSE', response)

    response.forEach(_block => {
        blocks.value.push(_block)
    })
}

onMounted(() => {
    /* Start updates. */
    startUpdates()

    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>

<template>
    <main class="px-3 py-2 bg-gray-700 border-4 border-gray-900 rounded-xl shadow-md">
        <h2 class="text-2xl text-gray-100 font-medium">
            Most Recent Blocks
        </h2>

        <h3 class="text-xs text-gray-300 font-medium uppercase">
            Last 100 blocks confirmed on avg
            <br class="sm:hidden" />every <span class="text-base text-amber-400">{{avgBlockTime}}</span> minutes
        </h3>

        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 h-40 gap-4 overflow-hidden">
            <NuxtLink :to="'/block/' + block.height"
                class="mt-5 mb-2 px-3 py-2 h-32 flex flex-col justify-between bg-gray-300 border-2 border-gray-500 rounded-lg shadow group hover:bg-gray-200"
                v-for="block of displayedTxs" :key="block.height"
            >
                <span class="block text-base text-gray-700 font-medium uppercase group-hover:font-bold group-hover:text-rose-700">
                    #{{numeral(block.height).format('0,0')}}
                </span>

                <span class="block text-sm text-gray-700 font-medium truncate">
                    {{block.hash}}
                </span>

                <span class="block text-xs text-gray-700 text-right font-medium truncate">
                    {{displayTxCount(block)}}
                </span>

                <span class="block text-xs text-gray-700 text-right font-medium truncate">
                    {{displaySize(block)}}
                </span>

                <span class="block text-xs text-gray-700 text-right font-medium truncate">
                    {{displayTime(block)}}
                </span>
            </NuxtLink>
        </div>
    </main>
</template>
