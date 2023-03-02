<script setup>
/* Import modules. */
import { ref } from 'vue'

/* Initialize stores. */
import { useProfileStore } from '@/stores/profile'

/* Initialize Profile store. */
const Profile = useProfileStore()

const hasAuth = ref(false)

const nickname = ref(null)
nickname.value = 'Satoshi'

const target = '/api/auth?sid=' + Profile.sessionid
console.log('TARGET', target)

const session = await $fetch(target)
console.log('SESSION', session)

if (session?.profileid) {
    hasAuth.value = true
}
</script>

<template>
    <main class="px-3 max-w-5xl mx-auto">
        <div class="pt-10 flex justify-center">
            <h1 class="text-5xl font-bold tracking-widest">
                My Profile
            </h1>
        </div>

        <section v-if="hasAuth" class="py-10 flex flex-col items-center gap-10">
            <p>
                Nickname

                [ {{nickname}} ]
            </p>
        </section>

        <AuthView v-else />
    </main>
</template>
