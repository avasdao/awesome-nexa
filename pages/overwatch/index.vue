<template>
    <main class="max-w-5xl mx-auto py-5 flex flex-col gap-4">
        <h1 class="text-5xl font-medium">
            Overwatch
        </h1>

        <p>
            Create active monitoring agents that can perform predetermined actions.
        </p>
    </main>

    <Footer />
</template>

<script setup lang="ts">
useHead({
    title: `Overwatch — Awesome Nexa`,
    meta: [
        { name: 'description', content: `Create active monitoring agents that can perform predetermined actions.` }
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
