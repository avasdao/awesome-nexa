<script setup>
import { HelpWhoAreYou } from '#components';

/* Import modules. */


//
</script>

<template>
    <main class="bg-white">
        <section class="grid grid-cols-2 gap-8">
            <div class="mx-auto max-w-7xl px-6 pt-10">
                Please check out the
                <NuxtLink to="https://nexa.wiki" target="_blank" class="text-lg text-blue-500 font-medium hover:underline">
                    Wiki
                </NuxtLink>
            </div>

            <div class="mx-auto max-w-7xl px-6 py-12">
                Please check out the
                <NuxtLink to="https://forum.nexa.org/" target="_blank" class="text-lg text-blue-500 font-medium hover:underline">
                    Forum
                </NuxtLink>
            </div>
        </section>

        <HelpWhoAreYou />
    </main>

</template>
