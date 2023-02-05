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

        <section class="py-2 flex flex-col items-center">
            <slot name="url">
                https://site-url.com/
            </slot>
        </section>

        <section class="py-1 flex flex-col items-center">
            <h3 class="text-2xl font-medium text-gray-500 italic">
                <slot name="tagline">
                    Enter a short tagline here
                </slot>
            </h3>
        </section>

        <section>
            <slot name="slideshow">
                <img
                    src="~/assets/ani-banner.gif"
                    class="my-10 w-7/12 h-96 border-4 border-indigo-500 rounded-xl shadow object-cover"
                />
            </slot>
        </section>

        <section class="my-5 px-10 flex flex-col items-center">
            <p class="text-lg text-gray-500">
                <slot name="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum quod laudantium praesentium doloribus error qui natus neque, voluptates expedita deleniti modi ducimus sequi quaerat ipsa fugit. Fugit, corrupti ad.
                </slot>
            </p>
        </section>

        <section>
            <p class="w-1/2 my-5 px-7 py-5 text-sm bg-gradient-to-r from-rose-100 to-rose-200 border-2 border-rose-300 rounded-xl shadow">
                Awesome Nexa is NOT responsible for ANY of the resources listed in this catalog.
                Using this site, you take your own risks.

                <span class="my-2 block text-base text-rose-700 text-center font-bold">DO YOUR OWN RESEARCH (DYOR)</span>

                <span class="block">
                    Read our <NuxtLink to="/disclaimer" class="text-rose-700 font-medium hover:underline">Disclaimer Terms</NuxtLink> and <NuxtLink to="/privacy" class="text-rose-700 font-medium hover:underline">Privacy Policy</NuxtLink>
                </span>
            </p>
        </section>
    </main>
</template>
