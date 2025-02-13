<script setup>
useHead({
    title: 'Blocks — Awesome Nexa',
    meta: [{
        name: 'description',
        content: 'Blocks'
    }]
})
</script>

<template>
    <main class="mx-3 lg:mx-auto my-5 max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-4">
        <section class="">
            <div class="p-3 flex flex-col gap-4 bg-yellow-400 border-2 border-yellow-700 rounded-lg shadow-md">
                <h1 class="text-xl font-medium">
                    Block Search
                </h1>

                <input
                    type="text"
                    placeholder="Enter a block height or hash"
                    class="w-full px-3 py-1 text-yellow-100 font-light bg-yellow-600 border-2 border-yellow-700 rounded-md placeholder:text-yellow-100"
                />
            </div>
        </section>

        <ClientOnly fallback-tag="span" fallback="Loading blocks...">
            <BlocksView class="col-span-2" />
        </ClientOnly>
    </main>
</template>
