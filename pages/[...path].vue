<!-- pages/[...path].vue -->
<template>
    <ListingDetail v-if="hasListingDetail" :category="category" :listingid="listingid" />
    <PageNotFound v-if="isNotFound" />
</template>

<script setup lang="ts">
useHead({
    title: `Awesome Nexa`,
    meta: [
        { name: 'description', content: `Awesome Nexa makes building your next BIG idea effortless.` }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'

const System = useSystemStore()

const route = useRoute()
console.log('ROUTE', route)

const category = ref('')
// const slug = route.params.slug?.[0]
const path = ref(route?.path)
const listingid = ref()
const hasListingDetail = ref(false)
const isNotFound = ref(false)

/* Validate for transaction. */
// if (path && typeof path[0] !== 'undefined' && path[0].length === 64) {
//     /* Set transaction id. */
//     const txid = path[0]
//     console.log('TXID', txid)
//
//     // TODO: Validate transaction.
//
//     /* Redirect to transaction page. */
//     await navigateTo({ path: '/tx/' + txid })
// }

// if (path[0].slice(0, 7) === 'nexa:tr') {
//     /* Set group id. */
//     const groupid = path[0]
//     console.log('TOKEN ID', groupid)
//
//     // TODO: Validate token.
//
//     /* Redirect to token page. */
//     await navigateTo({ path: '/token/' + groupid })
// }

const init = () => {
    /* Validate (listing detail) path. */
    if (
        path.value.includes('/apps') ||
        path.value.includes('/defi') ||
        path.value.includes('/mining') ||
        path.value.includes('/tooling') ||
        path.value.includes('/wallets')
    ) {
        hasListingDetail.value = true
    }

    /* Validate listing. */
    if (hasListingDetail.value) {
        category.value = path.value.slice(1, path.value.indexOf('/', 1))

        listingid.value = path.value.slice(path.value.indexOf('/', 1) + 1)
    }

    if (!hasListingDetail.value) {
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
