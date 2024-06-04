<script setup>
/* Import modules. */
import { ref } from 'vue'

const status = await $fetch('/status')
console.log('STATUS', status)

const hello = await $fetch('/api/hello?name=Satoshi')
console.log('HELLO', hello)

</script>

<template>
    <main class="px-3 max-w-5xl mx-auto">
        <div class="pt-10 flex flex-col items-center">
            <h1 class="text-5xl font-bold tracking-widest">
                API Data Feeds
            </h1>

            <h2 class="text-3xl font-medium italic">
                Full documentation is coming soon...
            </h2>
        </div>

        <section class="py-10 flex flex-col items-center">
            <h3 class="text-2xl font-medium">
                Featured Endpoints
            </h3>

            <ul class="list-disc mt-3 pl-10 flex flex-col gap-3">
                <li><a href="/markets" class="text-blue-500 font-medium hover:underline">/markets</a></li>
                <li><a href="/mcap" class="text-blue-500 font-medium hover:underline">/mcap</a></li>
                <li><a href="/price" class="text-blue-500 font-medium hover:underline">/price</a></li>
                <li><a href="/status" class="text-blue-500 font-medium hover:underline">/status</a></li>
                <li><a href="/ticker" class="text-blue-500 font-medium hover:underline">/ticker</a></li>
            </ul>
        </section>

        <section class="py-10 flex flex-col items-center">
            <h3 class="text-2xl font-medium">
                Category Endpoints
            </h3>

            <ul class="list-disc mt-3 pl-10 flex flex-col gap-3">
                <li><a href="/api/mining" class="text-blue-500 font-medium hover:underline">/api/mining</a></li>
                <li><a href="/api/wallets" class="text-blue-500 font-medium hover:underline">/api/wallets</a></li>
            </ul>
        </section>

        <section class="py-10 flex flex-col items-center">
            <h3 class="text-2xl font-medium">
                Other Endpoints
            </h3>

            <ul class="list-disc mt-3 pl-10 flex flex-col gap-3">
                <li><a href="/api/nexid" class="text-blue-500 font-medium hover:underline">/api/nexid</a></li>
            </ul>
        </section>

        <section class="mx-20 my-5 py-3 grid grid-cols-2 gap-x-4 gap-y-2 bg-gradient-to-r from-gray-50 to-gray-200 border-2 border-gray-300 rounded shadow">
            <div class="col-span-2 flex justify-center">
                <h1 class="text-2xl text-gray-500 font-medium tracking-widest uppercase">
                    System Status
                </h1>
            </div>

            <div class="flex justify-end items-center">
                <h3 class="text-gray-500 font-medium uppercase">
                    Database
                </h3>
            </div>

            <div class="flex">
                <h2 class="text-xl text-green-600 font-medium">
                    {{ status?.database }}
                </h2>
            </div>

            <div class="flex justify-end items-center">
                <h3 class="text-gray-500 font-medium uppercase">
                    Price Ticker
                </h3>
            </div>

            <div class="flex">
                <h2 class="text-xl text-green-600 font-medium">
                    {{ status?.ticker }}
                </h2>
            </div>

            <div class="flex justify-end items-center">
                <h3 class="text-gray-500 font-medium uppercase">
                    NexID Server
                </h3>
            </div>

            <div class="flex">
                <h2 class="text-xl text-green-600 font-medium">
                    {{ status?.nexid }}
                </h2>
            </div>

        </section>

        <section class="mx-20 my-5 py-3 grid grid-cols-2 gap-x-4 gap-y-2 bg-gradient-to-r from-gray-50 to-gray-200 border-2 border-gray-300 rounded shadow">
            <div class="col-span-2 flex justify-center">
                <h1 class="text-2xl text-gray-500 font-medium tracking-widest uppercase">
                    Market Details
                </h1>
            </div>

            <div class="flex justify-end items-center">
                <h3 class="text-gray-500 font-medium uppercase">
                    Database
                </h3>
            </div>

            <div class="flex">
                <h2 class="text-xl text-green-600 font-medium">
                    {{ status?.db }}
                </h2>
            </div>

            <div class="flex justify-end items-center">
                <h3 class="text-gray-500 font-medium uppercase">
                    Price Ticker
                </h3>
            </div>

            <div class="flex">
                <h2 class="text-xl text-green-600 font-medium">
                    {{ status?.ticker }}
                </h2>
            </div>

            <div class="flex justify-end items-center">
                <h3 class="text-gray-500 font-medium uppercase">
                    NexID Server
                </h3>
            </div>

            <div class="flex">
                <h2 class="text-xl text-green-600 font-medium">
                    {{ status?.nexid }}
                </h2>
            </div>

        </section>

    </main>
</template>
