<script setup>
/* Import modules. */


useHead({
    title: `Wallets — Awesome Nexa`,
    meta: [
        { name: 'description', content: `Wallets are the life-blood of the Nexa ecosystem.` }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

</script>

<template>
    <NuxtLayout name="category">
        <template #title>
            Wallets
        </template>

        <template #description>
            Wallets are the life-blood of the Nexa ecosystem.
        </template>

        <Gallery cat="wallets" />
    </NuxtLayout>
</template>
