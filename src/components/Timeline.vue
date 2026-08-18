<script setup lang="ts">
export interface TimelineItem {
	year: string
	title: string
	text: string
	image?: string
}

defineProps<{
	items: TimelineItem[]
}>()
</script>

<template>
	<div class="relative">
		<div class="absolute left-4 top-0 h-full w-px bg-zinc-700 md:left-1/2 md:-translate-x-1/2" />
		<div v-for="(item, index) in items" :key="item.year" class="relative mb-16">
			<div :class="[
					'ml-12 md:ml-0 flex',
					index % 2 === 0
						? 'md:justify-start'
						: 'md:justify-end'
				]">
				<div class="w-full md:w-[46%] rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg">
					<p class="mb-2 text-yellow-400 font-bold tracking-wider">
						{{ item.year }}
					</p>

					<h3 class="mb-4 text-2xl font-bold">
						{{ item.title }}
					</h3>

					<p class="text-zinc-300 leading-7">
						{{ item.text }}
					</p>

					<img v-if="item.image" :src="item.image" :alt="item.title" class="mt-6 rounded-xl"/>
				</div>
			</div>
			<div class="absolute left-4 top-8 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-yellow-400 bg-zinc-950 md:left-1/2"/>
		</div>
	</div>
</template>
