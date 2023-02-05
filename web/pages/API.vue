<script setup>
/* Import modules. */
import { ref } from 'vue'

//
</script>

<template>
    <main class="max-w-5xl mx-auto">
        <div class="pt-10 flex justify-center">
            <h1 class="text-5xl font-bold tracking-widest">
                API Documentation
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
                <li><a href="/api/mining" class="text-blue-500 font-medium hover:underline">/api/mining</a></li>
                <li><a href="/api/wallets" class="text-blue-500 font-medium hover:underline">/api/wallets</a></li>
            </ul>
        </section>
    </main>
</template>
