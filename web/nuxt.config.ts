// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    /* Application Settings */
    app: {
        /* Application Header */
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

    /* Modules */
    modules: [
        /* Tailwind CSS */
        '@nuxtjs/tailwindcss',
    ],

    /* Route Rules */
    routeRules: {
        /* Disable server-side rendering for Admin area. */
        '/admin/**': { ssr: false },

        /* Add CORS headers to API. */
        '/api/v1/**': { cors: true },
    },
})
