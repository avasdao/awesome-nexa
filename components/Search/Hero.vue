<script setup lang="ts">

const Router = useRouter()


const search = ref(null)

watch(search, (_search) => {
    console.log('SEARCH CHANGED', _search)

    if (_search.length === 64) {
        Router.push('tx/' + _search)
    }
})
</script>

<template>
    <main class="relative mt-2 flex items-center">
        <input
            type="text"
            placeholder="Search for addresses, tokens, transactions and more..."
            class="block w-full rounded-2xl border-2 border-amber-400 py-5 pl-5 pr-14 text-xl text-gray-200 bg-gray-800 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400"
            v-model="search"
        >

        <div class="pointer-events-none absolute inset-y-0 right-0 flex py-5 pr-5">
            <kbd class="inline-flex items-center rounded border border-gray-200 px-3 font-sans text-xs text-gray-400">/</kbd>
        </div>
    </main>
</template>
