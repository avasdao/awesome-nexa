<script setup lang="ts">
/* Initialize stores. */
import { useProfileStore } from '@/stores/profile'
import { useSystemStore } from '@/stores/system'
const Profile = useProfileStore()
const System = useSystemStore()

onBeforeMount(() => {
    // TODO Move this block to @nexajs/app
    try {
        Profile.$state = JSON.parse(localStorage.getItem('profile'), (key, value) => {
            if (typeof value === 'string' && /^\d+n$/.test(value)) {
                return BigInt(value.slice(0, value.length - 1))
            }
            return value
        })

        System.$state = JSON.parse(localStorage.getItem('system'), (key, value) => {
            if (typeof value === 'string' && /^\d+n$/.test(value)) {
                return BigInt(value.slice(0, value.length - 1))
            }
            return value
        })
    } catch (err) {
        console.error(err)
    }
})

// TODO Move this block to @nexajs/app
watch([Profile.$state, System.$state], (_state) => {
    localStorage.setItem('profile',
        JSON.stringify(_state[0], (key, value) =>
            typeof value === 'bigint' ? value.toString() + 'n' : value
        )
    )

    localStorage.setItem('system',
        JSON.stringify(_state[1], (key, value) =>
            typeof value === 'bigint' ? value.toString() + 'n' : value
        )
    )
})

onMounted(() => {
    console.info('Application is starting...')

    /* Initialize the (Application's) System. */
    System.init()
})

onBeforeUnmount(() => {
    console.info('Application is shutting down...')
})
</script>

<template>
    <!-- <Header /> -->

    <section class="h-48 flex justify-center items-center bg-sky-400">
        <h1 class="text-8xl font-light text-gray-700 tracking-widest italic">
            <slot name="title">Title</slot>
        </h1>
    </section>

    <div class="py-10 flex flex-col items-center gap-10">
        <p class="px-3 max-w-5xl mx-auto">
            <slot name="description">Description goes here...</slot>
        </p>
    </div>

    <slot />

    <!-- <Footer /> -->
</template>
