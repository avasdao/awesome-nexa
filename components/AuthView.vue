<script setup>
/* Import modules. */
// import moment from 'moment'
import QRCode from 'qrcode'

/* Initialize stores. */
import { useProfileStore } from '@/stores/profile'

/* Set constants. */
const NEXID_AUTH_ENDPOINT = 'nexid://awesomenexa.com/_auth'

/* Initialize (local) handlers. */
let authLink = ref(null)

/* Initialize Profile store. */
const Profile = useProfileStore()
console.log('SESSION ID', Profile.sessionid)
console.log('CHALLENGE', Profile.challenge)

// NOTE: We ONLY request Session from the Client.
if (!Profile.sessionid) {
    const session = await Profile.initSession()
    console.log('NEW SESSION (auth page):', session)
}

/**
 * QR Code
 *
 * Displays a QR code, used to authenticate users.
 */
const qr = computed(() => {
    /* Initialize data string. */
    let dataString

    /* Initialize (string) value. */
    let strValue = ''

    authLink.value = `${NEXID_AUTH_ENDPOINT}?op=reg&proto=http&chal=${Profile.challenge}&cookie=${Profile.sessionid}&hdl=r&email=o`
    console.log('CHALLENGE STRING', Profile.challenge)
    console.log('REG STRING', authLink.value)

    dataString = authLink.value

    /* Initialize scanner parameters. */
    const params = {
        type: 'svg',
        width: 300,
        height: 300,
        color: {
            dark: '#000',
            light: '#fff'
        }
    }

    QRCode.toString(dataString, params, (err, value) => {
        if (err) {
            return console.error('QR Code ERROR:', err) // eslint-disable-line no-console
        }

        /* Set (string) value. */
        strValue = value
    })

    /* Return (string) value. */
    return strValue
})
</script>

<template>
    <main class="px-3 max-w-5xl mx-auto">
        <section class="max-w-xl mx-auto mt-5 flex flex-col gap-4 items-center">
            <h3 class="px-10 text-lg font-medium text-center">
                If you're using the Wally mobile wallet, just click the button below
            </h3>

            <NuxtLink :to="authLink" class="px-5 py-2 flex justify-center bg-yellow-400 border-4 border-yellow-700 rounded-lg">
                <span class="text-lg text-yellow-900 font-medium">
                    Wally Wallet Login
                </span>
            </NuxtLink>
        </section>

        <div class="py-10 flex flex-col items-center gap-10">
            <p class="px-10 text-lg font-medium text-center">
                If you're using a Desktop browser, scan the Qr Code below with Wally wallet
            </p>

            <div class="mx-2 p-5 bg-gradient-to-r from-gray-700 to-gray-500 border-4 border-gray-700 rounded-lg">
                <div class="border-4 border-yellow-500 rounded-lg overflow-hidden" v-html="qr" />
            </div>

            <section class="max-w-xl px-5 py-2 bg-yellow-100 border-2 border-yellow-400 rounded-lg">
                <span class="text-yellow-700 text-sm font-medium uppercase">
                    Authorization Link
                </span>

                <span class="block font-bold">
                    <a :href="authLink" class="text-sm text-blue-500 hover:underline">
                        {{authLink}}
                    </a>
                </span>
            </section>

            <section class="max-w-xl px-5 py-2 bg-yellow-100 border-2 border-yellow-400 rounded-lg">
                <span class="text-yellow-700 text-sm font-medium uppercase">
                    Cookie / Session ID
                </span>

                <span class="block font-bold">
                    {{Profile.sessionid}}
                </span>
            </section>

            <section class="max-w-xl px-5 py-2 bg-yellow-100 border-2 border-yellow-400 rounded-lg">
                <span class="text-yellow-700 text-sm font-medium uppercase">
                    Auth Challenge
                </span>

                <span class="block font-bold">
                    {{Profile.challenge}}
                </span>
            </section>
        </div>
    </main>
</template>
