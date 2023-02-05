<script setup>
/* Import modules. */
import { ref } from 'vue'

//
</script>

<template>
    <main class="max-w-5xl mx-auto">

        <header class="pt-10 flex justify-center">
            <h1 class="text-5xl font-bold tracking-widest">
                <slot name="title">
                    Application or Service Title
                </slot>
            </h1>
        </header>

        <section class="mt-5 mb-10 flex flex-col items-center">
            <slot name="url">
                https://site-url.com/
            </slot>
        </section>

        <section class="flex">
            <slot name="slideshow">
                <img
                    src="~/assets/ani-banner.gif"
                    class="my-0 w-7/12 h-96 border-4 border-indigo-500 rounded-xl shadow object-cover"
                />
            </slot>

            <div class="w-full px-5 pt-7">
                <p class="text-2xl font-medium text-gray-500">
                    <span class="inline-block relative -mr-2 text-7xl text-yellow-500">&ldquo;</span>
                    <slot name="summary">
                        Enter a short summary here
                    </slot>
                    <span class="inline-block relative -mt-10 text-7xl text-yellow-500">&bdquo;</span>
                </p>
            </div>
        </section>

        <section class="my-10 px-10 flex flex-col items-center">
            <div class="flex flex-col gap-6 text-lg text-gray-500">
                <slot name="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum quod laudantium praesentium doloribus error qui natus neque, voluptates expedita deleniti modi ducimus sequi quaerat ipsa fugit. Fugit, corrupti ad.
                </slot>
            </div>
        </section>

        <hr />

        <section class="mt-5">
            <h2 class="text-3xl font-light">
                Rating and Reviews
            </h2>

            <div class="w-96 flex flex-row justify-between items-end">
                <span><span class="text-5xl font-medium">5.0</span> out of 5</span>
                <span><span class="text-2xl font-bold">2</span> Ratings</span>
            </div>

            <div class="my-5 flex flex-row gap-8">
                <div class="w-1/3 flex flex-col p-5 bg-gray-300 border-2 border-gray-500 rounded-lg">
                    <header class="flex justify-between">
                        <h3>@Shomari</h3>

                        <span class="text-sm">8 days ago</span>
                    </header>

                    <p class="mt-3 text-sm">
                        A wonderful pool, it is convenient to use immediately in the wallet and receive NEXA for mining.
                    </p>
                </div>

                <div class="w-1/3 flex flex-col p-5 bg-gray-300 border-2 border-gray-500 rounded-lg">
                    <header class="flex justify-between">
                        <h3>@Satoshi</h3>

                        <span class="text-sm">2 weeks ago</span>
                    </header>

                    <p class="mt-3 text-sm">
                        Finally, a pool where I can show off my incredible hash power!
                    </p>
                </div>
            </div>

            <div class="my-10 flex flex-row items-center gap-4">
                <button class="px-3 py-2 bg-yellow-500 border-2 border-yellow-700 rounded-lg">
                    <span class="text-2xl text-gray-900 font-medium">
                        Write a Review
                    </span>
                </button>

                <p class="w-96 text-sm">
                    You must first <span class="px-2 py-1 bg-blue-500 text-white font-medium rounded">Get Connected</span> with a Nexa ID-compatible wallet to write a review.
                </p>
            </div>
        </section>

        <hr />

        <section class="my-10">
            <p class="w-1/2 my-5 px-7 py-5 text-sm bg-gradient-to-r from-rose-100 to-rose-200 border-2 border-rose-300 rounded-xl shadow">
                Awesome Nexa is NOT responsible for ANY of the resources listed in this catalog.
                Using this site, you take your own risks.

                <span class="my-2 block text-base text-rose-700 text-center font-bold">DO YOUR OWN RESEARCH (DYOR)</span>

                <span class="block">
                    Read our <NuxtLink to="/terms" class="text-rose-700 font-medium hover:underline">Terms of Use</NuxtLink> and <NuxtLink to="/privacy" class="text-rose-700 font-medium hover:underline">Privacy Policy</NuxtLink>
                </span>
            </p>
        </section>
    </main>
</template>
