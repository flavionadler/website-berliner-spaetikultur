<script setup lang="ts">
defineProps<{
	videoId: string
}>()
</script>

<template>

	<div class="overflow-hidden rounded-2xl shadow-xl">
		<iframe class="aspect-video w-full" :src="`https://www.youtube.com/embed/${videoId}`" allowfullscreen />
	</div>

</template>

<style scoped>

</style>
