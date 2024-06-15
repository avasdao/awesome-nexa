<script setup lang="ts">
/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

const launchBanner = async () => {
    console.log('launching banner...')

    window.open('http://www.wallywallet.org')
}

const loadBanner = async (_bannerid) => {
    console.log('loading banner...', _bannerid)
}

// onMounted(() => {
//     console.log('Mounted!')
//     // Now it's safe to perform setup operations.
// })

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>

<template>
    <main class="max-w-7xl px-0 lg:px-5 py-5 mx-auto flex flex-col lg:flex-row gap-4">
        <section class="w-full lg:w-2/3 h-[400px]">
            <div @click="launchBanner" class="h-64 sm:h-96 mx-3 my-2 rounded-3xl overflow-hidden bg-gray-900 border-4 border-yellow-500 shadow-md cursor-pointer">

                <!-- <h2 class="ml-3 mt-2 sm:ml-5 sm:mt-5 relative text-gray-100 opacity-10 text-lg sm:text-2xl font-medium z-10">
                    Featured Spotlight
                </h2> -->

                <img
                    src="~/assets/banners/01-wally-wallet.jpg"
                    class="h-full object-cover relative inset-0"
                />

                <div class="relative -mt-5 sm:-mt-10 flex gap-6 justify-center">
                    <button @click.stop="loadBanner(0)" class="block w-4 h-4 bg-gray-200 rounded-full hover:bg-yellow-400" />

                    <button @click.stop="loadBanner(1)" class="block w-4 h-4 bg-gray-200 rounded-full hover:bg-yellow-400" />

                    <button @click.stop="loadBanner(2)" class="block w-4 h-4 bg-gray-200 rounded-full hover:bg-yellow-400" />
                </div>
            </div>
        </section>

        <section class="w-full lg:w-1/3 h-[400px] px-3 py-2">
            <div class="h-full px-3 py-5 flex flex-col justify-around gap-4 bg-purple-900 border-4 border-purple-400 rounded-2xl shadow-md">

                <NuxtLink to="https://www.youtube.com/watch?v=Oi48tcshfuU" target="_blank" class="w-full h-24 pl-2 pr-1 py-1 flex justify-between bg-purple-700 border border-purple-400 rounded-lg shadow-md">
                    <div class="flex flex-col gap-1">
                        <h3 class="text-purple-300 text-xs font-medium uppercase">
                            Featured Social
                        </h3>

                        <h2 class="text-purple-100 text-base font-bold">
                            Team AMA
                        </h2>

                        <h3 class="text-purple-100 text-xs font-medium italic">
                            Wed, May 29 @ 8am UTC
                        </h3>

                        <h3 class="text-purple-100 text-xs font-bold">
                            Project + Marketing Updates
                        </h3>
                    </div>
                    <img src="https://pbs.twimg.com/media/GOQI9N5aUAEA7uj?format=jpg&name=900x900" class="h-full border border-purple-400 rounded-lg shadow" />
                </NuxtLink>

                <NuxtLink to="https://auscryptocon.com/" target="_blank" class="w-full h-24 pl-2 pr-1 py-1 flex justify-between bg-purple-700 border border-purple-400 rounded-lg shadow-md">
                    <div class="flex flex-col gap-1">
                        <h3 class="text-purple-300 text-xs font-medium uppercase">
                            Featured Event
                        </h3>

                        <h2 class="text-purple-100 text-base font-bold">
                            AU Crypto Convention
                        </h2>

                        <h3 class="text-purple-100 text-xs font-medium italic">
                            Sat, Nov 23 thru 24
                        </h3>

                        <h3 class="text-purple-100 text-xs font-bold">
                            FPGA Hardware Demo
                        </h3>
                    </div>
                    <img src="https://i.ibb.co/qmX4HHm/Australian-Crypto-Convention-2022.png" class="h-full border border-purple-400 rounded-lg shadow" />
                </NuxtLink>

                <NuxtLink to="https://www.youtube.com/watch?v=7pmoT3M262A" target="_blank" class="w-full h-24 pl-2 pr-1 py-1 flex justify-between bg-purple-700 border border-purple-400 rounded-lg shadow-md">
                    <div class="flex flex-col gap-1">
                        <h3 class="text-purple-300 text-xs font-medium uppercase">
                            Featured Video
                        </h3>

                        <h2 class="text-purple-100 text-base font-bold">
                            The Nexa Drop
                        </h2>

                        <h3 class="text-purple-100 text-xs font-medium italic">
                            Andrew Stone & Paul Church
                        </h3>

                        <h3 class="text-purple-100 text-xs font-bold">
                            The Power of Tokens on Nexa
                        </h3>
                    </div>

                    <img src="~/assets/thumbnails/the-power-of-tokens-on-nexa.jpg" class="h-full border border-purple-400 rounded-lg shadow" />
                </NuxtLink>
            </div>
        </section>
    </main>
</template>
