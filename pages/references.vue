<script setup>
/* Import modules. */


useHead({
    title: `References — Awesome Nexa`,
    meta: [
        { name: 'description', content: `References are the life-blood of the Nexa ecosystem.` }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

</script>

<template>
    <NuxtLayout name="category">
        <template #title>
            References
        </template>

        <template #description>
            References are the life-blood of the Nexa ecosystem.
        </template>

        <Gallery cat="references" :showAll="true" />
    </NuxtLayout>
</template>
