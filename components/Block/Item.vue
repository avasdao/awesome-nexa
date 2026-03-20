<!-- components/Block/Item.vue -->
<template>
    <main class="w-fit">
        <h3 v-if="title" class="block text-xs text-slate-400 font-medium uppercase tracking-wider">
            {{title}}
        </h3>

        <span class="block text-slate-800 font-medium text-lg break-all">
            {{value}}
        </span>
    </main>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
    value: String,
})
</script>
