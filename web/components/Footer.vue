<script setup>
/* Import modules. */


//
</script>

<template>
    <footer class="bg-gray-900" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>

        <div class="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                <div class="grid grid-cols-2 gap-8 xl:col-span-2">
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 class="text-lg font-semibold leading-6 text-white">
                                For Users
                            </h3>

                            <ul role="list" class="mt-6 space-y-4">
                                <li>
                                    <a href="https://explorer.nexa.org/" target="_blank" class="text-base leading-6 text-gray-300 hover:text-white">
                                        Block Explorer
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.nexa.org/roadmap" target="_blank" class="text-base leading-6 text-gray-300 hover:text-white">
                                        Roadmap
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.nexa.org/download" target="_blank" class="text-base leading-6 text-gray-300 hover:text-white">
                                        Download Wallet
                                    </a>
                                </li>

                                <li>
                                    <NuxtLink to="/help" class="text-base leading-6 text-gray-300 hover:text-white">
                                        Help &amp; Support
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>

                        <div class="mt-10 md:mt-0">
                            <h3 class="text-lg font-semibold leading-6 text-white">
                                For Builders
                            </h3>

                            <ul role="list" class="mt-6 space-y-4">

                                <li>
                                    <NuxtLink to="/api" class="text-base leading-6 text-gray-300 hover:text-white">
                                        API Data Feeds
                                    </NuxtLink>
                                </li>

                                <li>
                                    <NuxtLink to="https://gitlab.com/nexa/nexa" target="_blank" class="text-base leading-6 text-gray-300 hover:text-white">
                                        Open Source Code
                                    </NuxtLink>
                                </li>

                                <li>
                                    <NuxtLink to="https://spec.nexa.org/" target="_blank" class="text-base leading-6 text-gray-300 hover:text-white">
                                        Specification
                                    </NuxtLink>
                                </li>

                                <li>
                                    <NuxtLink to="/contact" class="text-base leading-6 text-gray-300 hover:text-white">
                                        Contact Our Team
                                    </NuxtLink>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 class="text-lg font-semibold leading-6 text-white">
                                Bitcoin Unlimited
                            </h3>

                            <ul role="list" class="mt-6 space-y-4">
                                <li>
                                    <a href="https://www.bitcoinunlimited.info/about/organization" target="_blank" class="text-base leading-6 text-gray-300 hover:text-white">
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.bitcoinunlimited.info/download" target="_blank" class="text-base leading-6 text-gray-300 hover:text-white">
                                        Download
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.bitcoinunlimited.info/faq/what-is-bu" target="_blank" class="text-base leading-6 text-gray-300 hover:text-white">
                                        FAQ
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.bitcoinunlimited.info/blog" target="_blank" class="text-base leading-6 text-gray-300 hover:text-white">
                                        Blog
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.bitcoinunlimited.info/donate" target="_blank" class="text-base leading-6 text-gray-300 hover:text-white">
                                        Donate
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div class="mt-10 md:mt-0">
                            <h3 class="text-lg font-semibold leading-6 text-white">
                                Legal
                            </h3>

                            <ul role="list" class="mt-6 space-y-4">
                                <li>
                                    <NuxtLink to="/regulations" class="text-base leading-6 text-gray-300 hover:text-white">
                                        Regulations
                                    </NuxtLink>
                                </li>

                                <li>
                                    <NuxtLink to="/privacy" class="text-base leading-6 text-gray-300 hover:text-white">
                                        Privacy
                                    </NuxtLink>
                                </li>

                                <li>
                                    <NuxtLink to="/terms" class="text-base leading-6 text-gray-300 hover:text-white">
                                        Terms of Use
                                    </NuxtLink>
                                </li>

                                <li>
                                    <NuxtLink to="/conduct" class="text-base leading-6 text-gray-300 hover:text-white">
                                        Code of Conduct
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="mt-10 xl:mt-0">
                    <h3 class="text-lg font-semibold leading-6 text-white">
                        Subscribe to our newsletter
                    </h3>

                    <p class="mt-2 text-lg leading-6 text-gray-300">
                        Receive the latest Nexa news, reviews and resources, sent to your inbox monthly.
                    </p>

                    <form class="mt-6 sm:flex sm:max-w-md">
                        <label for="email-address" class="sr-only">Email address</label>
                        <input
                            type="email"
                            name="email-address"
                            id="email-address"
                            autocomplete="email"
                            required
                            class="cursor-not-allowed w-full min-w-0 appearance-none rounded-md border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-lg leading-7 text-gray-50 placeholder-gray-500 shadow-lg focus:border-indigo-500 focus:ring-indigo-500 sm:w-64 sm:leading-6 xl:w-full"
                            placeholder="Enter your email"
                            disabled
                        />

                        <div class="mt-4 rounded-md sm:mt-0 sm:ml-4 sm:flex-shrink-0">
                            <button
                                type="submit"
                                class="cursor-not-allowed flex w-full items-center justify-center rounded-md bg-indigo-500 py-1.5 px-3 text-2xl font-semibold leading-7 text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 sm:text-base sm:leading-6"
                                disabled
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>

                </div>
            </div>

            <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
                <div class="flex justify-center space-x-6 md:order-2">

                    <NuxtLink to="https://twitter.com/AvasDAO" target="_blank" class="text-gray-500 hover:text-gray-400">
                        <span class="sr-only">Twitter</span>
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                            />
                        </svg>
                    </NuxtLink>

                    <NuxtLink to="https://github.com/avasdao/awesome-nexa" target="_blank" class="text-gray-500 hover:text-gray-400">
                        <span class="sr-only">GitHub</span>
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                fill-rule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </NuxtLink>

                </div>

                <p class="text-center mt-8 text-base leading-5 text-gray-400 md:order-1 md:mt-0">
                    Brought to you with <span class="text-rose-500 font-bold">♡</span> by a community of Nexa volunteers
                </p>
            </div>
        </div>
    </footer>
</template>
