// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    runtimeConfig: {
        public: {
            appHost: process.env.APP_HOST
        }
    },
    app: {
        head: {
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon/favicon.ico'
                }
                // {
                //     rel: 'apple-touch-icon',
                //     type: 'image/png',
                //     sizes: '180x180',
                //     href: '/favicon/apple-touch-icon.png'
                // },
                // {
                //     rel: 'android-icon-192x192',
                //     type: 'image/png',
                //     sizes: '192x192',
                //     href: '/favicon/android-icon-192x192.png'
                // },
                // {
                //     rel: 'icon',
                //     type: 'image/png',
                //     sizes: '32x32',
                //     href: '/favicon/favicon-32x32.png'
                // },
                // {
                //     rel: 'icon',
                //     type: 'image/png',
                //     sizes: '16x16',
                //     href: '/favicon/favicon-16x16.png'
                // }
                // {
                //     rel: 'manifest',
                //     href: '/favicon/site.webmanifest'
                // }
            ],
            htmlAttrs: {
                lang: 'en'
            },
            script: []
        }
    },
    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ],
    css: ['~/assets/css/globals.css'],
    modules: [
        'nuxt-icon',
        '@unlazy/nuxt',
        '@nuxt/fonts',
        'shadcn-nuxt',
        '@nuxtjs/tailwindcss',
        "@nuxt/image"
    ],
    $production: {
        nitro: {
            // preset: 'vercel',
            // routeRules: {
            //     '/': {
            //         swr: 3600,
            //         headers: { 'cache-control': 's-maxage=86400' }
            //     },
            //     '/**': {
            //         swr: 3600,
            //         headers: { 'cache-control': 's-maxage=86400' }
            //     },
            //     '/**/**': {
            //         swr: 3600,
            //         headers: { 'cache-control': 's-maxage=86400' }
            //     }
            // },
            compressPublicAssets: true
        }
    },
    $development: {}
})