<template>
    <div class="bg-white">
        <div class="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
            <div class="space-y-8 sm:space-y-12">
                <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
                        The Nexa Team
                    </h2>

                    <p class="text-xl text-gray-500">
                        The Nexa blockchain is built and maintained by the team from <a href="https://bitcoinunlimited.info" target="_blank" class="text-blue-500 hover:underline">Bitcoin Unlimited</a>.
                        They have over a decade of experience in building scalable blockchain technologies.
                    </p>
                </div>

                <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
                    <li>
                        <div class="space-y-4">
                            <img
                                class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24"
                                src="https://i.ibb.co/QfF8VFZ/Andrew-Stone.png"
                                alt=""
                            />
                            <div class="space-y-2">
                                <div class="text-xs font-medium lg:text-sm">
                                    <h3>Andrew Stone</h3>
                                    <p class="text-indigo-600">Lead Developer</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="space-y-4">
                            <img
                                class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24"
                                src="https://i.ibb.co/XSxwsRV/image.png"
                                alt=""
                            />
                            <div class="space-y-2">
                                <div class="text-xs font-medium lg:text-sm">
                                    <h3>Paul Church</h3>
                                    <p class="text-indigo-600">Community Leader</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="space-y-4">
                            <img
                                class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24"
                                src="https://i.ibb.co/9WgF99J/Peter-Rizun.png"
                                alt=""
                            />
                            <div class="space-y-2">
                                <div class="text-xs font-medium lg:text-sm">
                                    <h3>Dr. Peter Rizun</h3>
                                    <p class="text-indigo-600">Chief Scientist</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <!-- More people... -->
                    <NuxtLink to="/team" class="flex items-center justify-center bg-gradient-to-r from-yellow-300 to-yellow-400 border-2 border-yellow-600 rounded-lg shadow">
                        <span class="text-sm text-yellow-800 font-medium">
                            Show (12) more...
                        </span>
                    </NuxtLink>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    //
}
</script>
