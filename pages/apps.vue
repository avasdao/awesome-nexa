<!-- pages/apps.vue -->
<template>
    <NuxtLayout name="category">
        <template #title>
            Apps
        </template>

        <template #description>
            Apps are the life-blood of the Nexa ecosystem.
        </template>

        <Gallery cat="apps" :showAll="true" />
    </NuxtLayout>
</template>

<script setup>
/* Import modules. */


useHead({
    title: `Apps — Awesome Nexa`,
    meta: [
        { name: 'description', content: `Apps are the life-blood of the Nexa ecosystem.` }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()
</script>
