<script setup>
/* Import modules. */
import moment from 'moment'
import numeral from 'numeral'

useHead({
    title: 'Contracts - NexaShell',
    meta: [{
        name: 'description',
        content: 'Wise Contracts are the MOST efficient smart contracts available in the blockchain ecosystem.'
    }]
})

/* Set Nexa GraphQL endpoint. */
const ENDPOINT = 'https://nexa.sh/graphql'
const META_QUERY_COUNT_MIN = 5

const contracts = ref(null)
const scripts = ref(null)
const uniqueScripts = ref(null)

const isShowingMenu = ref(false)
// const totalTxCount = ref(0)





const displayCards = computed(() => {
    if (!uniqueScripts.value) {
        return []
    }

    const sorted = []

    Object.keys(uniqueScripts.value).forEach(_scriptid => {
        // console.log('SCRIPT ID', _scriptid)
        const script = uniqueScripts.value[_scriptid]

        sorted.push({
            id: _scriptid.toLowerCase(),
            ...script,
        })
    })

    sorted.sort((a, b) => {
        return b.count - a.count
    })

    /* Return TOP10 (contract) cards. */
    return sorted.slice(0, 10)
})

const loadScripts = async (_first) => {
    const query = `
    {
      script(first: ${_first}) {
        totalCount
        pageInfo {
          hasPreviousPage
          startCursor
          hasNextPage
          endCursor
        }
        edges {
          node {
            txidem
            time
            vout {
              scriptPubKey {
                scriptHash
                asm
              }
            }
          }
          cursor
        }
      }
    }
    `

    // let block

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
    console.log('RESULT', result)
    // if (result?.data?.block) {
    //     block = result.data.block[0]
    // }

    if (result?.data.script) {
        scripts.value = result.data.script.edges

        loadUnique()
    }

}

const init = async () => {
    const MAXIMUM_RESULTS = 10000

    contracts.value = []
    uniqueScripts.value = []

    // await loadScripts()
}


onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>

