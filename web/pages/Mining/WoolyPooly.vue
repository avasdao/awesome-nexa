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
            https://woolypooly.com/en/coin/nexa
        </template>

        <template #slideshow>
            <img
                src="~/assets/screenshots/wooly-pooly_01.jpg"
                class="my-10 w-7/12 h-96 border-4 border-indigo-500 rounded-xl shadow object-cover"
            />
        </template>
    </NuxtLayout>
</template>
