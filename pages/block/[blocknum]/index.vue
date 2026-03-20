<!-- pages/block/[blocknum]/index.vue -->
<template>
    <main v-if="block" class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <main class="py-8 px-4 max-w-7xl mx-auto flex flex-col gap-8">

            <!-- Header -->
            <header class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                    <p class="text-sm font-medium text-sky-600 tracking-widest uppercase">
                        Block Explorer
                    </p>
                    <h1 class="mt-1 text-4xl sm:text-5xl font-bold text-slate-800 tracking-tight">
                        Block <span class="text-sky-600">#{{blocknum.toLocaleString()}}</span>
                    </h1>
                </div>

                <section class="flex gap-3">
                    <NuxtLink :to="'/block/' + (blocknum - 1)" class="group flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-600 border border-slate-200 bg-white hover:bg-sky-50 hover:border-sky-300 hover:text-sky-700 rounded-xl shadow-sm transition-all duration-200">
                        <span class="text-slate-400 group-hover:text-sky-500 transition-colors">←</span>
                        Block # {{(blocknum - 1).toLocaleString()}}
                    </NuxtLink>

                    <NuxtLink :to="'/block/' + (blocknum + 1)" class="group flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-600 border border-slate-200 bg-white hover:bg-sky-50 hover:border-sky-300 hover:text-sky-700 rounded-xl shadow-sm transition-all duration-200">
                        Block # {{(blocknum + 1).toLocaleString()}}
                        <span class="text-slate-400 group-hover:text-sky-500 transition-colors">→</span>
                    </NuxtLink>
                </section>
            </header>

            <!-- Summary Cards -->
            <section class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <!-- <BlockItem
                    title="Block Hash"
                    :value="block.hash"
                /> -->

                <!-- <BlockItem
                    title="Confirmations"
                    :value="block.confirmations"
                /> -->

                <div class="relative overflow-hidden bg-white rounded-2xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
                    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-cyan-400"></div>
                    <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Height</p>
                    <p class="mt-2 text-3xl font-bold text-slate-800 tabular-nums">
                        {{block.height?.toLocaleString()}}
                    </p>
                </div>

                <div class="relative overflow-hidden bg-white rounded-2xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
                    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-400 to-purple-400"></div>
                    <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Size</p>
                    <p class="mt-2 text-3xl font-bold text-slate-800 tabular-nums">
                        {{block.size?.toLocaleString()}}
                    </p>
                </div>

                <div class="relative overflow-hidden bg-white rounded-2xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
                    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
                    <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Transaction Count</p>
                    <p class="mt-2 text-3xl font-bold text-slate-800 tabular-nums">
                        {{block.txCount?.toLocaleString()}}
                    </p>
                </div>

                <div class="relative overflow-hidden bg-white rounded-2xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
                    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-400"></div>
                    <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Fee Pool Amount</p>
                    <p class="mt-2 text-3xl font-bold text-slate-800 tabular-nums">
                        {{block.feePoolAmount?.toLocaleString()}}
                    </p>
                </div>
            </section>

            <!-- Merkle Root -->
            <section class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div class="px-5 py-3 bg-slate-50 border-b border-slate-200">
                    <h2 class="text-sm font-semibold text-slate-500 uppercase tracking-wider">Merkle Root</h2>
                </div>
                <div class="px-5 py-4">
                    <p class="text-base text-slate-800 font-mono break-all leading-relaxed">
                        {{block.merkleRoot}}
                    </p>
                </div>
            </section>

            <!-- Timing & Difficulty -->
            <section class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div class="px-5 py-3 bg-slate-50 border-b border-slate-200">
                    <h2 class="text-sm font-semibold text-slate-500 uppercase tracking-wider">Timing &amp; Difficulty</h2>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                    <div class="px-5 py-4">
                        <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Time</p>
                        <p class="mt-2 text-base text-slate-800 font-mono">
                            {{block.createdAt}}
                        </p>
                    </div>
                    <div class="px-5 py-4">
                        <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Median Time</p>
                        <p class="mt-2 text-base text-slate-800 font-mono">
                            {{block.createdAt}}
                        </p>
                    </div>
                    <div class="px-5 py-4">
                        <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Bits</p>
                        <p class="mt-2 text-base text-slate-800 font-mono">
                            {{block.bits}}
                        </p>
                    </div>
                    <div class="px-5 py-4">
                        <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Difficulty</p>
                        <p class="mt-2 text-base text-slate-400 italic">
                            n/a
                        </p>
                    </div>
                </div>
            </section>

            <!-- Technical Details -->
            <section class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div class="px-5 py-3 bg-slate-50 border-b border-slate-200">
                    <h2 class="text-sm font-semibold text-slate-500 uppercase tracking-wider">Technical Details</h2>
                </div>
                <div class="divide-y divide-slate-100">
                    <div class="px-5 py-4 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                        <p class="text-xs font-medium text-slate-400 uppercase tracking-wider sm:w-48 shrink-0 sm:pt-1">Nonce</p>
                        <p class="text-base text-slate-800 font-mono break-all">
                            {{block.nonce}}
                        </p>
                    </div>
                    <div class="px-5 py-4 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                        <p class="text-xs font-medium text-slate-400 uppercase tracking-wider sm:w-48 shrink-0 sm:pt-1">Chainwork</p>
                        <p class="text-base text-slate-800 font-mono break-all">
                            {{block.chainWork}}
                        </p>
                    </div>
                    <div class="px-5 py-4 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                        <p class="text-xs font-medium text-slate-400 uppercase tracking-wider sm:w-48 shrink-0 sm:pt-1">UTXO Commitment</p>
                        <p class="text-base text-slate-800 font-mono break-all">
                            {{block.utxoCommitment}}
                        </p>
                    </div>
                    <div class="px-5 py-4 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                        <p class="text-xs font-medium text-slate-400 uppercase tracking-wider sm:w-48 shrink-0 sm:pt-1">Miner Data</p>
                        <p class="text-base text-slate-800 font-mono break-all">
                            {{block.minerData}}
                        </p>
                    </div>
                </div>
            </section>

            <!-- Block Navigation (Hashes) -->
            <section class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div class="px-5 py-3 bg-slate-50 border-b border-slate-200">
                    <h2 class="text-sm font-semibold text-slate-500 uppercase tracking-wider">Block Chain Links</h2>
                </div>
                <div class="divide-y divide-slate-100">
                    <div class="px-5 py-4 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                        <p class="text-xs font-medium text-slate-400 uppercase tracking-wider sm:w-48 shrink-0 sm:pt-1">Ancestor Hash</p>
                        <p class="text-base text-slate-800 font-mono break-all">
                            {{block.ancestorHash}}
                        </p>
                    </div>
                    <div class="px-5 py-4 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                        <p class="text-xs font-medium text-slate-400 uppercase tracking-wider sm:w-48 shrink-0 sm:pt-1">Previous Block Hash</p>
                        <p class="text-base text-slate-800 font-mono break-all">
                            {{block.previousBlockHash}}
                        </p>
                    </div>

                    <!-- <BlockItem
                        title="Next Block Hash"
                        :value="block.nextBlockHash"
                    /> -->
                </div>
            </section>

            <!-- <pre>{{JSON.stringify(block, null, 2)}}</pre> -->
        </main>
    </main>

    <main v-else class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div class="max-w-7xl mx-auto px-5 py-20 flex flex-col items-center justify-center gap-4">
            <div class="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center">
                <span class="text-3xl">🔍</span>
            </div>
            <h1 class="text-4xl font-bold text-slate-800">
                Oops! No block found
            </h1>
            <p class="text-slate-500">
                Block #{{blocknum.toLocaleString()}} could not be retrieved. It may not exist yet.
            </p>
            <NuxtLink to="/" class="mt-4 px-6 py-2.5 text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-sm transition-colors">
                ← Back to Explorer
            </NuxtLink>
        </div>
    </main>
</template>

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
