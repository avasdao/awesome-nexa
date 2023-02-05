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
                class="flex gap-3 group items-center px-5 py-2 bg-blue-500 text-xl text-blue-50 font-medium rounded-2xl border-4 border-blue-300 hover:bg-blue-700 hover:border-yellow-400 hover:text-yellow-300"
            >
                https://woolypooly.com/en/coin/nexa
                <svg class="w-6 h-6 group-hover:text-yellow-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                </svg>
            </a>
        </template>

        <template #slideshow>
            <img
                src="~/assets/screenshots/wooly-pooly_01.jpg"
                class="my-0 w-7/12 h-96 border-4 border-indigo-500 rounded-xl shadow object-cover"
            />
        </template>

        <template #summary>
            An experienced mining pool for the Nexa community
        </template>

        <template #description>
            <p>
                WoolyPooly is one of the most profitable pools with a focus on minimal commission fees for PPLNS & SOLO reward systems.
            </p>

            <p>
                Nexa is mined using the NexaPow algorithm.
                This is a core-dependent algorithm which can be mined in the same way as on Kaspa and Radiant (that is, -2000 for Hive OS and -1000 for Windows).
                It is currently profitable to mine Nexa on GPU devices.
                You can see the profitability of Nexa mining in their calculator.
            </p>
        </template>

    </NuxtLayout>
</template>
