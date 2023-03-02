<template>
    <main class="max-w-7xl px-0 lg:px-5 py-5 mx-auto flex flex-col lg:flex-row gap-4">
        <section class="w-full lg:w-2/3">
            <div class="h-64 sm:h-96 mx-3 my-2 rounded-3xl overflow-hidden bg-gray-900 border-4 border-yellow-500 shadow-md">

                <h2 class="ml-3 mt-2 sm:ml-5 sm:mt-5 relative text-gray-100 opacity-50 text-lg sm:text-2xl font-medium z-10">
                    Featured Spotlight
                </h2>

                <img
                    src="~/assets/banners/txbit-listing.jpg"
                    class="-mt-12 py-5 h-full object-cover relative inset-0"
                />

                <div class="relative -mt-5 sm:-mt-10 flex gap-6 justify-center">
                    <button class="block w-4 h-4 bg-gray-200 rounded-full hover:bg-yellow-400" />

                    <button class="block w-4 h-4 bg-gray-200 rounded-full hover:bg-yellow-400" />

                    <button class="block w-4 h-4 bg-gray-200 rounded-full hover:bg-yellow-400" />
                </div>
            </div>
        </section>

        <section class="w-full lg:w-1/3 px-3 py-2">
            <div class="px-3 py-5 flex flex-col gap-4 bg-purple-900 border-4 border-purple-400 rounded-2xl shadow-md">
                <div class="w-full h-20 px-3 py-1 bg-purple-700 rounded-lg">
                    <h2 class="text-purple-100 text-sm font-medium">
                        Price / Chart
                    </h2>
                </div>

                <div class="w-full h-20 px-3 py-1 bg-purple-700 rounded-lg">
                    <h2 class="text-purple-100 text-sm font-medium">
                        Featured News
                    </h2>
                </div>

                <NuxtLink to="https://twitter.com/NexaMoney/status/1628422269356888071" target="_blank" class="w-full h-20 pl-2 pr-1 py-1 flex justify-between bg-purple-700 border border-purple-400 rounded-lg shadow-md">
                    <div>
                        <h3 class="text-purple-300 text-xs font-medium uppercase">
                            Featured Social
                        </h3>

                        <h2 class="text-purple-100 text-base font-bold">
                            Twitter Space
                        </h2>

                        <h3 class="text-purple-100 text-xs font-medium italic">
                            Mon, Feb 27 @ 9am EST
                        </h3>

                        <h3 class="text-purple-100 text-xs font-bold">
                            1st Nexa community discussion
                        </h3>
                    </div>

                    <img src="https://pbs.twimg.com/media/FplRaX-aYAAOXzJ?format=jpg&name=900x900" class="h-full border border-purple-400 rounded-lg shadow" />
                </NuxtLink>

                <NuxtLink to="https://www.youtube.com/watch?v=7pmoT3M262A" target="_blank" class="w-full h-20 pl-2 pr-1 py-1 flex justify-between bg-purple-700 border border-purple-400 rounded-lg shadow-md">
                    <div>
                        <h3 class="text-purple-300 text-xs font-medium uppercase">
                            Featured Video
                        </h3>

                        <h2 class="text-purple-100 text-base font-bold">
                            The Nexa Drop
                        </h2>

                        <h3 class="text-purple-100 text-xs font-medium italic">
                            Andrew Stone & Paul Church
                        </h3>

                        <h3 class="text-purple-100 text-xs font-bold">
                            The Power of Tokens on Nexa
                        </h3>
                    </div>

                    <img src="~/assets/thumbnails/the-power-of-tokens-on-nexa.jpg" class="h-full border border-purple-400 rounded-lg shadow" />
                </NuxtLink>
            </div>
        </section>
    </main>
</template>
