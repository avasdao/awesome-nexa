<script setup>
/* Import modules. */
import { ref } from 'vue'

const articles = ref([])

articles.value[0] = {
    id: '67ead8c7-8647-4e22-9328-214802d69384',
    category: 'Economics',
    title: `Nexa’s Supply Schedule - Using A Tried and True Model`,
    author: `Paul Church`,
    url: 'https://www.nexa.org/news/nexa-s-supply-schedule-using-a-tried-and-true-model',
    banner: 'https://i.ibb.co/jbkcpsK/nexa-supply.jpg',
    description: `To put it simply, Nexa’s supply schedule maps directly to Bitcoin’s. 2.1 quadrillion (2,100,000,000,000,000) satoshis will have been mined in roughly 140 years time, or 21 trillion NEX...`,
    readTime: 6,
    publishedAt: 'Dec 19, 2022',
}

articles.value[1] = {
    id: '839b8a96-9e16-49cc-877e-9bba7c0b4520',
    category: 'Scaling',
    title: `Nexa’s Scaling Strategy - How We Enable Over 100,000TPS`,
    author: `Paul Church`,
    url: 'https://www.nexa.org/news/nexa-s-scaling-strategy-how-we-enable-over-100-000tps',
    banner: 'https://i.ibb.co/9Z8znXc/image.png',
    description: `There are a number of bottlenecks to allowing blockchain scaling on a PoW and UTXO-based network but they can be summarised as:

Bandwidth: how much data can be sent between nodes.
Speed: at validating transactions.
Storage: space to store the blockchain.`,
    readTime: 6,
    publishedAt: 'Dec 13, 2022',
}

articles.value[2] = {
    id: 'caa4c43f-16f3-470f-88ea-1b6b2122565a',
    category: 'Software, Mining, Bounty',
    title: `$10,000 Bounty for an Open-source GPU Mining Software Provided By B.U.`,
    author: `Paul Church`,
    url: 'https://www.nexa.org/news/10-000-bounty-for-an-open-source-gpu-mining-software-provided-by-b.u',
    banner: 'https://i.ibb.co/N61S3nK/image.png',
    description: `'Today, B.U. announces a bounty equivalent to US$10,000 (paid in BTC or BCH) for fully functional and fully open-source GPU mining software made free to the community.`,
    readTime: 2,
    publishedAt: 'Nov 21, 2022',
}

</script>

<template>
    <div class="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div class="absolute inset-0">
            <div class="h-1/3 bg-white sm:h-2/3"></div>
        </div>

        <div class="relative mx-auto max-w-7xl">
            <div class="text-center">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Nexa In The News
                </h2>

                <p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                    It's ALL right here!
                    Don't miss a thing.
                    Stay up-to-date on everything that's happening right now in the World of Nexa!
                </p>
            </div>

            <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">

                <a
                    v-for="article of articles"
                    :key="article.id"
                    :href="article.url"
                    target="_blank"
                    class="flex flex-col overflow-hidden rounded-lg shadow-lg"
                >
                    <div class="flex-shrink-0">
                        <img class="h-48 w-full object-cover" :src="article.banner" alt="" />
                    </div>

                    <div class="flex flex-1 flex-col justify-between bg-white p-6">
                        <div class="flex-1">
                            <p class="text-sm font-medium text-indigo-600">
                                <a href="javascript://" class="hover:underline">
                                    {{article.category}}
                                </a>
                            </p>
                            <span class="mt-2 block">
                                <p class="text-xl font-semibold text-gray-900">
                                    {{article.title}}
                                </p>

                                <p class="mt-3 text-base text-gray-500">
                                    {{article.description}}
                                </p>
                            </span>
                        </div>

                        <div class="mt-6 flex items-center">
                            <div class="flex-shrink-0">
                                <a href="javascript://">
                                    <span class="sr-only">Paul Church</span>
                                    <img class="h-10 w-10 rounded-full" src="https://i.ibb.co/XSxwsRV/image.png" alt="" />
                                </a>
                            </div>

                            <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">
                                    <a href="javascript://" class="hover:underline">{{article.author}}</a>
                                </p>

                                <div class="flex space-x-1 text-sm text-gray-500">
                                    <time datetime="2020-03-16">{{article.publishedAt}}</time>
                                    <span aria-hidden="true">&middot;</span>
                                    <span>{{article.readTime}} min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    //
}
</script>
