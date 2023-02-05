<script setup>
/* Import modules. */
import { ref } from 'vue'

//
</script>

<template>
    <main class="max-w-5xl mx-auto">
        <div class="pt-10 flex justify-center">
            <h1 class="text-5xl font-bold tracking-widest">
                Buy Nexa
            </h1>
        </div>

        <section class="py-10 flex flex-col items-center gap-10">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quod, commodi id asperiores reiciendis temporibus nisi quasi dolorem perspiciatis unde atque illo? Sed porro similique debitis perferendis dolor sequi voluptas!
            </p>
        </section>

<!-- THIS WILL BECOME A STANDALONE WIDGET HOSTED @ WIDGETS.NEXA.EXCHANGE -->

        <section class="mx-10 my-3 px-7 py-3 bg-gradient-to-r from-rose-200 to-rose-400 border-4 border-rose-700 rounded-full shadow">

            <h1 class="text-4xl font-medium">
                Buy Nexa
            </h1>

            <div class="flex justify-end">
                <h3 class="text-sm text-rose-900">
                    Powered by <NuxtLink to="https://nexa.exchange" target="_blank" class="font-medium hover:underline">Nexa.Exchange</NuxtLink>
                </h3>
            </div>

        </section>

<!-- THIS WILL BECOME A STANDALONE WIDGET HOSTED @ WIDGETS.NEXA.EXCHANGE -->

        <section class="px-10 py-3">
            <h3 class="text-lg">
                Want to Sell Nexa?
            </h3>

            <h3 class="text-lg">
                Visit <NuxtLink to="https://swap.nexa.exchange" target="_blank" class="text-blue-500 font-medium hover:underline">NexaSwap</NuxtLink>
            </h3>
        </section>

    </main>
</template>
