// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    /* Application Settings */
    app: {
        /* Application Header */
        head: {
            title: 'Awesome Nexa — Building Bitcoin 3.0',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: `A curated list of TOP resources actively supporting the Nexa blockchain and its growing ecosystem.` },
                { name: 'format-detection', content: 'telephone=no' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ],
            script: [
                { src: 'https://scripts.simpleanalyticscdn.com/latest.js' },
            ],
        },
    },

    /* Progressive Web Application Settings */
    pwa: {
        manifest: {
            name: 'Awesome Nexa — Building Bitcoin 3.0',
            short_name: 'Awesome Nexa',
            description: `A curated list of TOP resources actively supporting the Nexa blockchain and its growing ecosystem.`,
            lang: 'en',
            theme_color: '#518c96',
            background_color: '#518c96',
            // useWebmanifestExtension: false,
        },
        meta: {
            name: 'Awesome Nexa — Building Bitcoin 3.0',
            description: `A curated list of TOP resources actively supporting the Nexa blockchain and its growing ecosystem.`,
            author: `Nexa contributors`,
        },
        // icon: false, // disables the icon module
        workbox: {
            // workboxURL: 'TBD',
            // enabled: true, // FOR DEV PURPOSES ONLY
        },
    },

    /* Application Modules */
    modules: [
        /* Tailwind CSS */
        '@nuxtjs/tailwindcss',

        /* Pinia */
        '@pinia/nuxt',

        /* Internationalization for Nuxt */
        '@nuxtjs/i18n',

        /* Progressive Web Application */
        '@kevinmarrec/nuxt-pwa',
    ],

    /* Route Rules */
    routeRules: {
        /* Disable server-side rendering for Admin area. */
        '/admin/**': { ssr: false },

        /* Add CORS headers to API. */
        '/v1/**': { cors: true },

        /* Pre-rendered (dynamic) routes. */
        '/v1/listings/apps.json': { prerender: true },
        '/v1/listings/builders.json': { prerender: true },
        '/v1/listings/cex.json': { prerender: true },
        '/v1/listings/daos.json': { prerender: true },
        '/v1/listings/defi.json': { prerender: true },
        '/v1/listings/dex.json': { prerender: true },
        '/v1/listings/gaming.json': { prerender: true },
        '/v1/listings/media.json': { prerender: true },
        '/v1/listings/merchants.json': { prerender: true },
        '/v1/listings/mining.json': { prerender: true },
        '/v1/listings/nfts.json': { prerender: true },
        '/v1/listings/references.json': { prerender: true },
        '/v1/listings/tooling.json': { prerender: true },
        '/v1/listings/wallets.json': { prerender: true },
    },

    /* Set compatibility date. */
    compatibilityDate: '2024-07-26',
})
