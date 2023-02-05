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

        <section class="py-5 flex flex-col items-center">
            <p>
                <slot name="url">
                    https://site-url.com/
                </slot>
            </p>
        </section>

        <section>
            <slot name="slideshow">
                <img
                    src="~/assets/ani-banner.gif"
                    class="my-10 w-7/12 h-96 border-4 border-indigo-500 rounded-xl shadow object-cover"
                />
            </slot>
        </section>
    </main>
</template>
