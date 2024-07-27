<script setup>
/* Import modules. */


useHead({
    title: `Media — Awesome Nexa`,
    meta: [
        { name: 'description', content: `News & Media are the life-blood of the Nexa ecosystem.` }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

</script>

<template>
    <NuxtLayout name="category">
        <template #title>
            News &amp; Media
        </template>

        <template #description>
            News &amp; Media are the life-blood of the Nexa ecosystem.
        </template>

        <Gallery cat="media" />
    </NuxtLayout>
</template>
