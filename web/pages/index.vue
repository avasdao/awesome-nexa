<template>
    <main>
        <Hero />

        <div class="px-3 max-w-7xl mx-auto my-10">
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

        <Gallery />

        <Team />

        <Blog />

        <Banner />
    </main>
</template>
