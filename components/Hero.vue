<!-- components/Hero.vue -->
<template>
    <main class="max-w-7xl px-0 lg:px-5 py-5 mx-auto flex flex-col lg:flex-row gap-4">
        <section class="w-full lg:w-2/3 h-[300px] lg:h-[400px]">
            <div @click="launchBanner" class="h-full mx-3 my-2 rounded-3xl overflow-hidden bg-gray-900 border-4 border-yellow-500 shadow-md cursor-pointer">

                <!-- <h2 class="ml-3 mt-2 sm:ml-5 sm:mt-5 relative text-gray-100 opacity-10 text-lg sm:text-2xl font-medium z-10">
                    Featured Spotlight
                </h2> -->

                <!-- <img
                    src="~/assets/banners/01-wally-wallet.jpg"
                    class="h-full object-cover relative inset-0"
                /> -->
                <img
                    :src="bannerUrl"
                    class="h-full object-cover relative inset-0"
                />

                <div class="relative -mt-5 sm:-mt-10 flex gap-6 justify-center">
                    <button @click.stop="loadBanner(0)" class="block w-4 h-4 bg-gray-200 rounded-full hover:bg-yellow-400" />

                    <button @click.stop="loadBanner(1)" class="block w-4 h-4 bg-gray-200 rounded-full hover:bg-yellow-400" />

                    <button @click.stop="loadBanner(2)" class="block w-4 h-4 bg-gray-200 rounded-full hover:bg-yellow-400" />

                    <button @click.stop="loadBanner(3)" class="block w-4 h-4 bg-gray-200 rounded-full hover:bg-yellow-400" />

                    <button @click.stop="loadBanner(4)" class="block w-4 h-4 bg-gray-200 rounded-full hover:bg-yellow-400" />
                </div>
            </div>
        </section>

        <section class="w-full lg:w-1/3 h-[400px] px-3 py-2">
            <div class="h-full px-3 py-5 flex flex-col justify-around gap-4 bg-purple-900 border-4 border-purple-400 rounded-2xl shadow-md">

                <NuxtLink to="https://www.youtube.com/live/5JExkeDGyXk?t=50" target="_blank" class="w-full h-24 pl-2 pr-1 py-1 flex justify-between bg-purple-700 border border-purple-400 rounded-lg shadow-md">
                    <div class="flex flex-col gap-1">
                        <h3 class="text-purple-300 text-xs font-medium uppercase">
                            Featured Videos
                        </h3>

                        <h2 class="text-purple-100 text-base font-bold truncate overflow-hidden">
                            BCH Bliss 2025
                        </h2>

                        <h3 class="text-purple-100 text-xs font-medium italic truncate overflow-hidden">
                            Peter Rizun
                        </h3>

                        <h3 class="text-purple-100 text-xs font-bold truncate overflow-hidden">
                            Intro to Hardware Acceleration
                        </h3>
                    </div>

                    <img
                        src="https://assets.awesomenexa.org/banner/bch-bliss-peter-rizum.webp"
                        class="h-full border border-purple-400 rounded-lg shadow"
                    />
                </NuxtLink>

                <NuxtLink to="https://www.futuristconference.com/" target="_blank" class="w-full h-24 pl-2 pr-1 py-1 flex justify-between bg-purple-700 border border-purple-400 rounded-lg shadow-md">
                    <div class="flex flex-col gap-1 w-[240px]">
                        <h3 class="text-purple-300 text-xs font-medium uppercase">
                            Featured Event
                        </h3>

                        <h2 class="text-purple-100 text-base font-bold truncate overflow-hidden">
                            Blockchain Futurist Conference
                        </h2>

                        <h3 class="text-purple-100 text-xs font-medium italic truncate overflow-hidden">
                            Tuesday, May 13th
                        </h3>

                        <h3 class="text-purple-100 text-xs font-bold truncate overflow-hidden">
                            Leading w/ Code: Developers Building the Web3 Future
                        </h3>
                    </div>

                    <img
                        src="https://assets.awesomenexa.org/icon/blockchain-futurist.webp"
                        class="h-full border border-purple-400 rounded-lg shadow"
                    />
                </NuxtLink>

                <NuxtLink to="https://forum.nexa.org/t/nexa-community-event-create-a-niftyart-nft-collection" target="_blank" class="w-full h-24 pl-2 pr-1 py-1 flex justify-between bg-purple-700 border border-purple-400 rounded-lg shadow-md">
                    <div class="w-[180px] flex flex-col gap-1">
                        <h3 class="text-purple-300 text-xs font-medium uppercase">
                            Featured Socials
                        </h3>

                        <h2 class="text-purple-100 text-base font-bold truncate text-ellipsis">
                            NFT Art Competition
                        </h2>

                        <h3 class="text-purple-100 text-xs font-medium italic truncate overflow-hidden">
                            May 16th thru May 23rd
                        </h3>

                        <h3 class="text-purple-100 text-xs font-bold truncate overflow-hidden">
                            NiftyArt 2.0 Mini-Collection
                        </h3>
                    </div>

                    <img
                        src="https://assets.awesomenexa.org/banner/create-nifty-art-nft-collection.webp"
                        class="h-full border border-purple-400 rounded-lg shadow"
                    />
                </NuxtLink>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

