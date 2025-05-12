<template>
    <main class="px-3 max-w-5xl mx-auto">
        <div class="pt-10 flex flex-col items-center gap-3">
            <h1 class="text-5xl font-bold tracking-widest">
                Awesome Nexa REST API
            </h1>

            <h2 class="text-3xl font-medium text-slate-500 italic">
                Build Your Wildest Dreams...
            </h2>
        </div>

        <p class="p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat veniam, corrupti amet in sed itaque omnis? Sequi provident praesentium et expedita at. Modi quas quasi nobis, ratione officiis expedita accusantium?
        </p>

        <ApiListKeys />

        <section class="py-10 flex flex-col items-center">
            <h3 class="text-2xl font-medium">
                Featured Endpoints
            </h3>

            <ul class="list-disc mt-3 pl-10 flex flex-col gap-3">
                <li><a href="/api/address" class="text-blue-500 font-medium text-2xl hover:underline">Address</a></li>
                <li><a href="/api/persona" class="text-blue-500 font-medium text-2xl hover:underline">Persona</a></li>
            </ul>
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
