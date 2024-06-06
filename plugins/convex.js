import { createConvexVue } from '@convex-vue/core'

export default defineNuxtPlugin(nuxtApp => {
    console.log('Convex plugin is being loaded')
    nuxtApp.vueApp.use(createConvexVue({
        convexUrl: 'https://giant-gnu-820.convex.cloud'
    }))
})
