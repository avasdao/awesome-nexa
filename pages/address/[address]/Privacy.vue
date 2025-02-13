<script setup>
useHead({
    title: 'Privacy Report - NexaShell',
    meta: [{
        name: 'description',
        content: 'Privacy Report'
    }]
})

const route = useRoute()

console.log('ROUTE PARAMS', route.params)

const address = route.params.address
</script>

<template>
    <main class="">
        <main class="max-w-7xl mx-auto">
            <h1 class="text-4xl font-medium">
                Privacy Report
            </h1>

            <span class="block text-lg font-medium">
                {{ address }}
            </span>
        </main>
    </main>
</template>
