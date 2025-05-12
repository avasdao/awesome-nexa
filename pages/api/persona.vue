<template>
    <main class="max-w-5xl mx-auto py-5 flex flex-col gap-4">
        <h1 class="text-5xl font-medium">
            Persona API
        </h1>

        <p>
            Connect with real-time Persona data; request assets, history and owner details with simple REST calls.
        </p>
    </main>

    <Footer />
</template>

<script setup lang="ts">
useHead({
    title: `Persona API — Awesome Nexa`,
    meta: [
        { name: 'description', content: `Awesome Nexa makes building your next BIG idea effortless.` }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

// onMounted(() => {
//     console.log('Mounted!')
//     // Now it's safe to perform setup operations.
// })

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
