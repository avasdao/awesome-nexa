<script setup>
/* Import modules. */
import { ref } from 'vue'

//
</script>

<template>
    <main class="max-w-5xl mx-auto">
        <div class="pt-10 flex justify-center">
            <h1 class="text-5xl font-bold tracking-widest">
                Buy Into Nexa's Future
            </h1>
        </div>

        <section class="py-10 flex flex-col items-center gap-10">
            <p>
                Are you ready to own a piece of the future?
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quod, commodi id asperiores reiciendis temporibus nisi quasi dolorem perspiciatis unde atque illo? Sed porro similique debitis perferendis dolor sequi voluptas!
            </p>
        </section>

        <section class="mx-10 my-10 px-7 py-3 bg-gradient-to-r from-indigo-100 to-indigo-300 border-4 border-indigo-700 rounded-2xl shadow">

            <h1 class="text-3xl font-medium">
                <span class="text-2xl text-indigo-700">STEP #1:</span>
                What is your Nexa wallet address?
            </h1>

            <input
                type="text"
                placeholder="nexa:"
                class="w-3/4 my-3 px-3 py-2 text-2xl text-indigo-500 font-medium border-2 border-indigo-500 rounded placeholder:text-indigo-300 placeholder:font-medium"
            />

            <p class="text-lg">
                This is the <NuxtLink to="/wallets" class="text-blue-900 font-medium hover:underline">Wallet</NuxtLink> where you want your NEXA to be delivered after the swap completes.
            </p>

            <NuxtLink to="/wallets" class="my-3 block text-blue-900 font-medium hover:underline">
                Do you need a Wallet?
            </NuxtLink>
        </section>

        <section class="mx-10 my-10 px-7 py-3 bg-gradient-to-r from-indigo-100 to-indigo-300 border-4 border-indigo-700 rounded-2xl shadow">

            <h1 class="text-3xl font-medium">
                <span class="text-2xl text-indigo-700">STEP #2:</span>
                How do you want to Pay?
            </h1>

            <ul class="pl-10 list-disc">
                <li>Bitcoin (BTC)</li>
                <li>Bitcoin Cash (BCH)</li>
                <li>
                    Tether (USDT)
                    <ol class="pl-10 list-disc">
                        <li>BNB Smart Chain (BSC)</li>
                        <li>Ethereum (ETH)</li>
                        <li>Tron (TRX)</li>
                    </ol>
                </li>
            </ul>

            <div class="flex justify-end">
                <h3 class="text-sm text-indigo-900">
                    Powered by <NuxtLink to="https://nexa.exchange" target="_blank" class="font-medium hover:underline">Nexa.Exchange</NuxtLink>
                </h3>
            </div>

        </section>

        <section class="mx-10 my-10 px-7 py-3 bg-gradient-to-r from-indigo-100 to-indigo-300 border-4 border-indigo-700 rounded-2xl shadow">

            <h1 class="text-3xl font-medium">
                <span class="text-2xl text-indigo-700">STEP #3:</span>
                How much do you want to Buy?
            </h1>

            <div class="mt-5 w-72">
                <div class="flex justify-between items-end my-1 px-5 py-3 bg-gray-100 rounded-xl">
                    <span class="text-base font-light">USD</span>

                    <span class="text-3xl font-medium">$13.37</span>
                </div>

                <div class="px-5 flex justify-end">
                    <span class="text-sm">
                        Minimum purchase is <span class="text-lg font-medium text-indigo-700">$45.00</span>
                        <span class="ml-1 text-xs text-indigo-500">USD</span>
                    </span>
                </div>

                <div class="px-5 flex justify-end">
                    <span class="text-sm">
                        Maximum purchase is <span class="text-lg font-medium text-indigo-700">$1,000.00</span>
                        <span class="ml-1 text-xs text-indigo-500">USD</span>
                    </span>
                </div>

                <div class="mt-5 flex gap-4">
                    <button class="w-1/3 h-16 p-2 bg-gray-500 rounded-xl hover:bg-gray-600">
                        1
                    </button>

                    <button class="w-1/3 h-16 p-2 bg-gray-500 rounded-xl hover:bg-gray-600">
                        2
                    </button>

                    <button class="w-1/3 h-16 p-2 bg-gray-500 rounded-xl hover:bg-gray-600">
                        3
                    </button>
                </div>

                <div class="mt-5 flex gap-4">
                    <button class="w-1/3 h-16 p-2 bg-gray-500 rounded-xl hover:bg-gray-600">
                        4
                    </button>

                    <button class="w-1/3 h-16 p-2 bg-gray-500 rounded-xl hover:bg-gray-600">
                        5
                    </button>

                    <button class="w-1/3 h-16 p-2 bg-gray-500 rounded-xl hover:bg-gray-600">
                        6
                    </button>
                </div>

                <div class="mt-5 flex gap-4">
                    <button class="w-1/3 h-16 p-2 bg-gray-500 rounded-xl hover:bg-gray-600">
                        7
                    </button>

                    <button class="w-1/3 h-16 p-2 bg-gray-500 rounded-xl hover:bg-gray-600">
                        8
                    </button>

                    <button class="w-1/3 h-16 p-2 bg-gray-500 rounded-xl hover:bg-gray-600">
                        9
                    </button>
                </div>

                <div class="mt-5 flex gap-4">
                    <button class="w-1/3 h-16 p-2 bg-gray-500 rounded-xl hover:bg-gray-600">
                        .
                    </button>

                    <button class="w-1/3 h-16 p-2 bg-gray-500 rounded-xl hover:bg-gray-600">
                        0
                    </button>

                    <button class="w-1/3 h-16 p-2 bg-gray-500 rounded-xl hover:bg-gray-600">
                        &lt;
                    </button>
                </div>

            </div>

        </section>

        <section class="flex flex-col items-end px-10 py-10">
            <h3 class="text-xl">
                Do you need to <span class="font-medium">Sell</span> some NEXA?
            </h3>

            <h3 class="text-xl">
                Visit <NuxtLink to="https://swap.nexa.exchange" target="_blank" class="text-2xl text-blue-500 font-medium hover:underline">NexaSwap</NuxtLink> for instant exchange to <span class="font-medium">over 100+</span> Cryptos
            </h3>
        </section>

    </main>
</template>
