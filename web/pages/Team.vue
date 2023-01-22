<script setup>
/* Import modules. */
import { ref } from 'vue'

const members = ref([])

members.value.push({
    id: '1',
    name: `Andrew Stone`,
    photoUrl: 'https://i.ibb.co/QfF8VFZ/Andrew-Stone.png',
})

members.value.push({
    id: '2',
    name: `Paul Church`,
    photoUrl: 'https://i.ibb.co/XSxwsRV/image.png',
})

members.value.push({
    id: '3',
    name: `Dr. Peter Rizun`,
    photoUrl: 'https://i.ibb.co/9WgF99J/Peter-Rizun.png',
})

members.value.push({
    id: '4',
    name: `Greg Griffith`,
    photoUrl: 'https://i.ibb.co/XFshPWN/image.png',
})

members.value.push({
    id: '5',
    name: `Andrea Suisani`,
    photoUrl: 'https://i.ibb.co/XFshPWN/image.png',
})

</script>

<template>
    <main class="">
        <HeaderView />

        <div class="pt-10 flex justify-center">
            <h1 class="text-5xl text-yellow-600 font-bold tracking-widest">
                The Nexa Team
            </h1>
        </div>

        <section class="mt-10 px-10 py-10 grid grid-cols-3 gap-4 bg-gradient-to-r from-gray-100 to-gray-300 border-y-4 border-gray-400 shadow">
            <div
                v-for="member of members"
                key="member.id"
                class="m-3 p-3 flex flex-col items-center gap-4 bg-purple-100 border-4 border-purple-300 rounded-lg shadow"
            >
                <img
                    class="mx-auto h-20 w-20 border-4 border-purple-500 rounded-full lg:h-32 lg:w-32 shadow"
                    :src="member.photoUrl"
                    alt=""
                />

                <h2 class="text-2xl">
                    {{member.name}}
                </h2>
            </div>
        </section>

        <FooterView />
    </main>
</template>
