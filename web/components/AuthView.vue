<script setup>
/* Import modules. */
import { ethers } from 'ethers'
import QRCode from 'qrcode'

/* Initialize stores. */
import { useProfileStore } from '@/stores/profile'

/* Set constants. */
const NEXID_ENDPOINT = 'nexid://awesomenexa.org/v1/auth'

/* Initialize (reactive) holders. */
let regLink = ref(null)

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

    regLink.value = `${NEXID_ENDPOINT}?op=reg&proto=http&chal=${Profile.challenge}&cookie=${Profile.sessionid}&hdl=r&email=o`
    console.log('CHALLENGE STRING', Profile.challenge)
    console.log('REG STRING', regLink.value)

    dataString = regLink.value

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


const web3Auth = async () => {
    /* Validate embedded Web3 objects. */
    if (!window.ethereum) {
        return console.error('No Web3 provider found.')
    }

    /* Connect accounts. */
    const accounts = await ethereum.request({
        method: 'eth_requestAccounts'
    })
    console.info('Connected Web3 accounts:', accounts)

    if (!accounts || accounts.length < 1) {
        return alert('Please connect your MetaMask account to continue.')
    }

    /* Initialize provider. */
    const provider = new ethers
        .providers
        .Web3Provider(window.ethereum, 'any')

    /* Set signer. */
    const signer = provider.getSigner()
    console.log('SIGNER', signer)
}

const testSign = async () => {
    console.log('test sign')

    /* Initialize provider. */
    const provider = new ethers
        .BrowserProvider(window.ethereum, 'any')
    console.log('PROVIDER', provider)

    /* Set signer. */
    const signer = await provider.getSigner()
    console.log('SIGNER', signer)

    // Our message
    const message = `Awesome Nexa Authorization

Your New Session ID is d572abee-b6e4-481c-b1b7-2369943c6411

Requested on Sun, Jul 28, 2024 @ 4:53:25 PM`

    // The raw signature; 65 bytes
    const rawSig = await signer.signMessage(message)
        .catch(err => {
            console.error(err)
            console.info('***TODO: HANDLE USER INTERACTION***')
        })
    console.log('rawSig', rawSig)
    // '0xa617d0558818c7a479d5063987981b59d6e619332ef52249be8243572ef1086807e381afe644d9bb56b213f6e08374c893db308ac1a5ae2bf8b33bcddcb0f76a1b'

    // Converting it to a Signature object provides more
    // flexibility, such as using it as a struct
    const sig = Signature.from(rawSig);
    console.log('sig', sig)
    // Signature { r: "0xa617d0558818c7a479d5063987981b59d6e619332ef52249be8243572ef10868", s: "0x07e381afe644d9bb56b213f6e08374c893db308ac1a5ae2bf8b33bcddcb0f76a", yParity: 0, networkV: null }


    // If the signature matches the EIP-2098 format, a Signature
    // can be passed as the struct value directly, since the
    // parser will pull out the matching struct keys from sig.
    const res1 = await contract.recoverStringFromCompact(message, sig);
    console.log('res1', res1)
    // '0x0A489345F9E9bc5254E18dd14fA7ECfDB2cE5f21'

    // Likewise, if the struct keys match an expanded signature
    // struct, it can also be passed as the struct value directly.
    const res2 = await contract.recoverStringFromExpanded(message, sig);
    console.log('res2', res2)
    // '0x0A489345F9E9bc5254E18dd14fA7ECfDB2cE5f21'

}

</script>

<template>
    <main class="px-3 max-w-5xl mx-auto">
        <div class="max-w-xl mx-auto mt-5 flex flex-col gap-4 items-center">
            <p class="px-10 text-sm font-medium text-center">
                If you're using the Wally mobile wallet, just click the link below
            </p>

            <div class="flex flex-row gap-4">
                <NuxtLink :to="regLink" class="px-5 py-2 flex justify-center bg-yellow-400 border-4 border-yellow-700 rounded-lg">
                    <span class="text-lg text-yellow-900 font-medium">
                        Wally Wallet Login
                    </span>
                </NuxtLink>

                <button @click="web3Auth" class="px-5 py-2 flex justify-center bg-yellow-400 border-4 border-yellow-700 rounded-lg">
                    <span class="text-lg text-yellow-900 font-medium">
                        MetaMask/Web3 Auth
                    </span>
                </button>

                <button @click="testSign">Test Sign</button>
            </div>
        </div>

        <div class="py-10 flex flex-col items-center gap-10">
            <p class="px-10 text-sm font-medium text-center">
                If you're using a Desktop browser, scan the Qr Code below with Wally wallet
            </p>

            <div class="mx-2 p-5 bg-gradient-to-r from-gray-700 to-gray-500 border-4 border-gray-700 rounded-lg">
                <div class="border-4 border-yellow-500 rounded-lg overflow-hidden" v-html="qr" />
            </div>

            <section class="max-w-xl px-5 py-2 bg-yellow-100 border-2 border-yellow-400 rounded-lg">
                <span class="text-yellow-700 text-sm font-medium uppercase">
                    Registration Link
                </span>

                <span class="block font-bold">
                    <a :href="regLink" class="text-sm text-blue-500 hover:underline">
                        {{regLink}}
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
