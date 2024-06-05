<script setup>
useHead({
    title: 'Podcastr',
    meta: [
        {
            name: 'description',
            content: 'Generate your podcast using AI'
        }
    ]
})
</script>
<template>
    <div class="relative flex flex-col">
        <main class="relative flex bg-black-3">
            <LeftSideBar />
            <section class="flex min-h-screen flex-1 flex-col px-4 sm:px-14">
                <div class="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
                    <div class="flex h-16 items-center justify-between md:hidden">
                        <UnLazyImage 
                            src="/icons/logo.svg"
                            alt="menu icon"
                            width="30"
                            height="30"
                            auto-sizes
                        />
                        <MobileNav />
                    </div>
                    <div class="flex flex-col md:pb-14">
                        Toaster
                        <slot />
                    </div>
                </div>
            </section>
            <RightSideBar />
        </main>
    </div>
</template>
