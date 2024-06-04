<script setup>
const route = useRoute()
if(!route.params.podcastId){
    throw createError({
		statusCode: 404,
		fatal: true,
		statusMessage: 'Page Not Found'
	})
}
</script>
<template>
    <div class="text-white-1">podcast page id {{ route.params.podcastId }}</div>
</template>
