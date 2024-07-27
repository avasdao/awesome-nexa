<script setup lang="ts">
useHead({
    title: `Catch-all — Awesome Nexa`,
    meta: [
        { name: 'description', content: `Awesome Nexa makes building your next BIG idea effortless.` }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
import ListingDetail from '~/components/ListingDetail.vue';
const System = useSystemStore()

const route = useRoute()
// console.log('ROUTE', route)

const path = ref(route?.path)
const listingid = ref()

const init = () => {
    /* Initialize locals. */
    let isListing

    /* Set listing flag. */
    isListing = false

    /* Validate path. */
    if (path.value.includes('/apps/')) {
        isListing = true
    }

    /* Validate listing. */
    if (isListing) {
        listingid.value = path.value.slice(6)
    }
}

onMounted(() => {
    console.log('Mounted!', path.value)

    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>

<template>
    <!-- <PageNotFound /> -->
    <ListingDetail :listingid="listingid" />
</template>
