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

const category = ref(null)
const path = ref(route?.path)
const listingid = ref()
const isListing = ref(false)
const isNotFound = ref(false)

const init = () => {
    /* Validate path. */
    if (
        path.value.includes('/apps') ||
        path.value.includes('/mining')
    ) {
        isListing.value = true
    }

    /* Validate listing. */
    if (isListing.value) {
        category.value = path.value.slice(1, path.value.indexOf('/', 1))

        listingid.value = path.value.slice(path.value.indexOf('/', 1) + 1)
    }

    if (!isListing.value) {
        isNotFound.value = true
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
    <ListingDetail v-if="isListing" :category="category" :listingid="listingid" />
    <PageNotFound v-if="isNotFound" />
</template>
