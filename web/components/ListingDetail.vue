<script setup>
/* Import modules. */

/* Define properties. */
const props = defineProps({
    category: String,
    listingid: String,
})

const listing = ref(null)
const isNotFound = ref(false)

watch(() => props.listingid, async (_newid, _oldid) => {
    // console.log('NEW ID', _newid)
    // console.log('OLD ID', _oldid)
    init()
})

const init = async () => {
    console.log('CATEGORY', props.category)
    console.log('LISTING ID', props.listingid)

    /* Validate listing id. */
    if (!props.listingid) {
        return
    }

    /* Request ALL listings. */
    const listings = await $fetch('/v1/listings/' + props.category)
        .catch(err => console.error(err))
    console.log('LISTINGS', listings)

    listing.value = listings.find(_listing => {
        return _listing?.slug === props.listingid
    })
    console.log('LISTING', listing.value)

    /* Validate listing. */
    if (!listing.value) {
        isNotFound.value = true
    }
}

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>

<template>
    <PageNotFound v-if="isNotFound" />
    <NuxtLayout v-if="listing" name="listing">
        <template #title>
            {{listing?.title}}
        </template>

        <template #url>
            <a
                :href="listing?.url"
                target="_blank"
                class="flex gap-2 sm:gap-3 group items-center px-3 sm:px-5 py-1 sm:py-2 bg-blue-500 text-base sm:text-xl text-blue-50 font-medium rounded-lg sm:rounded-2xl border-2 sm:border-4 border-blue-300 shadow sm:shadow-md hover:bg-blue-700 hover:border-yellow-400 hover:text-yellow-300"
            >
                {{listing?.url}}
                <svg class="w-4 h-4 sm:w-6 sm:h-6 group-hover:text-yellow-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                </svg>
            </a>
        </template>

        <template #slideshow>
            <img
                :src="listing?.imgUrl"
                class="w-full sm:w-7/12 h-96 border-2 border-gray-300 rounded-xl shadow-md object-cover"
            />
        </template>

        <template #summary>
            {{listing?.summary}}
        </template>

        <template #description>
            <p>
                {{listing?.description}}
            </p>
        </template>

    </NuxtLayout>
</template>
