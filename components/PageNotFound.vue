<!-- components/PageNotFound.vue -->
<template>
    <main class="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
        <div class="mx-auto mt-5 max-w-2xl text-center">
            <p class="text-base font-semibold leading-8 text-indigo-600">
                Oops!
            </p>

            <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                This page does not exist
            </h1>

            <p class="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
                Sorry, we couldn’t find ( {{path}} ).
            </p>
        </div>

        <div class="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
            <h2 class="sr-only">Popular pages</h2>
            <ul role="list" class="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5">
                <li class="relative flex gap-x-6 py-6">
                    <div class="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                        <svg class="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path
                                d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z"
                            />
                        </svg>
                    </div>
                    <div class="flex-auto">
                        <h3 class="text-sm font-semibold leading-6 text-gray-900">
                            <a href="#">
                                <span class="absolute inset-0" aria-hidden="true"></span>
                                Documentation
                            </a>
                        </h3>
                        <p class="mt-2 text-sm leading-6 text-gray-600">Learn how to integrate our tools with your app.</p>
                    </div>
                    <div class="flex-none self-center">
                        <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </li>
                <li class="relative flex gap-x-6 py-6">
                    <div class="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                        <svg class="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path
                                d="M5.625 3.75a2.625 2.625 0 100 5.25h12.75a2.625 2.625 0 000-5.25H5.625zM3.75 11.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3 15.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3.75 18.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z"
                            />
                        </svg>
                    </div>
                    <div class="flex-auto">
                        <h3 class="text-sm font-semibold leading-6 text-gray-900">
                            <a href="#">
                                <span class="absolute inset-0" aria-hidden="true"></span>
                                API Reference
                            </a>
                        </h3>
                        <p class="mt-2 text-sm leading-6 text-gray-600">A complete API reference for our libraries.</p>
                    </div>
                    <div class="flex-none self-center">
                        <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </li>
                <li class="relative flex gap-x-6 py-6">
                    <div class="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                        <svg class="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path
                                fill-rule="evenodd"
                                d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </div>
                    <div class="flex-auto">
                        <h3 class="text-sm font-semibold leading-6 text-gray-900">
                            <a href="#">
                                <span class="absolute inset-0" aria-hidden="true"></span>
                                Guides
                            </a>
                        </h3>
                        <p class="mt-2 text-sm leading-6 text-gray-600">Installation guides that cover popular setups.</p>
                    </div>
                    <div class="flex-none self-center">
                        <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </li>
                <li class="relative flex gap-x-6 py-6">
                    <div class="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                        <svg class="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path
                                fill-rule="evenodd"
                                d="M3.75 4.5a.75.75 0 01.75-.75h.75c8.284 0 15 6.716 15 15v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75C18 11.708 12.292 6 5.25 6H4.5a.75.75 0 01-.75-.75V4.5zm0 6.75a.75.75 0 01.75-.75h.75a8.25 8.25 0 018.25 8.25v.75a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75v-.75a6 6 0 00-6-6H4.5a.75.75 0 01-.75-.75v-.75zm0 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </div>
                    <div class="flex-auto">
                        <h3 class="text-sm font-semibold leading-6 text-gray-900">
                            <a href="#">
                                <span class="absolute inset-0" aria-hidden="true"></span>
                                Blog
                            </a>
                        </h3>
                        <p class="mt-2 text-sm leading-6 text-gray-600">Read our latest news and articles.</p>
                    </div>
                    <div class="flex-none self-center">
                        <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </li>
            </ul>

            <div class="mt-10 flex justify-center">
                <NuxtLink to="/" class="text-xl font-semibold leading-6 text-indigo-600">
                    <span aria-hidden="true">&larr;</span>
                    Back to home
                </NuxtLink>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
const route = useRoute()
// console.log('ROUTE', route)

const path = ref(route?.path)

// onMounted(() => {
//     console.log('Mounted!')
//     // Now it's safe to perform setup operations.
// })

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>
