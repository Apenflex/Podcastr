import { createConvexVue } from '@convex-vue/core'

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    // console.log('Convex plugin is being loaded')
    nuxtApp.vueApp.use(createConvexVue({
        convexUrl: config.public.convexUrl
    }))
})
