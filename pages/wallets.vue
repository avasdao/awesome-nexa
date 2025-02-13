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

        <section>
            <h2 class="text-3xl font-medium">
                Rich List
            </h2>

            <ul>
                <li>Plankton: 10K - 100K</li>
                <li>Shrimp: 100K - 1M</li>
                <li>Crab: 1M - 10M</li>
                <li>Fish: 10M - 100M</li>
                <li>Dolphin: 100M - 1B</li>
                <li>Shark: 1B - 10B</li>
                <li>Whale: 10B - 100B</li>
                <li>Aquaman: 100B+</li>
            </ul>
        </section>

        <Gallery cat="wallets" :showAll="true" />
    </NuxtLayout>
</template>
