<!-- components/Gallery.vue -->
<template>
    <ul class="px-3 max-w-7xl mx-auto mt-10 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <NuxtLink
            :to="getUrl(listing)"
            :target="getTarget(listing)"
            v-for="listing of featuredListings"
            :key="listing.listingid"
            class="py-5 w-full flex gap-4"
        >
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

<script setup>
/* Import modules. */

/* Define properties. */
const props = defineProps({
    cat: String,
    showAll: Boolean,
})

const MAXIMUM_LISTINGS_PER_CATEGORY = 6
const API_ENDPOINT = 'https://awesomenexa.org/v1'

const listings = ref()

const featuredListings = computed(() => {
    // console.log('LISTINGS', listings)
    if (listings?.value) {
        if (typeof props.showAll !== 'undefined' && props.showAll === true) {
            return listings.value.data
        } else {
            return listings.value.data.slice(0, MAXIMUM_LISTINGS_PER_CATEGORY)
        }
    }

    return []
})

const init = async () => {
    /* Initialize locals. */
    let response

    switch(props.cat) {
    case 'apps':
        listings.value = await $fetch(`${API_ENDPOINT}/listing?category=apps`)
            .catch(err => console.error(err))
        break
    case 'builders':
        listings.value = await $fetch(`${API_ENDPOINT}/listing?category=builders`)
            .catch(err => console.error(err))
        break
    case 'cex':
        listings.value = await $fetch(`${API_ENDPOINT}/listing?category=cex`)
            .catch(err => console.error(err))
        break
    case 'daos':
        listings.value = await $fetch(`${API_ENDPOINT}/listing?category=daos`)
            .catch(err => console.error(err))
        break
    case 'defi':
        listings.value = await $fetch(`${API_ENDPOINT}/listing?category=defi`)
            .catch(err => console.error(err))
        break
    case 'dex':
        listings.value = await $fetch(`${API_ENDPOINT}/listing?category=dex`)
            .catch(err => console.error(err))
        break
    case 'gaming':
        listings.value = await $fetch(`${API_ENDPOINT}/listing?category=gaming`)
            .catch(err => console.error(err))
        break
    case 'media':
        listings.value = await $fetch(`${API_ENDPOINT}/listing?category=media`)
            .catch(err => console.error(err))
        break
    case 'merchants':
        listings.value = await $fetch(`${API_ENDPOINT}/listing?category=merchants`)
            .catch(err => console.error(err))
        break
    case 'mining':
        listings.value = await $fetch(`${API_ENDPOINT}/listing?category=mining`)
            .catch(err => console.error(err))
        break
    case 'nfts':
        listings.value = await $fetch(`${API_ENDPOINT}/listing?category=nfts`)
            .catch(err => console.error(err))
        break
    case 'references':
        listings.value = await $fetch(`${API_ENDPOINT}/listing?category=references`)
            .catch(err => console.error(err))
        break
    case 'tooling':
        listings.value = await $fetch(`${API_ENDPOINT}/listing?category=tooling`)
            .catch(err => console.error(err))
        break
    case 'wallets':
        listings.value = await $fetch(`${API_ENDPOINT}/listing?category=wallets`)
            .catch(err => console.error(err))
        break
    }
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
