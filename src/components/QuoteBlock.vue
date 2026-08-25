<script setup lang="ts">
import {Motion} from 'motion-v';

defineProps<{
	quote: string
	author: string
	source?: string
}>()
</script>

<template>
	<Motion
		:initial="{ opacity: 0, x: -150 }"
		:while-in-view="{ opacity: 1, x: 0 }"
		:transition="{ duration: 0.6 }" >
		<blockquote class="my-8 rounded-xl border-l-4 border-yellow-400 bg-zinc-900/60 px-6 py-4">
			<p class="text-lg italic leading-7 text-zinc-100">
				"{{ quote }}"
			</p>

			<footer class="mt-3 text-sm text-zinc-400">
			<span class="font-medium text-zinc-200">
				{{ author }}
			</span>

				<span v-if="source">
				· {{ source }}
			</span>
			</footer>
		</blockquote>
	</Motion>
</template>

<style scoped>

</style>
