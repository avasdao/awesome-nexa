<script setup>
/* Import modules. */
import numeral from 'numeral'


/* Initialize constants. */
const TICKER_UPDATE_INTERVAL = 60000 // 60 seconds

/* Initialize flags. */
// const isShowingDownlaodsMenu = ref(false)
// const isShowingExtrasMenu = ref(false)
const isShowingMobileMenu = ref(false)

/* Initialize holders. */
const nexUsd = ref(null)


/**
 * Update Ticker
 */
const updateTicker = async () => {
    const price = await $fetch('https://nexa.exchange/price')
        .catch(err => console.error)
    // console.log('PRICE', price)

    /* Convert to MEX. */
    const MEX = price * 1000000.0

    /* Format and set to display. */
    nexUsd.value = numeral(MEX).format('$0,0.00[00]')
    // console.log('NEX/USD', nexUsd)
}

/* Update ticker details. */
updateTicker()

/* Set interval for auto-update. */
setInterval(updateTicker, TICKER_UPDATE_INTERVAL)

</script>

<template>
    <!-- <div class="relative bg-white"> -->
    <div class="sticky top-0 z-50 bg-white opacity-[.99]">
        <div class="pointer-events-none absolute inset-0 z-30 shadow" aria-hidden="true"></div>

        <div class="relative z-20">
            <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8">

                <div class="flex items-center gap-4">
                    <NuxtLink to="/" class="flex">
                        <span class="sr-only">Awesome Nexa Logo</span>
                        <img class="h-14 w-auto sm:h-12" src="~/assets/logo.png" alt="Awesome Nexa Logo" />
                    </NuxtLink>

                    <NuxtLink to="/buy" class="lg:hidden flex flex-col justify-center items-center">
                        <span class="text-4xl text-indigo-600 font-medium">
                            {{nexUsd}}
                        </span>

                        <span class="text-sm text-gray-500 font-light">
                            1M NEX/USD
                        </span>
                    </NuxtLink>
                </div>

                <div class="-my-2 -mr-2 md:hidden">
                    <button
                        @click="isShowingMobileMenu = true"
                        type="button"
                        class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Open menu</span>
                        <!-- Heroicon name: outline/bars-3 -->
                        <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>

                <div class="hidden md:flex md:flex-1 md:items-center md:justify-between">
                    <nav class="flex space-x-10 items-center">
                        <NuxtLink to="https://github.com/avasdao/awesome-nexa#readme" target="_blank" class="text-lg font-bold text-rose-500 hover:text-rose-700">
                            <div class="flex">
                                <img src="https://i.ibb.co/kq9gdS8/image.png" class="w-10" />
                                Awesome List
                            </div>
                        </NuxtLink>

                        <NuxtLink to="/help" class="text-lg font-medium text-gray-500 hover:text-gray-900">
                            🙋 Need help?
                        </NuxtLink>
                    </nav>

                    <div class="flex items-center md:ml-12">
                        <NuxtLink to="/buy" class="flex flex-col justify-center items-center">
                            <span class="text-4xl text-indigo-600 font-medium">
                                {{nexUsd}}
                            </span>

                            <span class="text-sm text-gray-500 font-light">
                                1M NEX/USD
                            </span>
                        </NuxtLink>

                        <NuxtLink to="/profile" class="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-lg font-medium text-white shadow-sm hover:bg-indigo-700">
                            Get Connected
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>

        <!--
        Mobile menu, show/hide based on mobile menu state.

        Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
        <div v-if="isShowingMobileMenu" class="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden">
            <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div class="px-5 pt-5 pb-6 sm:pb-8">
                    <div class="flex items-center justify-between">
                        <div>
                            <img class="h-14 w-auto" src="~/assets/logo.png" alt="Awesome Nexa Logo" />
                        </div>

                        <div class="-mr-2">
                            <button
                                @click="isShowingMobileMenu = false"
                                type="button"
                                class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            >
                                <span class="sr-only">Close menu</span>
                                <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="mt-6 sm:mt-8">
                        <nav>
                            <div class="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">

                                <NuxtLink to="https://nexa.org" target="_blank" class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
                                    <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                                            />
                                        </svg>
                                    </div>

                                    <div class="ml-4 text-base font-medium text-gray-900">
                                        Nexa Homepage
                                    </div>
                                </NuxtLink>

                                <NuxtLink to="/spotlight" @click="isShowingMobileMenu = false" class="-m-3 group flex items-center rounded-lg p-3 hover:bg-yellow-400">
                                    <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-yellow-400 text-white sm:h-12 sm:w-12 group-hover:bg-yellow-900">
                                        <svg class="w-8 h-8 text-yellow-900 group-hover:text-yellow-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"></path>
                                        </svg>
                                    </div>

                                    <div class="ml-4 text-xl font-medium text-gray-900">
                                        What's HOT!
                                    </div>
                                </NuxtLink>

                                <NuxtLink to="https://github.com/avasdao/awesome-nexa#readme" target="_blank" class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
                                    <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                            />
                                        </svg>
                                    </div>

                                    <div class="ml-4 text-base font-medium text-gray-900">
                                        Awesome List
                                    </div>
                                </NuxtLink>

                                <NuxtLink to="https://nexa.org/roadmap" target="_blank" class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
                                    <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                        <!-- Heroicon name: outline/squares-2x2 -->
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                                            />
                                        </svg>
                                    </div>

                                    <div class="ml-4 text-base font-medium text-gray-900">
                                        Nexa Roadmap
                                    </div>
                                </NuxtLink>
                            </div>

                            <div class="mt-8 text-base">
                                <NuxtLink to="/spotlight" @click="isShowingMobileMenu = false" class="font-medium text-indigo-600 hover:text-indigo-500">
                                    View more Nexa products &amp; services
                                    <span aria-hidden="true"> &rarr;</span>
                                </NuxtLink>
                            </div>
                        </nav>
                    </div>
                </div>

                <div class="hidden py-6 px-5">
                    <div class="grid grid-cols-2 gap-4">
                        <NuxtLink to="https://discord.gg/2yQNsZV6EJ" target="_blank" class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                            Join the Discord
                        </NuxtLink>

                        <NuxtLink to="https://spec.nexa.org" target="_blank" class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                            Technical Specifications
                        </NuxtLink>

                        <NuxtLink to="https://www.bitcoinunlimited.info/" target="_blank" class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                            Bitcoin Unlimited
                        </NuxtLink>

                        <a href="javascript://" class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                            Community
                        </a>

                        <a href="javascript://" class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                            Blog
                        </a>

                        <NuxtLink to="/help" @click="isShowingMobileMenu = false" class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                            Do you need help?
                        </NuxtLink>
                    </div>

                    <div class="mt-6">
                        <NuxtLink to="/profile" @click="isShowingMobileMenu = false" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-xl font-medium text-white shadow-sm hover:bg-indigo-700">
                            Get Connected
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
