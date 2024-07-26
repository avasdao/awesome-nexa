<script setup>
/* Import modules. */


useHead({
    title: `Builders — Awesome Nexa`,
    meta: [
        { name: 'description', content: `Builders are the life-blood of the Nexa ecosystem.` }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

</script>

<template>
    <NuxtLayout name="category">
        <template #title>
            Builders
        </template>

        <template #description>
            Builders are the life-blood of the Nexa ecosystem.
        </template>

        <Gallery cat="builders" />
    </NuxtLayout>
</template>
