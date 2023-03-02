<script setup>
/* Import modules. */
import { ref } from 'vue'

const mining = await $fetch('/api/mining')
// console.log('MINING', mining)
</script>

<template>
    <ul class="px-3 max-w-7xl mx-auto my-10 flex flex-col lg:flex-row">
        <NuxtLink to="/mining/WoolyPooly" v-for="listing of mining" :key="listing.id" class="py-5 w-full lg:w-1/3 flex gap-4">
            <img
                :src="listing.imgUrl"
                class="w-24 h-24 bg-gradient-to-r from-gray-100 to-gray-300 border-2 border-yellow-500 rounded-lg overlay-hidden shadow-md"
            />

            <div class="">
                <h3 class="text-lg font-medium">
                    {{listing.title}}
                </h3>

                <p class="text-sm">
                    {{listing.summary}}
                </p>
            </div>
        </NuxtLink>
    </ul>
</template>
