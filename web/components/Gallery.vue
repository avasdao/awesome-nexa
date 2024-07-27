<script setup>
/* Import modules. */

/* Define properties. */
const props = defineProps({
    cat: String,
})

const MAXIMUM_LISTINGS_PER_CATEGORY = 6

const listings = ref()

const featuredListings = computed(() => {
    // console.log('LISTINGS', listings)
    if (listings?.value) {
        return listings.value.slice(0, MAXIMUM_LISTINGS_PER_CATEGORY)
    }

    return []
})

const init = async () => {
    // console.log('INIT CATEGORY', props.cat)

    /* Initialize locals. */
    let response

    switch(props.cat) {
    case 'apps':
        listings.value = await $fetch('/v1/listings/apps')
            .catch(err => console.error(err))
        break
    case 'builders':
        listings.value = await $fetch('/v1/listings/builders')
            .catch(err => console.error(err))
        break
    case 'cex':
        listings.value = await $fetch('/v1/listings/cex')
            .catch(err => console.error(err))
        break
    case 'daos':
        listings.value = await $fetch('/v1/listings/daos')
            .catch(err => console.error(err))
        break
    case 'defi':
        listings.value = await $fetch('/v1/listings/defi')
            .catch(err => console.error(err))
        break
    case 'dex':
        listings.value = await $fetch('/v1/listings/dex')
            .catch(err => console.error(err))
        break
    case 'gaming':
        listings.value = await $fetch('/v1/listings/gaming')
            .catch(err => console.error(err))
        break
    case 'media':
        listings.value = await $fetch('/v1/listings/media')
            .catch(err => console.error(err))
        break
    case 'merchants':
        listings.value = await $fetch('/v1/listings/merchants')
            .catch(err => console.error(err))
        break
    case 'mining':
        listings.value = await $fetch('/v1/listings/mining')
            .catch(err => console.error(err))
        break
    case 'nfts':
        listings.value = await $fetch('/v1/listings/nfts')
            .catch(err => console.error(err))
        break
    case 'references':
        listings.value = await $fetch('/v1/listings/references')
            .catch(err => console.error(err))
        break
    case 'tooling':
        listings.value = await $fetch('/v1/listings/tooling')
            .catch(err => console.error(err))
        break
    case 'utilities':
        listings.value = await $fetch('/v1/listings/utilities')
            .catch(err => console.error(err))
        break
    case 'wallets':
        listings.value = await $fetch('/v1/listings/wallets')
            .catch(err => console.error(err))
        break
    }
    // console.log('LISTINGS', listings.value)

}

const getUrl = (_listing) => {
    if (_listing.slug) {
        return _listing.category + '/' + _listing.slug
    } else {
        return _listing.url
    }
}

const getTarget = (_listing) => {
    if (_listing.slug) {
        return ''
    }

    return '_blank'
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
    <ul class="px-3 max-w-7xl mx-auto mt-10 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <NuxtLink :to="getUrl(listing)" :target="getTarget(listing)" v-for="listing of featuredListings" :key="listing.id" class="py-5 w-full flex gap-4">
            <img
                :src="listing.imgUrl"
                class="w-24 h-24 aspect-square p-1 bg-gradient-to-r from-gray-50 to-gray-100 border border-sky-200 rounded-xl overlay-hidden shadow"
            />

            <div class="">
                <h3 class="text-lg font-medium limit-1-line">
                    {{listing.title}}
                </h3>

                <p class="text-sm limit-3-lines">
                    {{listing.summary}}
                </p>
            </div>
        </NuxtLink>
    </ul>
</template>

<style scoped>
.limit-1-line {
    --lh: 1.4rem;
    line-height: var(--lh);

    --max-lines: 1;
    max-height: calc(var(--lh) * var(--max-lines));
    overflow: hidden;
}
.limit-3-lines {
    --lh: 1.4rem;
    line-height: var(--lh);

    --max-lines: 3;
    max-height: calc(var(--lh) * var(--max-lines));
    overflow: hidden;
}

/*.limit-3-lines::before {
    content: "...";
    position: absolute;
    bottom: 0;
    right: 0;
}*/

/*.limit-3-lines::after {
    content: "";
    position: absolute;
    right: 0;
    width: 1rem;
    height: 1rem;
    background: white;
}*/
</style>
