<script setup>
/* Import modules. */
import { ref } from 'vue'

//
</script>

<template>
    <main class="px-3 max-w-5xl mx-auto">

        <header class="pt-10 flex flex-col items-center">
            <h1 class="text-2xl text-yellow-600 font-medium tracking-wider uppercase">
                Awesome Nexa Newsletter
            </h1>

            <h2 class="text-7xl font-bold tracking-widest">
                <slot name="title">
                    Month
                </slot>
            </h2>
        </header>

        <div class="w-full px-5 sm:pt-7">
            <p class="text-2xl font-medium text-gray-500">
                <span class="inline-block relative -mr-2 text-7xl text-yellow-500">&ldquo;</span>
                <slot name="summary">
                    Enter a short summary here
                </slot>
                <span class="inline-block relative -mt-10 text-7xl text-yellow-500">&bdquo;</span>
            </p>
        </div>

        <section class="my-10 px-3 sm:px-10 flex flex-col items-center">
            <div class="flex flex-col gap-6 text-lg text-gray-500">
                <slot name="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum quod laudantium praesentium doloribus error qui natus neque, voluptates expedita deleniti modi ducimus sequi quaerat ipsa fugit. Fugit, corrupti ad.
                </slot>
            </div>
        </section>
    </main>
</template>
