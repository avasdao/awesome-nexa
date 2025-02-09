<script setup>
/* Import modules. */


useHead({
    title: `CEX — Awesome Nexa`,
    meta: [
        { name: 'description', content: `CEX are the life-blood of the Nexa ecosystem.` }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

</script>

<template>
    <NuxtLayout name="category">
        <template #title>
            Centralized Exchanges
        </template>

        <template #description>
            CEXs are the life-blood of the Nexa ecosystem.
        </template>

        <Gallery cat="cex" :showAll="true" />
    </NuxtLayout>
</template>
