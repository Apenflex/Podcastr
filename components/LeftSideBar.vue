<script setup>
const route = useRoute()
// console.log(route.path)
const sideBarLinks = [
    {
        imgUrl: '/icons/home.svg',
        // Please generate your blurhash from https://blurha.sh/
        blurhash: 'L6PZfSi_.AyE_3t7t7R**0o#DgR4',
        route: '/',
        label: 'Home'
    },
    {
        imgUrl: '/icons/discover.svg',
        blurhash: 'L6PZfSi_.AyE_3t7t7R**0o#DgR4',
        route: '/discover',
        label: 'Discover'
    },
    {
        imgUrl: '/icons/microphone.svg',
        blurhash: 'L6PZfSi_.AyE_3t7t7R**0o#DgR4',
        route: '/create-podcast',
        label: 'Create Podcast'
    },
]

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
                    auto-sizes
                    blurhash="LKN]Rv%2Tw=w]~RBVZRi};RPxuwH"
                    :blurhash-ratio="2"
                />
                <div class="tex-24 font-extrabold text-white-1 max-lg:hidden">
                    Podcastr
                </div>
            </NuxtLink>
            <NuxtLink 
                v-for="link in sideBarLinks"
                :key="link.route"
                :to="link.route"
                :class="[
                    'flex gap-3 items-center py-4 mx-lg:px-4 justify-center lg:justify-start',
                    { 'bg-nav-focus border-r-4 border-orange-1': route.path === link.route }
                ]"
            >
                <UnLazyImage
                    :src="link.imgUrl"
                    :alt="link.label"
                    width="24"
                    height="24"
                    auto-sizes
                    :blurhash="link.blurhash"
                    :blurhash-ratio="2"
                />
                <p>{{ link.label }}</p>
            </NuxtLink>
        </nav>
    </section>
</template>
