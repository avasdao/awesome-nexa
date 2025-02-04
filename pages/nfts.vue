<script setup>
/* Import modules. */


useHead({
    title: `NFT Collections — Awesome Nexa`,
    meta: [
        { name: 'description', content: `NFT are the life-blood of the Nexa ecosystem.` }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

</script>

<template>
    <NuxtLayout name="category">
        <template #title>
            NFT Collections
        </template>

        <template #description>
            NFTs are the life-blood of the Nexa ecosystem.
        </template>

        <Gallery cat="nfts" />
    </NuxtLayout>
</template>
