<template>
    <main class="max-w-5xl mx-auto py-5 flex flex-col gap-4">
        <h1 class="text-5xl font-medium">
            Investor
        </h1>

        <div class="mx-auto max-w-7xl px-6 py-6 sm:py-8 lg:py-10 lg:px-8">
            <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">

                <h2 class="text-3xl font-bold leading-10 tracking-tight text-gray-900">
                    Frequently Asked Questions
                </h2>

                <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
                    <div class="pt-6">
                        <dt>
                            <!-- Expand/collapse question button -->
                            <button type="button" class="flex w-full items-start justify-between text-left text-gray-900" aria-controls="faq-0" aria-expanded="false">
                                <span class="text-lg font-semibold leading-7">
                                    Wen moon?
                                </span>

                                <span class="ml-6 flex h-7 items-center">
                                    <!--
                    Icon when question is collapsed.

                    Item expanded: "hidden", Item collapsed: ""
                    -->
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                                    </svg>
                                    <!--
                    Icon when question is expanded.

                    Item expanded: "", Item collapsed: "hidden"
                    -->
                                    <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                    </svg>
                                </span>
                            </button>
                        </dt>
                        <dd class="mt-2 pr-12" id="faq-0">
                            <p class="text-base leading-7 text-gray-600">
                                I don&#039;t know, but the <NuxtLink to="https://bitcoinunlimited.info" target="_blank" class="text-blue-500 font-medium hover:underline">BitcoinUnlimited</NuxtLink> team is hard at work, and so it's only a matter of time...
                            </p>
                        </dd>
                    </div>

                    <!-- More questions... -->
                </dl>
            </div>
        </div>
    </main>

    <Footer />
</template>

<script setup lang="ts">
useHead({
    title: `Investor — Awesome Nexa`,
    meta: [
        { name: 'description', content: `Awesome Nexa makes building your next BIG idea effortless.` }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

// onMounted(() => {
//     console.log('Mounted!')
//     // Now it's safe to perform setup operations.
// })

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
