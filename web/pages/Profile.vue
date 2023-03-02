<script setup>
/* Import modules. */
import { ref } from 'vue'

const nickname = ref(null)

nickname.value = 'Satoshi'
</script>

<template>
    <main class="px-3 max-w-5xl mx-auto">
        <div class="pt-10 flex justify-center">
            <h1 class="text-5xl font-bold tracking-widest">
                My Profile
            </h1>
        </div>

        <section class="py-10 flex flex-col items-center gap-10">
            <p>
                Nickname

                [ {{nickname}} ]
            </p>
        </section>
    </main>
</template>
