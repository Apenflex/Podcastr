<script setup>
defineProps({
    podcastData: {
        type: Object,
        default: () => {}
    }
})
</script>
<template>
    <figure class="flex flex-col gap-2 cursor-pointer">
        <UnLazyImage
            :src="podcastData.imgURL"
            :alt="podcastData.title"
            width="174"
            height="174"
            auto-sizes
            class="aspect-square h-fit w-full rounded-2xl 2xl:size-[200px]"
        />
        <div class="flex flex-col">
            <div class="text-16 text-white-1 truncate font-bold">
                {{ podcastData.title }}
            </div>
            <div class="text-12 truncate text-white-4">
                {{ podcastData.description }}
            </div>
        </div>
    </figure>
</template>
