<!-- components/NetworkSpotlight.vue -->
<template>
    <div>
        <h3 class="pl-3 text-sm font-medium text-slate-500 tracking-widest uppercase">
            Network Spotlight
        </h3>

        <dl class="mt-2 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-stone-100 border border-stone-200 shadow md:grid-cols-3 md:divide-x md:divide-y-0">
            <div v-for="item in stats" :key="item.name" class="px-4 py-5 sm:p-6">
                <dt class="text-base font-normal text-gray-900">{{ item.name }}</dt>

                <dd class="mt-1 flex items-baseline justify-between md:block lg:flex">
                    <div class="flex items-baseline text-2xl font-semibold text-indigo-600">
                        {{ item.stat }}
                        <span class="ml-2 text-sm font-medium text-gray-500">from {{ item.previousStat }}</span>
                    </div>

                    <div :class="[item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800', 'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0']">
                        <ArrowUpIcon v-if="item.changeType === 'increase'" class="-ml-1 mr-0.5 size-5 shrink-0 self-center text-green-500" aria-hidden="true" />
                        <ArrowDownIcon v-else class="-ml-1 mr-0.5 size-5 shrink-0 self-center text-red-500" aria-hidden="true" />
                        <span class="sr-only"> {{ item.changeType === 'increase' ? 'Increased' : 'Decreased' }} by </span>
                        {{ item.change }}
                    </div>
                </dd>
            </div>
        </dl>
    </div>
</template>

<script setup>
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/vue/20/solid'

const stats = [
    { name: 'NFT Spotlight', stat: '71,897', previousStat: '70,946', change: '12%', changeType: 'increase' },
    { name: 'Token Spotlight', stat: '58.16%', previousStat: '56.14%', change: '2.02%', changeType: 'increase' },
    { name: 'Contract Spotlight', stat: '24.57%', previousStat: '28.62%', change: '4.05%', changeType: 'decrease' },
]
</script>