const MAX_SHOWCASE_BANNERS = 5
const SLIDESHOW_INTERVAL = 7000

const bannerid = ref(null)
const bannerUrl = ref(null)

/* Initialize banner interval. */
let bannerInterval

const launchBanner = async () => {
// console.log('launching banner...')

    switch(bannerid.value) {
    case 0:
        window.open('https://niftyart.cash/')
        break
    case 1:
        window.open('https://www.nverse.space/pixelwar')
        break
    case 2:
        window.open('https://nebula.markets/')
        break
    case 3:
        window.open('http://www.wallywallet.org/')
        break
    case 4:
        window.open('https://agnar.pages.dev/')
        break
    default:
        window.open('http://www.wallywallet.org/')
        break
    }
}

const BANNERS = [
    'https://assets.awesomenexa.org/banner/nifty-art-v2.webp',
    'https://assets.awesomenexa.org/banner/pixel-war.webp',
    'https://assets.awesomenexa.org/banner/nebula-markets.webp',
    'https://i.ibb.co/BtD2RGR/01-wally-wallet.jpg',
    'https://i.ibb.co/CmgK4Sj/02-nexa-runes.jpg',
]

/**
 * Load Banner
 *
 * NOTE: Banner sizes are (FB) standard 640 x 281.
 * NOTE: ALT banner size is 1024 x 480.
 */
const loadBanner = async (_bannerid) => {
// console.log('loading banner...', _bannerid)

    bannerid.value = _bannerid

    switch(_bannerid) {
    case 0:
        bannerUrl.value = BANNERS[0]
        break
    case 1:
        bannerUrl.value = BANNERS[1]
        break
    case 2:
        bannerUrl.value = BANNERS[2]
        break
    case 3:
        bannerUrl.value = BANNERS[3]
        break
    case 4:
        bannerUrl.value = BANNERS[4]
        break
    default:
        bannerUrl.value = BANNERS[0]
        break
    }
}

const init = async () => {
    /* Set banner id. */
    bannerid.value = 0

    /* Set banner url. */
    bannerUrl.value = BANNERS[0]

    /* Begin slideshow. */
    bannerInterval = setInterval(() => {
        if (bannerid.value >= MAX_SHOWCASE_BANNERS - 1) {
            loadBanner(0)
        } else {
            loadBanner(bannerid.value + 1)
        }
    }, SLIDESHOW_INTERVAL)
}

onMounted(() => {
    init()
})

onBeforeUnmount(() => {
    console.log('Cleaning up Hero...')

    clearInterval(bannerInterval)
})
</script>
