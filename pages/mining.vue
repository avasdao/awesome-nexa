<script setup>
/* Import modules. */

useHead({
    title: `Mining — Awesome Nexa`,
    meta: [
        { name: 'description', content: `Mining is the life-blood of the Nexa ecosystem.` }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

</script>

<template>
    <NuxtLayout name="category">
        <template #title>
            Mining
        </template>

        <template #description>
            Mining is the life-blood of the Nexa ecosystem.
        </template>

        <Gallery cat="mining" :showAll="true" />
    </NuxtLayout>
</template>
