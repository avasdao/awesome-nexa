// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'Awesome Nexa',
            meta: [
              { charset: 'utf-8' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              { hid: 'description', name: 'description', content: 'Everything that is awesome about Nexa, all in one place.' },
              { name: 'format-detection', content: 'telephone=no' }
            ],
            link: [
              { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
            ]
        }
    },

    modules: ['@nuxtjs/tailwindcss'],
})
