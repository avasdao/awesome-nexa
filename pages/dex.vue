<script setup>
/* Import modules. */


useHead({
    title: `DEX — Awesome Nexa`,
    meta: [
        { name: 'description', content: `DEX are the life-blood of the Nexa ecosystem.` }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

</script>

<template>
    <NuxtLayout name="category">
        <template #title>
            Decentralized Exchanges
        </template>

        <template #description>
            DEX are the life-blood of the Nexa ecosystem.
        </template>

        <Gallery cat="dex" :showAll="true" />
    </NuxtLayout>
</template>
