<script setup>
/* Import modules. */
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import QRCode from 'qrcode'
import { v4 as uuidv4 } from 'uuid'

import { useProfileStore } from '@/stores/profile'

/* Initialize Profile store. */
const Profile = useProfileStore()

let session

/* Initialize session (holder). */
// let session
const { sessionid, challenge } = storeToRefs(Profile)
console.log('SESSION ID', sessionid.value)
console.log('CHALLENGE', challenge.value)

let regString = ref(null)

// NOTE: We ONLY request Session from the Client.
if (!sessionid.value) {
    session = await Profile.initSession()
    console.log('NEW SESSION (auth page):', session)
}

/* Set constants. */
const LOGIN_ENDPOINT = 'nexid://awesomenexa.org/_login_/auto'
const REGISTRATION_ENDPOINT = 'nexid://awesomenexa.org/_reg_/auto'

const signOut = () => {
    Profile.deleteSession()
}

const qr = computed(() => {
    let dataString

    regString.value = `${REGISTRATION_ENDPOINT}?op=login&proto=http&chal=${Profile.challenge}&cookie=${sessionid.value}&hdl=r&email=o`
    console.log('CHALLENGE STRING', Profile.challenge)
    console.log('REG STRING', regString.value)

    dataString = regString.value

    /* Initialize (string) value. */
    let strValue = ''

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
        <div class="pt-10 flex justify-center">
            <h1 class="text-5xl font-bold tracking-widest">
                Authorization Page
            </h1>
        </div>

        <section class="py-10 flex flex-col items-center gap-10">
            <div class="" v-html="qr" />

            <p>
                SESSION ID
                [{{sessionid}}]

            </p>

            <p>
                COOKIE
                {{Profile.sessionid}}
            </p>

            <p>
                CHALLENGE
                {{Profile.challenge}}
            </p>

            <p>
                LOGIN
                nexid://spec.nexa.org/_login_/auto?op=login&proto=http&chal=super_awesome_secret&cookie=833ea884-71a2-4bee-9cdf-45fe4c0350bb&hdl
            </p>

            <button @click="signOut">
                Sign Out
            </button>
        </section>
    </main>
</template>
