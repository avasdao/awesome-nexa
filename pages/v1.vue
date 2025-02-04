<script setup lang="ts">
useHead({
    title: `API Homepage — Awesome Nexa`,
    meta: [
        { name: 'description', content: `Awesome Nexa API is a FREE data resource for Builders.` }
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

<template>
    <main class="max-w-5xl mx-auto py-5 flex flex-col gap-6">
        <h1 class="text-5xl font-medium">
            Awesome Nexa API Docs (v1)
        </h1>

        <p>
            Awesome Nexa offers OPEN access to its data.
            Learn how to leverage this information to enrich your own dApps and UX of your Users.
        </p>
    </main>

    <Footer />
</template>
