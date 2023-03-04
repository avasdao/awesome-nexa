<script setup>
/* Import modules. */
import { ref } from 'vue'

/* Initialize stores. */
import { useProfileStore } from '@/stores/profile'

/* Initialize Profile store. */
const Profile = useProfileStore()

/* Initialize reactive holders. */
const title = ref(null)

/**
 * Submit a Listing
 */
const submit = async () => {
    /* Build listing body. */
    const body = {
        session: Profile.session,
        title: title.value,
    }
    console.log('SUBMIT (body):', body)

    /* Submit to API. */
    const success = await $fetch('/api/submit', {
        method: 'POST',
        body,
    })
    console.log('SUBMIT (success):', success)
}

</script>

<template>
    <main class="px-3 max-w-5xl mx-auto">
        <div class="pt-10 flex justify-center">
            <h1 class="text-5xl font-bold tracking-widest">
                Submit a New Listing
            </h1>
        </div>

        <section class="py-10 flex flex-col items-center gap-10">
            <p>
                We need your help to keep this Awesome List fresh with content.
                Submit your listings below.
            </p>
        </section>

        <section class="flex flex-col">
            <h3 class="px-2 py-1 text-xs text-gray-500 font-medium uppercase">
                Listing Title
            </h3>

            <input
                type="text"
                class="px-3 py-2 bg-yellow-100 border-2 border-yellow-300 rounded-lg shadow"
                placeholder="Enter the listing title"
                v-model="title"
            />

            <button
                @click="submit"
                class="my-5 px-5 py-2 bg-blue-300 border-2 border-blue-500 rounded-lg shadow"
            >
                <span class="text-xl font-medium">
                    Submit New Listing
                </span>
            </button>
        </section>
    </main>
</template>
