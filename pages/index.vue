<template>
    <main>
        <Hero />

        <div class="px-3 lg:px-7 max-w-7xl mx-auto mt-10">
            <header class="flex justify-between items-end">
                <h2 class="text-3xl font-medium">
                    Apps
                </h2>

                <NuxtLink to="/apps" class="flex items-center gap-2 text-sky-500 text-lg font-medium hover:underline">
                    See all Apps

                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </NuxtLink>
            </header>
        </div>

        <Gallery cat="apps" class="px-3 lg:px-7" />

        <div class="px-3 lg:px-7 max-w-7xl mx-auto mt-10">
            <header class="flex justify-between items-end">
                <h2 class="text-3xl font-medium">
                    Merchants
                </h2>

                <NuxtLink to="/merchants" class="flex items-center gap-2 text-sky-500 text-lg font-medium hover:underline">
                    See all Merchants

                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </NuxtLink>
            </header>
        </div>

        <Gallery cat="merchants" class="px-3 lg:px-7" />

        <div class="px-3 lg:px-7 max-w-7xl mx-auto mt-10">
            <header class="flex justify-between items-end">
                <h2 class="text-3xl font-medium">
                    DeFi
                </h2>

                <NuxtLink to="/defi" class="flex items-center gap-2 text-sky-500 text-lg font-medium hover:underline">
                    See all DeFi

                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </NuxtLink>
            </header>
        </div>

        <Gallery cat="defi" class="px-3 lg:px-7" />

        <div class="px-3 lg:px-7 max-w-7xl mx-auto mt-10">
            <header class="flex justify-between items-end">
                <h2 class="text-3xl font-medium">
                    Mining
                </h2>

                <NuxtLink to="/mining" class="flex items-center gap-2 text-sky-500 text-lg font-medium hover:underline">
                    See all Mining

                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </NuxtLink>
            </header>
        </div>

        <Gallery cat="mining" class="px-3 lg:px-7" />

        <div class="px-3 lg:px-7 max-w-7xl mx-auto mt-10">
            <header class="flex justify-between items-end">
                <h2 class="text-3xl font-medium">
                    Wallets
                </h2>

                <NuxtLink to="/wallets" class="flex items-center gap-2 text-sky-500 text-lg font-medium hover:underline">
                    See all Wallets

                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </NuxtLink>
            </header>
        </div>

        <Gallery cat="wallets" class="px-3 lg:px-7" />

        <div class="px-3 lg:px-7 max-w-7xl mx-auto mt-10">
            <header class="flex justify-between items-end">
                <h2 class="text-3xl font-medium">
                    Gaming
                </h2>

                <NuxtLink to="/gaming" class="flex items-center gap-2 text-sky-500 text-lg font-medium hover:underline">
                    See all Gaming

                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </NuxtLink>
            </header>
        </div>

        <Gallery cat="gaming" class="px-3 lg:px-7" />

        <div class="px-3 lg:px-7 max-w-7xl mx-auto mt-10">
            <header class="flex justify-between items-end">
                <h2 class="text-3xl font-medium">
                    NFT Collections
                </h2>

                <NuxtLink to="/nfts" class="flex items-center gap-2 text-sky-500 text-lg font-medium hover:underline">
                    See all NFT Collections

                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </NuxtLink>
            </header>
        </div>

        <Gallery cat="nfts" class="px-3 lg:px-7" />

        <div class="px-3 lg:px-7 max-w-7xl mx-auto mt-10">
            <header class="flex justify-between items-end">
                <h2 class="text-3xl font-medium">
                    Exchanges — Centralized
                </h2>

                <NuxtLink to="/cex" class="flex items-center gap-2 text-sky-500 text-lg font-medium hover:underline">
                    See all CEXs

                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </NuxtLink>
            </header>
        </div>

        <Gallery cat="cex" class="px-3 lg:px-7" />

        <div class="px-3 lg:px-7 max-w-7xl mx-auto mt-10">
            <header class="flex justify-between items-end">
                <h2 class="text-3xl font-medium">
                    Exchanges — Decentralized
                </h2>

                <NuxtLink to="/dex" class="flex items-center gap-2 text-sky-500 text-lg font-medium hover:underline">
                    See all DEXs

                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </NuxtLink>
            </header>
        </div>

        <Gallery cat="dex" class="px-3 lg:px-7" />

        <div class="px-3 lg:px-7 max-w-7xl mx-auto mt-10">
            <header class="flex justify-between items-end">
                <h2 class="text-3xl font-medium">
                    News &amp; Media
                </h2>

                <NuxtLink to="/media" class="flex items-center gap-2 text-sky-500 text-lg font-medium hover:underline">
                    See all News &amp; Media

                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </NuxtLink>
            </header>
        </div>

        <Gallery cat="media" class="px-3 lg:px-7" />

        <div class="px-3 lg:px-7 max-w-7xl mx-auto mt-10">
            <header class="flex justify-between items-end">
                <h2 class="text-3xl font-medium">
                    Builders
                </h2>

                <NuxtLink to="/builders" class="flex items-center gap-2 text-sky-500 text-lg font-medium hover:underline">
                    See all Builders

                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </NuxtLink>
            </header>
        </div>

        <Gallery cat="builders" class="px-3 lg:px-7" />

        <div class="px-3 lg:px-7 max-w-7xl mx-auto mt-10">
            <header class="flex justify-between items-end">
                <h2 class="text-3xl font-medium">
                    Tooling
                </h2>

                <NuxtLink to="/tooling" class="flex items-center gap-2 text-sky-500 text-lg font-medium hover:underline">
                    See all Tooling

                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </NuxtLink>
            </header>
        </div>

        <Gallery cat="tooling" class="px-3 lg:px-7" />

        <div class="px-3 lg:px-7 max-w-7xl mx-auto mt-10">
            <header class="flex justify-between items-end">
                <h2 class="text-3xl font-medium">
                    References
                </h2>

                <NuxtLink to="/references" class="flex items-center gap-2 text-sky-500 text-lg font-medium hover:underline">
                    See all References

                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </NuxtLink>
            </header>
        </div>

        <Gallery cat="references" class="px-3 lg:px-7" />

        <Team />

        <Blog />

        <Banner />
    </main>
</template>
