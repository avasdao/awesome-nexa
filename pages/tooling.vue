<script setup>
/* Import modules. */


useHead({
    title: `Tooling — Awesome Nexa`,
    meta: [
        { name: 'description', content: `Tooling is the life-blood of the Nexa ecosystem.` }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

</script>

<template>
    <NuxtLayout name="category">
        <template #title>
            Tooling
        </template>

        <template #description>
            Tooling is the life-blood of the Nexa ecosystem.
        </template>

        <Gallery cat="tooling" :showAll="true" />
    </NuxtLayout>
</template>
