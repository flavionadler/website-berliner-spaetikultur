<script setup lang="ts">
defineProps<{
	gap?: 'normal' | 'large'
	align?: 'start' | 'center'
}>()
</script>

<template>
	<div
		:class="[
			'grid grid-cols-1 lg:grid-cols-2 gap-10',
			align === 'center' ? 'items-center' : 'items-center'
		]">
		<div>
			<slot name="left" />
		</div>
		<div>
			<slot name="right" />
		</div>
	</div>
</template>

<style scoped>

</style>
