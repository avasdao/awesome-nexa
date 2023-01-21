<script setup>
/* Import modules. */
import { ref } from 'vue'

//
</script>

<template>
    <main class="">
        <HeaderView />

        <div class="pt-10 flex justify-center">
            <h1 class="text-5xl text-yellow-600 font-bold tracking-widest">
                The Nexa Team
            </h1>
        </div>

        <section class="mt-10 px-10 py-10 grid grid-cols-3 gap-4 bg-gradient-to-r from-gray-100 to-gray-300 border-y-4 border-gray-400 shadow">

            <div class="m-3 p-3 flex flex-col items-center gap-4 bg-purple-100 border-4 border-purple-300 rounded-lg shadow">
                <img
                    class="mx-auto h-20 w-20 border-4 border-purple-500 rounded-full lg:h-32 lg:w-32 shadow"
                    src="https://i.ibb.co/QfF8VFZ/Andrew-Stone.png"
                    alt=""
                />

                <h2 class="text-2xl">
                    Andrew Stone
                </h2>
            </div>

            <div class="m-3 p-3 flex flex-col items-center gap-4 bg-purple-100 border-4 border-purple-300 rounded-lg shadow">
                <img
                    class="mx-auto h-20 w-20 border-4 border-purple-500 rounded-full lg:h-32 lg:w-32 shadow"
                    src="https://i.ibb.co/XSxwsRV/image.png"
                    alt=""
                />

                <h2 class="text-2xl">
                    Paul Church
                </h2>
            </div>

            <div class="m-3 p-3 flex flex-col items-center gap-4 bg-purple-100 border-4 border-purple-300 rounded-lg shadow">
                <img
                    class="mx-auto h-20 w-20 border-4 border-purple-500 rounded-full lg:h-32 lg:w-32 shadow"
                    src="https://i.ibb.co/9WgF99J/Peter-Rizun.png"
                    alt=""
                />

                <h2 class="text-2xl">
                    Dr. Peter Rizun
                </h2>
            </div>

        </section>

        <FooterView />
    </main>
</template>
