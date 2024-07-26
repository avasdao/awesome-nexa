<script setup>
/* Import modules. */


useHead({
    title: `DeFi — Awesome Nexa`,
    meta: [
        { name: 'description', content: `DeFi are the life-blood of the Nexa ecosystem.` }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

</script>

<template>
    <NuxtLayout name="category">
        <template #title>
            DeFi
        </template>

        <template #description>
            DeFi are the life-blood of the Nexa ecosystem.
        </template>

        <Gallery cat="defi" />
    </NuxtLayout>
</template>
