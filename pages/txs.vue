<script setup>
useHead({
    title: 'Transactions — Awesome Nexa',
    meta: [{
        name: 'description',
        content: 'Transactions'
    }]
})
</script>

<template>
    <main class="mx-3 lg:mx-auto my-5 max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-4">
        <section class="">
            <div class="p-3 flex flex-col gap-4 bg-yellow-400 border-2 border-yellow-700 rounded-lg shadow-md">
                <h1 class="text-xl font-medium">
                    Transaction Search
                </h1>

                <input
                    type="text"
                    placeholder="Enter a transaction id or idem"
                    class="w-full px-3 py-1 text-yellow-100 font-light bg-yellow-600 border-2 border-yellow-700 rounded-md placeholder:text-yellow-100"
                />
            </div>
        </section>

        <ClientOnly fallback-tag="span" fallback="Loading transactions...">
            <TransactionsView class="col-span-2" />
        </ClientOnly>
    </main>
</template>
