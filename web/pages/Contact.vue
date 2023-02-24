<script setup>
/* Import modules. */
import { ref } from 'vue'

//
</script>

<template>
    <main class="relative isolate bg-white py-24 px-6 sm:py-32 lg:px-8">
        <svg class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
            <defs>
                <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-64" patternUnits="userSpaceOnUse">
                    <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
            </defs>
            <svg x="50%" y="-64" class="overflow-visible fill-gray-50">
                <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z" stroke-width="0" />
            </svg>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
        </svg>

        <div class="mx-auto max-w-xl lg:max-w-4xl">
            <h2 class="text-4xl font-bold tracking-tight text-gray-900">
                Let’s talk about your Nexa project
            </h2>

            <p class="w-3/4 mt-2 text-lg leading-8 text-gray-600">
                The Awesome Nexa team is ready, willing and able to help make your Crypto BUIDL dreams a reality.
            </p>

            <div class="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
                <form action="javascript://" method="POST" class="lg:flex-auto">
                    <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                        <div>
                            <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">
                                Your fullname
                            </label>

                            <div class="mt-2.5">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autocomplete="given-name"
                                    class="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">
                                Your email address
                            </label>

                            <div class="mt-2.5">
                                <input
                                    disabled
                                    placeholder="temporarily offline"
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autocomplete="family-name"
                                    class="cursor-not-allowed block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="budget" class="block text-sm font-semibold leading-6 text-gray-900">
                                Project name
                            </label>

                            <div class="mt-2.5">
                                <input
                                    id="budget"
                                    name="budget"
                                    type="text"
                                    class="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="website" class="block text-sm font-semibold leading-6 text-gray-900">
                                Project website
                            </label>

                            <div class="mt-2.5">
                                <input
                                    type="url"
                                    name="website"
                                    id="website"
                                    class="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                />
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">
                                Brief project summary
                            </label>

                            <div class="mt-2.5">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    class="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="mt-10">
                        <Button
                            disabled
                            class="opacity-30 cursor-not-allowed block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Let’s talk
                        </Button>
                    </div>

                    <p class="mt-4 text-sm leading-6 text-gray-500">
                        By submitting this form, I agree to the <NuxtLink to="/privacy" class="font-semibold text-indigo-600">privacy&nbsp;policy</NuxtLink>.
                    </p>
                </form>

                <div class="lg:mt-6 lg:w-80 lg:flex-none">
                    <img class="h-12 w-auto" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
                    <figure class="mt-10">
                        <blockquote class="text-lg font-semibold leading-8 text-gray-900">
                            <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
                        </blockquote>

                        <NuxtLink to="https://twitter.com/0xShomari" target="_blank" class="group px-3 py-2 mt-10 flex items-center gap-x-6 bg-blue-200 rounded-lg border border-blue-300 shadow hover:bg-blue-300">
                            <img
                                src="https://pbs.twimg.com/profile_images/617458563/profile5_400x400.jpg"
                                alt=""
                                class="h-14 w-14 flex-none rounded-full bg-gray-50 border-2 border-blue-600 shadow"
                            />

                            <div>
                                <div class="text-2xl font-semibold text-blue-900 group-hover:text-blue-700">
                                    0xShomari
                                </div>

                                <div class="text-lg font-medium text-blue-600 group-hover:text-blue-900">
                                    Crypto Master Builder
                                </div>
                            </div>
                        </NuxtLink>
                    </figure>
                </div>
            </div>
        </div>
    </main>
</template>