<template>
    <main class="px-3 py-5 max-w-7xl mx-auto">
        <h1 class="text-4xl font-medium">
            <em class="text-rose-400">Wise</em>
            <span class="ml-0 sm:ml-2 block sm:inline text-5xl sm:text-4xl">Contracts</span>
        </h1>

        <p class="my-5 pl-0 sm:pl-5 w-full lg:w-2/3 text-gray-500 leading-7">
            Nexa uses an ultra-scalable smart-contract system which <span class="text-rose-500 font-medium">enables practically everything possible on an EVM network <em>(eg. Ethereum)</em></span>, but without the major scaling bottlenecks.

            <span class="mt-3 sm:mt-0 block sm:inline text-sm italic">
                We call these <span class="text-rose-500 font-medium italic">"Wise Contracts"</span> because not only are they smart, but also wise in how skillfully they manage the network's precious (global) resources.
            </span>
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-3">
            <div class="flex flex-col gap-3 pr-5">
                <h2 class="text-xl font-medium">
                    Contract Search
                </h2>

                <input
                    type="text"
                    placeholder="Search by name or purpose"
                    class="px-3 py-1 w-full text-lg bg-amber-100 border-2 border-amber-300 rounded-lg shadow"
                    disabled
                />

                <!-- <h3 class="text-xl font-medium">
                    Category Filter
                </h3>

                <ul class="list-disc pl-10">
                    <li>
                        Identity Tokens
                    </li>
                </ul> -->
            </div>

            <section class="col-span-2">

                <div class="mt-3 px-5 py-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div v-if="uniqueScripts" class="flex flex-row items-center gap-2">
                        <h2 class="text-gray-700 text-base font-medium tracking-widest leading-5">
                            Total # of Wise
                            <br />Contracts Created
                        </h2>

                        <h2 class="text-5xl font-medium text-fuchsia-600 italic">
                            {{numeral(Object.keys(uniqueScripts).length).format('0,0')}}
                        </h2>
                    </div>

                    <div v-if="scripts" class="flex flex-row items-center gap-2">
                        <h2 class="text-gray-700 text-base font-medium tracking-widest leading-5">
                            Total # of Wise
                            <br />Transactions Completed
                        </h2>

                        <h2 class="text-5xl font-medium text-fuchsia-600 italic">
                            {{numeral(scripts.length).format('0,0')}}
                        </h2>
                    </div>
                </div>

                <div class="px-5 mt-5 w-full sm:w-fit flex flex-row justify-between sm:gap-20">
                    <div class="w-fit flex flex-col items-center gap-1">
                        <button type="button" class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" aria-checked="false">
                            <span class="sr-only">Use setting</span>
                            <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white"></span>
                            <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
                            <span aria-hidden="true" class="bg-indigo-600 pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out"></span>
                            <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                            <span aria-hidden="true" class="translate-x-5 pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out"></span>
                        </button>

                        <h4 class="text-sm text-gray-500">
                            Nexa
                        </h4>
                    </div>

                    <div class="w-fit flex flex-col items-center gap-1">
                        <button type="button" class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" aria-checked="false">
                            <span class="sr-only">Use setting</span>
                            <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white"></span>
                            <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
                            <span aria-hidden="true" class="bg-gray-200 pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out"></span>
                            <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                            <span aria-hidden="true" class="translate-x-0 pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out"></span>
                        </button>

                        <h4 class="text-sm text-gray-300 line-through">
                            Bitcoin Cash
                        </h4>
                    </div>

                    <div class="w-fit flex flex-col items-center gap-1">
                        <button type="button" class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" aria-checked="false">
                            <span class="sr-only">Use setting</span>
                            <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white"></span>
                            <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
                            <span aria-hidden="true" class="bg-gray-200 pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out"></span>
                            <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                            <span aria-hidden="true" class="translate-x-0 pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out"></span>
                        </button>

                        <h4 class="text-sm text-gray-300 line-through">
                            Bitcoin
                        </h4>
                    </div>
                </div>

                <ul role="list" class="mt-5 mb-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:gap-x-8">

                    <div v-if="displayCards.length === 0">
                        <SkeletonContract />
                    </div>

                    <NuxtLink :to="'/contracts/' + contract.id" v-for="contract of displayCards" :key="contract.id" class="overflow-hidden rounded-xl border border-gray-200">
                        <div class="relative flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                            <img
                                :src="contract.bannerUrl"
                                :alt="contract.title"
                                class="-ml-6 absolute w-full h-full object-cover"
                            />

                            <div class="-ml-6 absolute w-full h-full bg-gray-900 opacity-80" />

                            <img
                                :src="contract.iconUrl"
                                :alt="contract.title"
                                class="z-10 w-16 h-auto p-2 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 border-2 border-amber-300"
                            />

                            <div class="flex flex-col gap-2 z-10 font-medium leading-6 text-gray-100 truncate">
                                <h2 class="text-2xl uppercase tracking-wider text-white truncate">
                                    {{contract.title}}
                                </h2>

                                <h3 class="-mt-2 text-sm text-amber-300 font-medium tracking-widest">
                                    Contract ID 0x{{contract.id?.slice(0, 8).toUpperCase()}}
                                </h3>

                                <div class="flex flex-row gap-3">
                                    <div v-if="contract.version" class="w-fit rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-indigo-700 bg-indigo-50 ring-indigo-600/10">
                                        v{{contract.version}}
                                    </div>

                                    <div v-if="contract.type" class="w-fit rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-indigo-700 bg-indigo-50 ring-indigo-600/10">
                                        {{contract.type}}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <dl class="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                            <div class="flex justify-between gap-x-4 py-3">
                                <dt class="text-gray-500 font-medium">
                                    Total transactions
                                </dt>

                                <dd class="text-fuchsia-600 text-lg font-medium">
                                    {{contract.count}}
                                </dd>
                            </div>

                            <div v-if="contract.timestamp" class="flex justify-between gap-x-4 py-3">
                                <dt class="text-gray-500 font-medium">
                                    Last activity
                                </dt>

                                <dd class="text-fuchsia-600 text-sm font-medium">
                                    {{moment.unix(contract.timestamp).fromNow()}}
                                </dd>
                            </div>

                            <!-- <div class="flex justify-between gap-x-4 py-3">
                                <dt class="text-gray-500">
                                    Amount
                                </dt>

                                <dd class="flex items-start gap-x-2">
                                    <div class="font-medium text-gray-900">
                                        $2,000.00
                                    </div>

                                    <div class="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/10">
                                        Verified
                                    </div>
                                </dd>
                            </div> -->

                        </dl>
                    </NuxtLink>
                </ul>
            </section>
        </div>
    </main>

    <!-- <pre>{{ scripts }}</pre> -->
</template>
