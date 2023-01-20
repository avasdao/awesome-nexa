// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            // charset: 'utf-16',
            // viewport: 'width=500, initial-scale=1',
            title: 'Awesome Nexa — A Peer-to-Peer Digital Value System',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Everything that is awesome about Nexa, all in one place.' },
                { name: 'format-detection', content: 'telephone=no' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ],
            script: [
                { src: '/js/matomo.js' },
            ],
        },
    },

    modules: ['@nuxtjs/tailwindcss'],
})
