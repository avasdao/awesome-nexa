<script setup>
/* Import modules. */
import { ref } from 'vue'
import QRCode from 'qrcode'

const regString = `nexid://awesomenexa.org/_reg_/auto?op=reg&proto=http&chal=super_awesome_secret&cookie=833ea884-71a2-4bee-9cdf-45fe4c0350bb&hdl=r&email=o`

const qr = () => {
    let dataString

    dataString = regString

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
}
</script>

<template>
    <main class="px-3 max-w-5xl mx-auto">
        <div class="pt-10 flex justify-center">
            <h1 class="text-5xl font-bold tracking-widest">
                Authorization Page
            </h1>
        </div>

        <section class="py-10 flex flex-col items-center gap-10">
            <div class="" v-html="qr()" />

            <p>
                REGISTRATION

            </p>

            <p>
                LOGIN
                nexid://spec.nexa.org/_login_/auto?op=login&proto=http&chal=super_awesome_secret&cookie=833ea884-71a2-4bee-9cdf-45fe4c0350bb&hdl
            </p>
        </section>
    </main>
</template>
