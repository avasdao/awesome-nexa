<!-- pages/markets.vue -->
<template>
    <main class="max-w-5xl mx-auto py-5 flex flex-col gap-4">
        <h1 class="text-5xl font-medium">
            Markets
        </h1>

        <!-- Price Hero Banner -->
        <section class="bg-gradient-to-r from-sky-50 to-indigo-50 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="flex flex-col gap-1">
                <div class="flex items-center gap-3">
                    <img
                        src="https://nexa.org/favicon.ico"
                        alt="Nexa Logo"
                        class="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h2 class="text-2xl font-bold text-gray-900">
                            Nexa
                            <span class="text-sm font-normal text-gray-500 ml-1">NEXA</span>
                        </h2>
                        <span class="text-xs text-gray-400">Proof-of-Work · UTXO Layer-1</span>
                    </div>
                </div>

                <div class="flex items-end gap-3 mt-2">
                    <ClientOnly>
                        <span class="text-4xl font-bold text-sky-600 tracking-wider">
                            {{ displayTicker }}
                        </span>
                        <span class="text-sm text-gray-400 pb-1">mNEXA / USD</span>
                    </ClientOnly>
                </div>

                <ClientOnly>
                    <div class="flex items-center gap-4 mt-1">
                        <span
                            class="text-sm font-semibold"
                            :class="pctChgIsNegative ? 'text-red-500' : 'text-green-500'"
                        >
                            <svg v-if="pctChgIsNegative" class="inline w-3 h-3 mr-0.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"></path></svg>
                            <svg v-else class="inline w-3 h-3 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                            {{ displayPctChg }} (24h)
                        </span>

                        <span class="text-sm text-gray-400">
                            Vol: {{ displayVol }}
                        </span>
                    </div>
                </ClientOnly>
            </div>

            <div class="flex flex-col items-end gap-2">
                <NuxtLink
                    to="https://nexa.org"
                    target="_blank"
                    class="inline-flex items-center gap-1 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition"
                >
                    Visit Nexa.org
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5-6H21m0 0v7.5m0-7.5l-11.25 11.25" /></svg>
                </NuxtLink>

                <NuxtLink
                    to="https://explorer.nexa.org"
                    target="_blank"
                    class="text-xs text-indigo-500 hover:text-indigo-700 underline"
                >
                    Block Explorer →
                </NuxtLink>
            </div>
        </section>

        <!-- Key Statistics Grid -->
        <section>
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Key Statistics</h3>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div class="bg-white border border-gray-200 rounded-xl p-4 flex flex-col">
                    <span class="text-xs text-gray-400 uppercase tracking-wide">Market Cap</span>
                    <ClientOnly>
                        <span class="text-lg font-bold text-gray-900 mt-1">{{ displayMarketCap }}</span>
                    </ClientOnly>
                </div>

                <div class="bg-white border border-gray-200 rounded-xl p-4 flex flex-col">
                    <span class="text-xs text-gray-400 uppercase tracking-wide">24h Volume</span>
                    <ClientOnly>
                        <span class="text-lg font-bold text-gray-900 mt-1">{{ displayVol }}</span>
                    </ClientOnly>
                </div>

                <div class="bg-white border border-gray-200 rounded-xl p-4 flex flex-col">
                    <span class="text-xs text-gray-400 uppercase tracking-wide">Circulating Supply</span>
                    <span class="text-lg font-bold text-gray-900 mt-1">~10T NEXA</span>
                </div>

                <div class="bg-white border border-gray-200 rounded-xl p-4 flex flex-col">
                    <span class="text-xs text-gray-400 uppercase tracking-wide">Max Supply</span>
                    <span class="text-lg font-bold text-gray-900 mt-1">21T NEXA</span>
                </div>

                <div class="bg-white border border-gray-200 rounded-xl p-4 flex flex-col">
                    <span class="text-xs text-gray-400 uppercase tracking-wide">Consensus</span>
                    <span class="text-lg font-bold text-gray-900 mt-1">Proof-of-Work</span>
                </div>

                <div class="bg-white border border-gray-200 rounded-xl p-4 flex flex-col">
                    <span class="text-xs text-gray-400 uppercase tracking-wide">Architecture</span>
                    <span class="text-lg font-bold text-gray-900 mt-1">UTXO Layer-1</span>
                </div>

                <div class="bg-white border border-gray-200 rounded-xl p-4 flex flex-col">
                    <span class="text-xs text-gray-400 uppercase tracking-wide">Launch Date</span>
                    <span class="text-lg font-bold text-gray-900 mt-1">Jun 21, 2022</span>
                </div>

                <div class="bg-white border border-gray-200 rounded-xl p-4 flex flex-col">
                    <span class="text-xs text-gray-400 uppercase tracking-wide">Smart Contracts</span>
                    <span class="text-lg font-bold text-green-600 mt-1">Native ✓</span>
                </div>
            </div>
        </section>

        <!-- Price Chart Placeholder -->
        <section>
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Price Chart</h3>

            <div class="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center min-h-[300px]">
                <!-- Timeframe selector -->
                <div class="flex gap-2 mb-4 self-start">
                    <button
                        v-for="tf in timeframes"
                        :key="tf.value"
                        @click="selectedTimeframe = tf.value"
                        :class="[
                            'px-3 py-1 rounded-lg text-sm font-medium transition',
                            selectedTimeframe === tf.value
                                ? 'bg-indigo-600 text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        ]"
                    >
                        {{ tf.label }}
                    </button>
                </div>

                <!-- Placeholder chart area -->
                <div class="w-full h-[220px] bg-gradient-to-t from-sky-50 to-white rounded-lg border border-dashed border-gray-300 flex items-center justify-center">
                    <div class="text-center text-gray-400">
                        <svg class="w-12 h-12 mx-auto mb-2 text-gray-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
                        <p class="text-sm">Interactive chart coming soon</p>
                        <p class="text-xs mt-1">Timeframe: {{ selectedTimeframe }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Exchange Listings / Markets Table -->
        <section>
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Where to Trade NEXA</h3>

            <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <table class="w-full text-left">
                    <thead class="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th class="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">#</th>
                            <th class="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Exchange</th>
                            <th class="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Pair</th>
                            <th class="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide text-right">Price</th>
                            <th class="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide text-right hidden sm:table-cell">24h Volume</th>
                            <th class="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide text-center">Link</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                        <tr
                            v-for="(exchange, idx) in exchanges"
                            :key="exchange.name"
                            class="hover:bg-gray-50 transition"
                        >
                            <td class="px-4 py-3 text-sm text-gray-400">{{ idx + 1 }}</td>
                            <td class="px-4 py-3 text-sm font-medium text-gray-900">{{ exchange.name }}</td>
                            <td class="px-4 py-3 text-sm text-gray-600">{{ exchange.pair }}</td>
                            <td class="px-4 py-3 text-sm text-gray-900 text-right font-mono">{{ exchange.price }}</td>
                            <td class="px-4 py-3 text-sm text-gray-500 text-right hidden sm:table-cell">{{ exchange.volume }}</td>
                            <td class="px-4 py-3 text-center">
                                <NuxtLink
                                    :to="exchange.url"
                                    target="_blank"
                                    class="text-indigo-500 hover:text-indigo-700 text-sm underline"
                                >
                                    Trade →
                                </NuxtLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p class="text-xs text-gray-400 mt-2">
                * Prices and volumes are approximate and may differ between exchanges. Always verify on the exchange itself.
            </p>
        </section>

        <!-- About Nexa -->
        <section>
            <h3 class="text-xl font-semibold text-gray-800 mb-3">About Nexa</h3>

            <div class="bg-white border border-gray-200 rounded-xl p-6 text-gray-600 text-sm leading-relaxed flex flex-col gap-3">
                <p>
                    <strong>Nexa</strong> is a proof-of-work, UTXO Layer-1 blockchain with native tokens and smart contracts, designed to scale for global peer-to-peer usage. By utilizing purpose-built hardware acceleration, Nexa removes two of the most critical bottlenecks for scalability: signature validation and UTXO lookups.
                </p>

                <p>
                    Nexa uses an extremely unique PoW mining algorithm that incentivizes the market to produce commodity hardware accelerating node processing power — similar to how Bitcoin mining drove FPGA and ASIC development.
                </p>

                <p>
                    Launched on June 21, 2022, Nexa was initially CPU-mined and has since transitioned to GPU mining (AMD/NVIDIA) via third-party mining software. The project is developed by the Bitcoin Unlimited team.
                </p>

                <div class="flex flex-wrap gap-2 mt-2">
                    <NuxtLink
                        to="https://nexa.org"
                        target="_blank"
                        class="inline-flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-full px-3 py-1 transition"
                    >
                        🌐 Website
                    </NuxtLink>
                    <NuxtLink
                        to="https://spec.nexa.org"
                        target="_blank"
                        class="inline-flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-full px-3 py-1 transition"
                    >
                        📄 Spec
                    </NuxtLink>
                    <NuxtLink
                        to="https://explorer.nexa.org"
                        target="_blank"
                        class="inline-flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-full px-3 py-1 transition"
                    >
                        🔍 Explorer
                    </NuxtLink>
                    <NuxtLink
                        to="https://discord.gg/2yQNsZV6EJ"
                        target="_blank"
                        class="inline-flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-full px-3 py-1 transition"
                    >
                        💬 Discord
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- Disclaimer -->
        <section class="text-xs text-gray-400 border-t border-gray-100 pt-4 mt-2">
            <p>
                <strong>Disclaimer:</strong> The information on this page is provided for informational purposes only and does not constitute financial advice. Cryptocurrency markets are highly volatile. Always do your own research before making any investment decisions. Data shown may be delayed or approximate.
            </p>
        </section>
    </main>
</template>

<script setup lang="ts">
/* Import modules. */
import { useFormats } from '@/composables/useFormats'
const { formatNumber } = useFormats()

useHead({
    title: `Markets — Awesome Nexa`,
    meta: [
        { name: 'description', content: `Nexa (NEXA) markets overview — live price, key statistics, exchange listings, and more.` }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

/* Timeframes for chart selector. */
const timeframes = [
    { label: '1H', value: '1h' },
    { label: '24H', value: '24h' },
    { label: '7D', value: '7d' },
    { label: '1M', value: '1m' },
    { label: '3M', value: '3m' },
    { label: '1Y', value: '1y' },
    { label: 'ALL', value: 'all' },
]
const selectedTimeframe = ref('24h')

/* Mock exchange listing data. */
const exchanges = ref([
    {
        name: 'CoinEx',
        pair: 'NEXA / USDT',
        price: '—',
        volume: '—',
        url: 'https://www.coinex.com/exchange/nexa-usdt',
    },
    {
        name: 'TradeOgre',
        pair: 'NEXA / BTC',
        price: '—',
        volume: '—',
        url: 'https://tradeogre.com/exchange/NEXA-BTC',
    },
    {
        name: 'Exbitron',
        pair: 'NEXA / USDT',
        price: '—',
        volume: '—',
        url: 'https://www.exbitron.com/trading/nexausdt',
    },
    {
        name: 'TxBit',
        pair: 'NEXA / USDT',
        price: '—',
        volume: '—',
        url: 'https://txbit.io/Trade/NEXA/USDT',
    },
    {
        name: 'SafeTrade',
        pair: 'NEXA / BTC',
        price: '—',
        volume: '—',
        url: 'https://safe.trade/trading/nexabtc',
    },
])

/* Computed display values (reused from header pattern). */
const displayTicker = computed(() => {
    if (!System.ticker) {
        return '$0.00'
    }

    /* Set quote. */
    const quote = System.ticker.quote

    /* Validate quote. */
    if (!quote) {
        return '$0.00'
    }

    /* Set price. */
    const price = quote?.USD?.price

    /* Validate price. */
    if (!price) {
        return '$0.00'
    }

    /* Return formatted price. */
    return formatNumber(price * 1000000, '$0,0.00')
})

const displayPctChg = computed(() => {
    if (!System.ticker) {
        return '0.0%'
    }

    /* Set quote. */
    const quote = System.ticker.quote

    /* Validate quote. */
    if (!quote) {
        return '0.0%'
    }

    /* Set percentage change. */
    const pctChg24h = quote?.USD?.pctChg24h

    /* Validate change. */
    if (!pctChg24h) {
        return '0.0%'
    }

    /* Return formatted price. */
    return formatNumber(pctChg24h / 100, '0.00%')
})

const pctChgIsNegative = computed(() => {
    return displayPctChg.value.startsWith('-')
})

const displayVol = computed(() => {
    if (!System.ticker) {
        return '$0'
    }

    /* Set quote. */
    const quote = System.ticker.quote

    /* Validate quote. */
    if (!quote) {
        return '$0'
    }

    /* Set volume. */
    const vol = quote?.USD?.vol24

    /* Validate volume. */
    if (!vol) {
        return '$0'
    }

    /* Return formatted volume. */
    return '$' + formatNumber(vol, '0[.]0a')
})

const displayMarketCap = computed(() => {
    if (!System.ticker) {
        return '—'
    }

    /* Set quote. */
    const quote = System.ticker.quote

    /* Validate quote. */
    if (!quote) {
        return '—'
    }

    /* Set market cap. */
    const marketCap = quote?.USD?.marketCap

    /* Validate market cap. */
    if (!marketCap) {
        return '—'
    }

    /* Return formatted market cap. */
    return '$' + formatNumber(marketCap, '0[.]0a')
})

// onMounted(() => {
//     console.log('Markets page mounted!')
//     // Now it's safe to perform setup operations.
//     // TODO: Fetch live exchange data and populate the exchanges table.
// })

// onBeforeUnmount(() => {
//     console.log('Markets page before unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
