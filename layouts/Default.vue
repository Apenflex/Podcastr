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
    <main>
        <LeftSideBar />
        <slot />
        <div class="text-white-1">right side bar</div>
    </main>
</template>
