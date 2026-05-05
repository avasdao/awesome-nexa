// nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    /* Application Settings */
    app: {
        /* Application Header */
        head: {
            title: 'Awesome Nexa — Everything Nexa, One Source',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: `A curated list of TOP resources actively supporting the Nexa blockchain and its growing ecosystem.` },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'theme-color', content: '#518c96' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ],
            htmlAttrs: { lang: 'en' },
        },
    },

    /* Progressive Web Application Settings */
    vitePwa: {
        registerType: 'autoUpdate',
        manifest: {
            name: 'Awesome Nexa — Everything Nexa, One Source',
            short_name: 'Awesome Nexa',
            description: `A curated list of TOP resources actively supporting the Nexa blockchain and its growing ecosystem.`,
            lang: 'en',
            theme_color: '#518c96',
            background_color: '#518c96',
            // useWebmanifestExtension: false,
        },
        // icon: false, // disables the icon module
        workbox: {
            // workboxURL: 'TBD',
            // enabled: true, // FOR DEV PURPOSES ONLY
            navigateFallback: '/',
            globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
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
        '@vite-pwa/nuxt',
    ],

    /* Set compatibility date. */
    compatibilityDate: '2025-05-05',
})
