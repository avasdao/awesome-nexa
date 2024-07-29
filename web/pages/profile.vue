<script setup>
/* Import modules. */


/* Initialize stores. */
import { useProfileStore } from '@/stores/profile'

/* Initialize constants. */
const POLLING_FREQUENCY = 3000 // 3 seconds

let pollingid

/* Initialize Profile store. */
const Profile = useProfileStore()

const nickname = ref(null)
const profile = ref(null)

const isLoading = ref(true)


const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

const pollForAuth = async () => {
    console.log('POLLING FOR AUTH')

    if (!Profile.sessionid) {
        /* Handle loading flag. */
        if (isLoading.value) {
            isLoading.value = false
        }

        return console.error('Oops! We DO NOT have an active Session.')
    }

    /* Set target. */
    const target = '/api/auth?sid=' + Profile.sessionid
    console.log('TARGET', target)

    const session = await $fetch(target)
    console.log('SESSION', session)

    /* Validate authorized session. */
    if (session?.profileid) {
        /* Scroll to page top. */
        scrollToTop()

        /* Stop polling. */
        if (pollingid) {
            clearInterval(pollingid)
        }

        /* Save session to profile. */
        Profile.saveSession(session)

        /* Set profile id. */
        const profileid = session?.profileid

        /* Request profile (details). */
        profile.value = await $fetch(`/v1/profile/${profileid}`)
            .catch(err => console.error(err))
        console.log('PROFILE', profile.value)

        /* Set nickname. */
        nickname.value = profile.value.nickname
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
 * Save (Profile)
 *
 * Update the user's profile information.
 */
 const save = async () => {
    if (!nickname.value) {
        return alert('Oops! You MUST provide a nickname to continue.')
    }

    const response = await $fetch('/api/profile', {
        method: 'POST',
        body: {
            sessionid: Profile.sessionid,
            nickname: nickname.value,
        },
    })
    .catch(err => console.error(err))
    console.log('RESPONSE', response)
}

/**
 * Sign Out
 *
 * Deletes ALL stored values from the browsers (IndexedDB) cache.
 */
 const signOut = () => {
    /* Delete ALL session data. */
    Profile.deleteSession()

    /* Initialize route handler. */
    const router = useRouter()

    /* Go to homepage. */
    router.replace('/')
}

/* Handle mounting. */
onMounted(() => {
    console.log('MOUNTED!!!')
})

onBeforeUnmount(() => {
    /* Stop polling. */
    if (pollingid) {
        clearInterval(pollingid)
    }
})
</script>

<template>
    <main class="px-3 max-w-5xl mx-auto">
        <div class="pt-10 flex justify-center">
            <h1 v-if="isLoading || Profile?.session?.profileid" class="text-3xl sm:text-5xl font-bold tracking-widest text-center">
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
            <section v-if="Profile?.session?.profileid" class="py-10 flex flex-col items-center gap-10">
                <p>
                    Customize your Ava's DAO profile here.
                </p>

                <input
                    type="text"
                    v-model="nickname"
                    class="px-3 py-4 w-full border-2 border-amber-300 bg-amber-100 text-2xl text-amber-800 placeholder:text-amber-500 font-medium rounded-xl shadow"
                    placeholder="Choose your nickname"
                />

                <p class="max-w-lg text-xl text-center">
                    While you wait for your Awesome profile page, please submit your favorite Nexa link.
                </p>

                <button @click="save" class="px-5 py-2 bg-lime-500 text-2xl text-lime-50 font-medium border-4 border-lime-700 rounded-md shadow-md hover:bg-lime-600">
                    Save My Profile
                </button>


                <button @click="signOut" class="px-20 py-5 bg-red-500 text-3xl text-red-50 font-medium border-4 border-red-700 rounded-md shadow-md hover:bg-red-600">
                    Sign Out
                </button>
            </section>

            <AuthView v-else />
        </div>
</main>
</template>
