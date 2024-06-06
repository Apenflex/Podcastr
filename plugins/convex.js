import { createConvexVue } from '@convex-vue/core'

// const config = useRuntimeConfig()

export default defineNuxtPlugin(nuxtApp => {
    console.log('Convex plugin is being loaded')
    nuxtApp.vueApp.use(createConvexVue({
        // convexUrl: 'https://giant-gnu-820.convex.cloud'
        convexUrl: process.env.CONVEX_URL
    }))
})
