<script setup>
/* Import modules. */
import { ref } from 'vue'

//
</script>

<template>
    <NuxtLayout name="listing">
        <template #title>
            Wooly Pooly
        </template>

        <template #url>
            <a
                href="https://woolypooly.com/en/coin/nexa"
                target="_blank"
                class="text-xl text-blue-500 font-medium hover:underline"
            >
                https://woolypooly.com/en/coin/nexa
            </a>
        </template>

        <template #tagline>
            An experienced mining pool
        </template>

        <template #slideshow>
            <img
                src="~/assets/screenshots/wooly-pooly_01.jpg"
                class="my-10 w-7/12 h-96 border-4 border-indigo-500 rounded-xl shadow object-cover"
            />
        </template>

        <template #description>
            WoolyPooly is one of the most profitable pools with our focus on minimal commission fees for PPLNS & SOLO reward systems.
        </template>

    </NuxtLayout>
</template>
