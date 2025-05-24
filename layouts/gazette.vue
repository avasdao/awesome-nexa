<script setup lang="ts">
useHead({
    title: 'GAZETTE — Awesome Nexa',
    meta: [
        { name: 'description', content: 'Everything that is awesome about Nexa, all in one place.' }
    ],
})

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
    <main class="px-3 max-w-5xl mx-auto">

        <header class="pt-10 flex flex-col items-center">
            <h1 class="text-3xl text-fuchsia-700 font-medium tracking-widest uppercase">
                The Awesome Nexa Gazette
            </h1>

            <h2 class="text-7xl font-bold text-stone-400 tracking-widest">
                <slot name="title">
                    Month
                </slot>
            </h2>
        </header>

        <div class="w-full px-5 sm:pt-7">
            <p class="text-2xl font-medium text-gray-500">
                <span class="inline-block relative -mr-2 text-7xl text-yellow-500">&ldquo;</span>
                <slot name="summary">
                    Enter a short summary here
                </slot>
                <span class="inline-block relative -mt-10 text-7xl text-yellow-500">&bdquo;</span>
            </p>
        </div>

        <section class="my-10 px-3 sm:px-10 flex flex-col items-center">
            <div class="flex flex-col gap-6 text-lg text-gray-500">
                <slot name="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum quod laudantium praesentium doloribus error qui natus neque, voluptates expedita deleniti modi ducimus sequi quaerat ipsa fugit. Fugit, corrupti ad.
                </slot>
            </div>
        </section>
    </main>
</template>
