<script setup lang="ts">
const props = defineProps({
    title: String,
    value: String,
})
</script>

<template>
    <main class="px-3 py-1 w-fit bg-sky-100 border-2 border-sky-300 rounded-lg shadow">
        <h3 class="block text-xs text-sky-600 font-medium uppercase">
            {{title}}
        </h3>

        <span class="block text-sky-900 font-medium">
            {{value}}
        </span>
    </main>
</template>
