<script setup lang="ts">
defineProps<{
	title: string
	icon?: string
}>()
</script>

<template>
	<aside class="rounded-2xl border border-yellow-500/30 bg-zinc-900/80 p-6 shadow-lg">
		<div class="mb-5 flex items-center gap-3">
			<span v-if="icon" class="text-2xl">
				{{ icon }}
			</span>

			<h3 class="text-xl font-semibold text-yellow-400">
				{{ title }}
			</h3>
		</div>

		<div class="space-y-4 text-zinc-300">
			<slot />
		</div>
	</aside>
</template>

<style scoped>

</style>
