<script setup>
/* Import modules. */
import { ref } from 'vue'

/* Initialize stores. */
import { useProfileStore } from '@/stores/profile'

/* Initialize Profile store. */
const Profile = useProfileStore()

/* Initialize reactive holders. */
const summary = ref(null)
const title = ref(null)
const url = ref(null)

/**
 * Submit a Listing
 */
const submit = async () => {
    /* Build listing body. */
    const body = {
        session: Profile.session,
        title: title.value,
        url: url.value,
        summary: summary.value,
    }
    console.log('SUBMIT (body):', body)

    /* Submit to API. */
    const success = await $fetch('/api/submit', {
        method: 'POST',
        body,
    })
    console.log('SUBMIT (success):', success)

    alert('Thank you for your submission. We will review and add it to our Catalog shortly..')
}

</script>

<template>
    <main class="max-w-2xl px-3 max-w-5xl mx-auto">
        <div class="pt-10 flex justify-center">
            <h1 class="text-3xl sm:text-5xl font-bold tracking-widest text-center">
                Submit a New Listing
            </h1>
        </div>

        <section class="py-10 flex flex-col items-center gap-10">
            <p>
                We depend on the incredible efforts of the Nexa community to keep this Awesome List fresh with content.
                Please submit your favorite listing below.
            </p>

            <p>
                <h3 class="text-sm text-gray-500 font-medium uppercase">
                    Your profileid
                </h3>

                <NuxtLink to="/profile" class="block text-xl text-rose-500 font-medium">
                    <span v-if="Profile.session">
                        <span class="sm:hidden">
                            {{Profile.session?.profileid.slice(0, 17)}}
                            ...
                            {{Profile.session?.profileid.slice(-12)}}
                        </span>
                        <span class="hidden sm:inline">
                            {{Profile.session?.profileid}}
                        </span>
                    </span>

                    <span v-else class="">
                        Click here to signin
                    </span>
                </NuxtLink>
            </p>
        </section>

        <section class="flex flex-col gap-4">
            <div>
                <h3 class="px-2 py-1 text-xs text-gray-500 font-medium uppercase">
                    Listing Title
                </h3>

                <input
                    type="text"
                    class="w-full px-3 py-2 bg-yellow-100 border-2 border-yellow-300 rounded-lg shadow"
                    placeholder="Enter the listing title"
                    v-model="title"
                    :disabled="!Profile.session"
                    :class="{ 'cursor-not-allowed': Profile.session === null }"
                />
            </div>

            <div>
                <h3 class="px-2 py-1 text-xs text-gray-500 font-medium uppercase">
                    Listing URL
                </h3>

                <input
                    type="text"
                    class="w-full px-3 py-2 bg-yellow-100 border-2 border-yellow-300 rounded-lg shadow"
                    placeholder="Enter the listing URL"
                    v-model="url"
                    :disabled="!Profile.session"
                    :class="{ 'cursor-not-allowed': Profile.session === null }"
                />
            </div>

            <div>
                <h3 class="px-2 py-1 text-xs text-gray-500 font-medium uppercase">
                    Listing Summary
                </h3>

                <textarea
                    class="w-full px-3 py-2 bg-yellow-100 border-2 border-yellow-300 rounded-lg shadow"
                    placeholder="Please type a brief summary for this listing."
                    v-model="summary"
                    :disabled="!Profile.session"
                    :class="{ 'cursor-not-allowed': Profile.session === null }"
                />
            </div>

            <button
                @click="submit"
                class="my-5 px-5 py-2 bg-blue-300 border-2 border-blue-500 rounded-lg shadow"
                :disabled="!Profile.session"
                :class="{ 'cursor-not-allowed': Profile.session === null }"
            >
                <span class="text-xl font-medium">
                    Submit New Listing
                </span>
            </button>
        </section>
    </main>
</template>
