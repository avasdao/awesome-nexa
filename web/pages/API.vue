<script setup>
/* Import modules. */
import { ref } from 'vue'

//
</script>

<template>
    <main class="px-3 max-w-5xl mx-auto">
        <div class="pt-10 flex justify-center">
            <h1 class="text-5xl font-bold tracking-widest">
                API Data Feeds
            </h1>
        </div>

        <section class="py-10 flex flex-col items-center">
            <h2 class="text-3xl font-medium italic">
                Full documentation is coming soon...
            </h2>

            <h3 class="mt-10 text-2xl font-medium">
                Available Endpoints:
            </h3>

            <ul class="list-disc mt-3 pl-10 flex flex-col gap-3">
                <li><a href="/api/v1/mining" class="text-blue-500 font-medium hover:underline">/api/v1/mining</a></li>
                <li><a href="/api/v1/wallets" class="text-blue-500 font-medium hover:underline">/api/v1/wallets</a></li>
            </ul>
        </section>

        <p class="flex flex-row items-center gap-2 mb-10 justify-center italic">
            <span class="text-sm text-gray-500 font-medium">Last updated:</span>
            <span class="text-lg text-rose-500 font-medium">February 5th, 2023</span>
        </p>
    </main>
</template>
