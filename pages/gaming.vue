<script setup>
/* Import modules. */


useHead({
    title: `Gaming — Awesome Nexa`,
    meta: [
        { name: 'description', content: `Gaming is the life-blood of the Nexa ecosystem.` }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

</script>

<template>
    <NuxtLayout name="category">
        <template #title>
            Gaming
        </template>

        <template #description>
            Gaming is the life-blood of the Nexa ecosystem.
        </template>

        <Gallery cat="gaming" :showAll="true" />
    </NuxtLayout>
</template>
