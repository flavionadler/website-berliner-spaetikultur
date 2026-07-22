<script setup lang="ts">
import { Motion } from "motion-v"

defineProps<{
	title?: string
	lead?: string
}>()
</script>

<template>
	<Motion
		:initial="{ opacity: 0, y: 40 }"
		:while-in-view="{ opacity: 1, y: 0 }"
		:transition="{ duration: 0.8 }" >
		<section>
			<h2 v-if="title" class="mb-4 text-4xl font-bold text-white">
				{{ title }}
			</h2>

			<p v-if="lead" class="mb-8 text-lg text-zinc-400">
				{{ lead }}
			</p>

			<div class="space-y-6 text-lg leading-8 text-zinc-300">
				<slot />
			</div>
		</section>
	</Motion>
</template>

<style scoped>

</style>
