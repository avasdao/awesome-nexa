<template>
    <main class="max-w-7xl px-5 py-5 mx-auto flex flex-col lg:flex-row gap-4">
        <section class="w-full lg:w-2/3">

            <div class="h-96 p-5 mx-5 my-2 rounded-3xl bg-gray-900 border-4 border-yellow-500 shadow-md">

                <h2 class="relative text-gray-100 text-2xl font-medium z-10">
                    Featured Spotlight
                </h2>

                <img
                    src="~/assets/banners/txbit-listing.jpg"
                    class="-mt-10 relative inset-0"
                />

                <div class="relative -mt-10 flex gap-6 justify-center">
                    <button class="block w-4 h-4 bg-gray-200 rounded-full hover:bg-yellow-400" />

                    <button class="block w-4 h-4 bg-gray-200 rounded-full hover:bg-yellow-400" />

                    <button class="block w-4 h-4 bg-gray-200 rounded-full hover:bg-yellow-400" />
                </div>
            </div>

        </section>

        <section class="w-full lg:w-1/3 px-3 py-5 flex flex-col gap-4 bg-purple-900 border-4 border-purple-400 rounded-2xl shadow-md">

            <div class="w-full h-20 px-3 py-1 bg-purple-700 rounded-lg">
                <h2 class="text-purple-100 text-sm font-medium">
                    Price / Chart
                </h2>
            </div>

            <div class="w-full h-20 px-3 py-1 bg-purple-700 rounded-lg">
                <h2 class="text-purple-100 text-sm font-medium">
                    Latest News
                </h2>
            </div>

            <div class="w-full h-20 px-3 py-1 bg-purple-700 rounded-lg">
                <h2 class="text-purple-100 text-sm font-medium">
                    Latest Twitter
                </h2>
            </div>

            <div class="w-full h-20 px-3 py-1 bg-purple-700 rounded-lg">
                <h2 class="text-purple-100 text-sm font-medium">
                    Latest Video
                </h2>
            </div>

        </section>
    </main>
</template>
