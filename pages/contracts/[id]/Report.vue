<script setup>
useHead({
    title: 'Contract Report - NexaShell',
    meta: [{
        name: 'description',
        content: 'Contract Report'
    }]
})

const route = useRoute()

console.log('ROUTE PARAMS', route.params)

const id = route.params.id
</script>

<template>
    <main class="max-w-5xl mx-auto px-3 py-10 flex flex-col gap-3">
        <h1 class="text-4xl text-gray-700 font-medium">
            Contract Report
        </h1>

        <span class="block text-lg text-gray-500 font-medium truncate">
            {{id}}
        </span>

        <p class="text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit at omnis alias minima ut quaerat tempore velit deserunt quia quisquam maxime, ipsam sequi? Vero animi explicabo obcaecati voluptatem alias.
        </p>

        <NuxtLink to="https://shuffle.cash" target="_blank" class="w-fit px-3 py-1 text-xl font-medium text-blue-500 bg-blue-100 border-2 border-blue-300 rounded-lg shadow hover:bg-blue-200">
            Visit Shuffle.cash
        </NuxtLink>
    </main>
</template>
