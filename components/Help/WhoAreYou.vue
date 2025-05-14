<template>
    <div class="bg-white py-24 md:py-32 lg:py-40">
        <div class="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-3">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Who Are YOU?
                </h2>

                <p class="mt-6 text-lg/8 text-gray-600">
                    Let's customize a solution best suited to meet your needs, FAST!
                </p>

                <p class="mt-6 text-lg/8 text-gray-600">
                    We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
                </p>
            </div>

            <ul role="list" class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2">
                <li v-for="person in people" :key="person.name">
                    <a :href="person.url" class="text-gray-400 hover:text-gray-500">
                        <img class="aspect-[3/2] w-full rounded-2xl object-cover" :src="person.imageUrl" alt="" />

                        <h3 class="mt-6 text-lg/8 font-semibold text-gray-900 uppercase">
                            {{ person.name }}
                        </h3>

                        <p class="text-base/7 text-gray-600">
                            {{ person.role }}
                        </p>

                        <p class="mt-4 text-base/7 text-gray-600">
                            {{ person.bio }}
                        </p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
    const people = [
        {
            name: `For Everyday People`,
            role: `I want to MAKE MY LIFE EASIER`,
            imageUrl: 'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
            bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
            url: '/help/user',
        },
        {
            name: `For Contributors`,
            role: `I want to MAKE THE WORLD A BETTER PLACE`,
            imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
            bio: 'Turpis lectus et amet elementum. Mi duis integer sed in vitae consequat. Nam vitae, in felis mi dui tempus. Porta at turpis eu odio. Et, sed duis in blandit bibendum accumsan. Purus viverra facilisi suspendisse quis est.',
            url: '/help/builder',
        },
        {
            name: `For Investors`,
            role: `I want my own FINANCIAL FREEDOM`,
            imageUrl: 'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
            bio: 'Aliquet adipiscing lectus praesent cras sed quis lectus egestas erat. Bibendum curabitur eget habitant feugiat nec faucibus eu lorem suscipit. Vitae vitae tempor enim eget lacus nulla leo.',
            url: '/help/investor',
        },
        {
            name: `For Haters`,
            role: `I want to know why THIS IS A BIG SCAM!`,
            imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
            bio: 'Quis bibendum velit diam tellus sed ut. Faucibus posuere enim, vitae enim eget neque tortor. Metus lectus mattis id id. Tellus ornare etiam id velit ut enim lacinia congue ultrices. Sit morbi vel elit a maecenas mauris elit lectus magna.',
            url: '/help/hater',
        },
    ];
</script>
