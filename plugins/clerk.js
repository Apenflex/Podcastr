import { clerkPlugin } from 'vue-clerk'

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    console.log('Clerk plugin is being loaded')
    nuxtApp.vueApp.use(clerkPlugin, {
        publishableKey: config.public.clerkPublishableKey
    })
})