<script setup>
/* Import modules. */
import { ref } from 'vue'

/* Initialize stores. */
import { useProfileStore } from '@/stores/profile'

/* Initialize constants. */
const POLLING_FREQUENCY = 3000 // 3 seconds

let pollingid

/* Initialize Profile store. */
const Profile = useProfileStore()

const hasAuth = ref(false)
const isLoading = ref(true)

const nickname = ref(null)
nickname.value = 'Satoshi'

const target = '/api/auth?sid=' + Profile.sessionid
// console.log('TARGET', target)

const pollForAuth = async () => {
    console.log('POLLING FOR AUTH')

    const session = await $fetch(target)
    console.log('SESSION', session)

    /* Validate authorized session. */
    if (session?.profileid) {
        /* Set authorization flag. */
        hasAuth.value = true

        /* Stop polling. */
        if (pollingid) {
            clearInterval(pollingid)
        }

        /* Save session to profile. */
        Profile.saveSession(session)
    }

    /* Handle loading flag. */
    if (isLoading.value) {
        isLoading.value = false
    }
}

/* Setup API polling. */
// NOTE: ONLY RUN POLLING ON CLIENT
if (process.client) {
    pollForAuth()

    /* Initialize authorization polling. */
    // FIXME How can we implement WebSockets for more efficiency?
    pollingid = setInterval(pollForAuth, POLLING_FREQUENCY)
}

/**
 * Sign Out
 *
 * Deletes ALL stored values from the browsers (IndexedDB) cache.
 */
 const signOut = () => {
    Profile.deleteSession()
}

/* Handle mounting. */
onMounted(() => {
    console.log('MOUNTED!!!')
})
</script>

<template>
    <main class="px-3 max-w-5xl mx-auto">
        <div class="pt-10 flex justify-center">
            <h1 v-if="isLoading || hasAuth" class="text-3xl sm:text-5xl font-bold tracking-widest text-center">
                My Profile
            </h1>
            <h1 v-else class="text-3xl sm:text-5xl font-bold tracking-widest text-center">
                Authorization Required
            </h1>
        </div>

        <section v-if="isLoading" class="pt-10 py-10 flex justify-center">
            <h1 class="text-2xl">
                loading, please wait...
            </h1>
        </section>

        <div v-else>
            <section v-if="hasAuth" class="py-10 flex flex-col items-center gap-10">
                <p>
                    Nickname

                    [ {{nickname}} ]
                </p>

                <button @click="signOut" class="px-5 py-2 bg-red-500 text-xl text-red-50 font-medium border-4 border-red-700 rounded-md shadow-md hover:bg-red-600">
                    Sign Out
                </button>
            </section>

            <AuthView v-else />
        </div>
    </main>
</template>
