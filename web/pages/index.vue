<template>
    <main>
        <Hero />

        <div class="px-3 max-w-7xl mx-auto mt-10">
            <header class="flex justify-between items-end">
                <h2 class="text-3xl font-medium">
                    Apps
                </h2>

                <NuxtLink to="/apps" class="flex items-center gap-2 text-blue-500 text-lg font-medium hover:underline">
                    See all Apps

                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </NuxtLink>
            </header>
        </div>

        <Gallery cat="apps" />

        <div class="px-3 max-w-7xl mx-auto mt-10">
            <header class="flex justify-between items-end">
                <h2 class="text-3xl font-medium">
                    Mining
                </h2>

                <NuxtLink to="/mining" class="flex items-center gap-2 text-blue-500 text-lg font-medium hover:underline">
                    See all Mining

                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </NuxtLink>
            </header>
        </div>

        <Gallery cat="mining" />

        <div class="px-3 max-w-7xl mx-auto mt-10">
            <header class="flex justify-between items-end">
                <h2 class="text-3xl font-medium">
                    Exchanges
                </h2>

                <NuxtLink to="/exchanges" class="flex items-center gap-2 text-blue-500 text-lg font-medium hover:underline">
                    See all Exchanges

                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </NuxtLink>
            </header>
        </div>

        <Gallery cat="exchanges" />

        <div class="px-3 max-w-7xl mx-auto mt-10">
            <header class="flex justify-between items-end">
                <h2 class="text-3xl font-medium">
                    Wallets
                </h2>

                <NuxtLink to="/wallets" class="flex items-center gap-2 text-blue-500 text-lg font-medium hover:underline">
                    See all Wallets

                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </NuxtLink>
            </header>
        </div>

        <Gallery cat="wallets" />

        <div class="px-3 max-w-7xl mx-auto mt-10">
            <header class="flex justify-between items-end">
                <h2 class="text-3xl font-medium">
                    Tokens
                </h2>

                <NuxtLink to="/tokens" class="flex items-center gap-2 text-blue-500 text-lg font-medium hover:underline">
                    See all Tokens

                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </NuxtLink>
            </header>
        </div>

        <Gallery cat="tokens" />

        <div class="px-3 max-w-7xl mx-auto mt-10">
            <header class="flex justify-between items-end">
                <h2 class="text-3xl font-medium">
                    NFT Collections
                </h2>

                <NuxtLink to="/nfts" class="flex items-center gap-2 text-blue-500 text-lg font-medium hover:underline">
                    See all NFT Collections

                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </NuxtLink>
            </header>
        </div>

        <Gallery cat="nfts" />

        <div class="px-3 max-w-7xl mx-auto mt-10">
            <header class="flex justify-between items-end">
                <h2 class="text-3xl font-medium">
                    Tooling
                </h2>

                <NuxtLink to="/tooling" class="flex items-center gap-2 text-blue-500 text-lg font-medium hover:underline">
                    See all Tooling

                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </NuxtLink>
            </header>
        </div>

        <Gallery cat="tooling" />

        <div class="px-3 max-w-7xl mx-auto mt-10">
            <header class="flex justify-between items-end">
                <h2 class="text-3xl font-medium">
                    Builders
                </h2>

                <NuxtLink to="/builders" class="flex items-center gap-2 text-blue-500 text-lg font-medium hover:underline">
                    See all Builders

                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </NuxtLink>
            </header>
        </div>

        <Gallery cat="builders" />

        <Team />

        <Blog />

        <Banner />
    </main>
</template>
