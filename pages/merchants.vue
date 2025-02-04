<script setup>
/* Import modules. */


useHead({
    title: `Merchants — Awesome Nexa`,
    meta: [
        { name: 'description', content: `Merchants are the life-blood of the Nexa ecosystem.` }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

</script>

<template>
    <NuxtLayout name="category">
        <template #title>
            Merchants
        </template>

        <template #description>
            Merchants are the life-blood of the Nexa ecosystem.
        </template>

        <Gallery cat="merchants" />
    </NuxtLayout>
</template>
