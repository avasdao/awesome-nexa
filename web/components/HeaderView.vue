<script setup>
/* Import modules. */
import numeral from 'numeral'
import { ref } from 'vue'

/* Initialize constants. */
const TICKER_UPDATE_INTERVAL = 60000 // 60 seconds

/* Initialize flags. */
// const isShowingDownlaodsMenu = ref(false)
const isShowingExtrasMenu = ref(false)
const isShowingMobileMenu = ref(false)

/* Initialize holders. */
const nexUsd = ref(null)


/**
 * Update Ticker
 */
const updateTicker = async () => {
    const price = await $fetch('/price')
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


/**
 * Connect
 */
const connect = () => {
    console.log('GET CONNECTED!')
}

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
                        <NuxtLink to="https://github.com/avasdao/awesome-nexa#readme" target="_blank" class="text-base font-bold text-rose-500 hover:text-rose-700">
                            <div class="flex">
                                <img src="https://i.ibb.co/kq9gdS8/image.png" class="w-10" />
                                Awesome List
                            </div>
                        </NuxtLink>

                        <div>
                            <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
                            <button
                                @click="isShowingExtrasMenu = !isShowingExtrasMenu"
                                type="button"
                                class="px-2 py-1 text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                aria-expanded="false"
                            >
                                <span>🔥 Trending Now</span>
                                <!--
                    Heroicon name: mini/chevron-down

                    Item active: "text-gray-600", Item inactive: "text-gray-400"
                -->
                                <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </button>

                            <!--
                'More' flyout menu, show/hide based on flyout menu state.

                Entering: "transition ease-out duration-200"
                    From: "opacity-0 -translate-y-1"
                    To: "opacity-100 translate-y-0"
                Leaving: "transition ease-in duration-150"
                    From: "opacity-100 translate-y-0"
                    To: "opacity-0 -translate-y-1"
                -->
                            <div v-if="isShowingExtrasMenu" class="absolute inset-x-0 top-full z-10 hidden transform shadow-lg md:block">
                                <div class="absolute inset-0 flex">
                                    <div class="w-1/2 bg-white"></div>
                                    <div class="w-1/2 bg-gray-50"></div>
                                </div>

                                <div class="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                                    <nav class="grid gap-y-10 bg-white px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                                        <div>
                                            <h3 class="text-base font-medium text-gray-500">
                                                Most Popular Places
                                            </h3>

                                            <ul role="list" class="mt-5 space-y-6">
                                                <li class="flow-root">
                                                    <a href="javascript://" class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                                                        <!-- Heroicon name: outline/information-circle -->
                                                        <svg class="h-6 w-6 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                                            />
                                                        </svg>
                                                        <span class="ml-4">About</span>
                                                    </a>
                                                </li>

                                                <li class="flow-root">
                                                    <a href="javascript://" class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                                                        <!-- Heroicon name: outline/building-office -->
                                                        <svg class="h-6 w-6 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                                                            />
                                                        </svg>
                                                        <span class="ml-4">Customers</span>
                                                    </a>
                                                </li>

                                                <li class="flow-root">
                                                    <a href="javascript://" class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                                                        <!-- Heroicon name: outline/newspaper -->
                                                        <svg class="h-6 w-6 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                                                            />
                                                        </svg>
                                                        <span class="ml-4">Press</span>
                                                    </a>
                                                </li>

                                                <li class="flow-root">
                                                    <a href="javascript://" class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                                                        <!-- Heroicon name: outline/briefcase -->
                                                        <svg class="h-6 w-6 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                                                            />
                                                        </svg>
                                                        <span class="ml-4">Careers</span>
                                                    </a>
                                                </li>

                                                <li class="flow-root">
                                                    <a href="javascript://" class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                                                        <!-- Heroicon name: outline/shield-check -->
                                                        <svg class="h-6 w-6 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                                            />
                                                        </svg>
                                                        <span class="ml-4">Privacy</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 class="text-base font-medium text-gray-500">
                                                New &amp; Noteworthy
                                            </h3>

                                            <ul role="list" class="mt-5 space-y-6">
                                                <li class="flow-root">
                                                    <a href="javascript://" class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                                                        <!-- Heroicon name: outline/user-group -->
                                                        <svg class="h-6 w-6 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                                                            />
                                                        </svg>
                                                        <span class="ml-4">Community</span>
                                                    </a>
                                                </li>

                                                <li class="flow-root">
                                                    <a href="javascript://" class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                                                        <!-- Heroicon name: outline/globe-alt -->
                                                        <svg class="h-6 w-6 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                                                            />
                                                        </svg>
                                                        <span class="ml-4">Partners</span>
                                                    </a>
                                                </li>

                                                <li class="flow-root">
                                                    <a href="javascript://" class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                                                        <!-- Heroicon name: outline/bookmark-square -->
                                                        <svg class="h-6 w-6 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
                                                            />
                                                        </svg>
                                                        <span class="ml-4">Guides</span>
                                                    </a>
                                                </li>

                                                <li class="flow-root">
                                                    <a href="javascript://" class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                                                        <!-- Heroicon name: outline/computer-desktop -->
                                                        <svg class="h-6 w-6 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                                                            />
                                                        </svg>
                                                        <span class="ml-4">Webinars</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>

                                    <div class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                                        <div>
                                            <h3 class="text-base font-medium text-gray-500">
                                                From the Team Blog
                                            </h3>

                                            <ul role="list" class="mt-6 space-y-6">
                                                <li class="flow-root">
                                                    <a href="javascript://" class="-m-3 flex rounded-lg p-3 hover:bg-gray-100">
                                                        <div class="hidden flex-shrink-0 sm:block">
                                                            <img
                                                                class="h-20 w-32 rounded-md object-cover"
                                                                src="https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div class="w-0 flex-1 sm:ml-8">
                                                            <h4 class="truncate text-base font-medium text-gray-900">Boost your conversion rate</h4>
                                                            <p class="mt-1 text-sm text-gray-500">Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.</p>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li class="flow-root">
                                                    <a href="javascript://" class="-m-3 flex rounded-lg p-3 hover:bg-gray-100">
                                                        <div class="hidden flex-shrink-0 sm:block">
                                                            <img
                                                                class="h-20 w-32 rounded-md object-cover"
                                                                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div class="w-0 flex-1 sm:ml-8">
                                                            <h4 class="truncate text-base font-medium text-gray-900">How to use search engine optimization to drive traffic to your site</h4>
                                                            <p class="mt-1 text-sm text-gray-500">Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.</p>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="mt-6 text-sm font-medium">
                                            <a href="javascript://" class="text-indigo-600 hover:text-indigo-500">
                                                View all posts
                                                <span aria-hidden="true"> &rarr;</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <NuxtLink to="/help" class="text-base font-medium text-gray-500 hover:text-gray-900">
                            🙋 Need help?
                        </NuxtLink>
                    </nav>

                    <div class="flex items-center md:ml-12">
                        <NuxtLink to="/buy" class="text-lg font-medium text-gray-500 hover:text-gray-900">
                            1M NEX/USD <span class="text-2xl text-indigo-600 hover:text-indigo-500">{{nexUsd}}</span>
                        </NuxtLink>

                        <NuxtLink to="/auth" class="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-lg font-medium text-white shadow-sm hover:bg-indigo-700">
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

                <div class="py-6 px-5">
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
                        <Button @click="connect(); isShowingMobileMenu = false" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-xl font-medium text-white shadow-sm hover:bg-indigo-700">
                            Get Connected
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
