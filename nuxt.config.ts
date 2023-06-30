// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // target: 'static',
    modules: ['@nuxt/content'],
    app: {
        head: {
            title: 'TJ GHI',
            meta: [
                {name: 'description', content: 'Club website for GHI'}
            ],
            link: [
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ]
        }
    },
})
