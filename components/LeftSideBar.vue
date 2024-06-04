<script setup>
const sideBarLinks = ref([
        {
            route: '/profile',
            label: 'Profile',
            imgUrl: '/icons/microphone.svg'
        },
        {
            route: '/home',
            label: 'Home',
            imgUrl: '/icons/home.svg'
        }
    ])
</script>
<template>
    <section class="left_sidebar">
        <nav class="flex flex-col gap-6">
            <NuxtLink
                to="/"
                class="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center"
                >
                <UnLazyImage
                    src="/icons/logo.svg"
                    alt="logo"
                    width="23"
                    height="27"
                />
                <h1 class="tex-24 font-extrabold text-white-1 max-lg:hidden">
                    Podcastr
                </h1>
            </NuxtLink>
            <NuxtLink 
                v-for="link in sideBarLinks"
                :key="link.route"
                :to="link.route"
            >
                {{ link.label }}
            </NuxtLink>
        </nav>
    </section>
</template>
