<script setup>
/* Import modules. */


useHead({
    title: `Utilities — Awesome Nexa`,
    meta: [
        { name: 'description', content: `Utilities are the life-blood of the Nexa ecosystem.` }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

</script>

<template>
    <NuxtLayout name="category">
        <template #title>
            Utilities
        </template>

        <template #description>
            Utilities are the life-blood of the Nexa ecosystem.
        </template>

        <Gallery cat="utilities" />
    </NuxtLayout>
</template>
