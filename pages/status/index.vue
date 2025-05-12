<template>
    <main class="px-3 max-w-5xl mx-auto">
        <div class="pt-10 flex flex-col items-center gap-3">
            <h1 class="text-5xl font-bold tracking-widest">
                Awesome Nexa Status
            </h1>

            <h2 class="text-3xl font-medium text-slate-500 italic">
                Build Your Wildest Dreams...
            </h2>
        </div>

        <p class="p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat veniam, corrupti amet in sed itaque omnis? Sequi provident praesentium et expedita at. Modi quas quasi nobis, ratione officiis expedita accusantium?
        </p>

        <section class="mx-20 my-5 py-3 grid grid-cols-2 gap-x-4 gap-y-2 bg-gradient-to-r from-gray-50 to-gray-200 border-2 border-gray-300 rounded shadow">
            <div class="col-span-2 flex justify-center">
                <h1 class="text-2xl text-gray-500 font-medium tracking-widest uppercase">
                    System Status
                </h1>
            </div>

            <div class="flex justify-end items-center">
                <h3 class="text-gray-500 font-medium uppercase">
                    Database
                </h3>
            </div>

            <div class="flex">
                <h2 class="text-xl text-green-600 font-medium">
                    {{ status?.database }}
                </h2>
            </div>

            <div class="flex justify-end items-center">
                <h3 class="text-gray-500 font-medium uppercase">
                    Price Ticker
                </h3>
            </div>

            <div class="flex">
                <h2 class="text-xl text-green-600 font-medium">
                    {{ status?.ticker }}
                </h2>
            </div>

            <div class="flex justify-end items-center">
                <h3 class="text-gray-500 font-medium uppercase">
                    NexID Server
                </h3>
            </div>

            <div class="flex">
                <h2 class="text-xl text-green-600 font-medium">
                    {{ status?.nexid }}
                </h2>
            </div>

        </section>

        <section class="mx-20 my-5 py-3 grid grid-cols-2 gap-x-4 gap-y-2 bg-gradient-to-r from-gray-50 to-gray-200 border-2 border-gray-300 rounded shadow">
            <div class="col-span-2 flex justify-center">
                <h1 class="text-2xl text-gray-500 font-medium tracking-widest uppercase">
                    Network Details
                </h1>
            </div>

            <div class="flex justify-end items-center">
                <h3 class="text-gray-500 font-medium uppercase">
                    Database
                </h3>
            </div>

            <div class="flex">
                <h2 class="text-xl text-green-600 font-medium">
                    {{ status?.db }}
                </h2>
            </div>

            <div class="flex justify-end items-center">
                <h3 class="text-gray-500 font-medium uppercase">
                    Price Ticker
                </h3>
            </div>

            <div class="flex">
                <h2 class="text-xl text-green-600 font-medium">
                    {{ status?.ticker }}
                </h2>
            </div>

            <div class="flex justify-end items-center">
                <h3 class="text-gray-500 font-medium uppercase">
                    NexID Server
                </h3>
            </div>

            <div class="flex">
                <h2 class="text-xl text-green-600 font-medium">
                    {{ status?.nexid }}
                </h2>
            </div>

        </section>

    </main>
</template>

<script setup>
/* Import modules. */

const status = {}//await $fetch('/status')
console.log('STATUS', status)

// const hello = await $fetch('/api/hello?name=Satoshi')
// console.log('HELLO', hello)
</script>
