<script setup>
/* Import modules. */

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    cat: String,
})

const listings = ref()

const featuredListings = computed(() => {
    // console.log('LISTINGS', listings)
    if (listings?.value) {
        return listings.value.slice(0, 3)
    }

    return []
})

const init = async () => {
    // console.log('INIT CATEGORY', props.cat)

    switch(props.cat) {
    case 'apps':
        listings.value = await $fetch('/_apps')
        break
    case 'builders':
        listings.value = await $fetch('/_builders')
        break
    case 'daos':
        listings.value = await $fetch('/_daos')
        break
    case 'exchanges':
        listings.value = await $fetch('/_exchanges')
        break
    case 'mining':
        listings.value = await $fetch('/_mining')
        break
    case 'nfts':
        listings.value = await $fetch('/_nfts')
        break
    case 'tokens':
        listings.value = await $fetch('/_tokens')
        break
    case 'tooling':
        listings.value = await $fetch('/_tooling')
        break
    case 'wallets':
        listings.value = await $fetch('/_wallets')
        break
    }
    // console.log('LISTINGS', listings)

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
        <NuxtLink :to="listing.url" target="_blank" v-for="listing of featuredListings" :key="listing.id" class="py-5 w-full flex gap-4">
            <img
                :src="listing.imgUrl"
                class="w-24 h-24 p-1 bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-yellow-500 rounded-lg overlay-hidden shadow-md"
            />

            <div class="">
                <h3 class="text-lg font-medium">
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
.limit-3-lines {
    --lh: 1.4rem;
    line-height: var(--lh);

    --max-lines: 3;
    max-height: calc(var(--lh) * var(--max-lines));
    overflow: hidden;
}

.limit-3-lines::before {
    content: "...";
    position: absolute;
    bottom: 0;
    right: 0;
}

.limit-3-lines::after {
    content: "";
    position: absolute;
    right: 0; /* note: not using bottom */
    width: 1rem;
    height: 1rem;
    background: white;
}
</style>
