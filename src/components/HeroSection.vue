<script setup lang="ts">

defineProps<{
	image: string
	eyebrow?: string
	title: string
	subtitle?: string
	description?: string
	scrollTarget?: string
}>()
</script>

<template>
	<section class="relative h-screen overflow-hidden">
		<img
			:src="image"
			alt="Berliner Späti"
			class="absolute inset-0 h-full w-full object-cover" />

		<div class="absolute inset-0 bg-black/60"/>
		<div class="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
			<p v-if="eyebrow" class="mb-4 uppercase tracking-[0.4em] text-yellow-400">
				{{ eyebrow }}
			</p>

			<h1 class="max-w-5xl text-5xl font-bold text-white md:text-8xl">
				{{ title }}
			</h1>

			<p v-if="subtitle" class="mt-6 max-w-2xl text-lg text-zinc-300 md:text-2xl">
				{{ subtitle }}
			</p>

			<p v-if="description" class="mt-4 max-w-3xl text-zinc-400">
				{{ description }}
			</p>

			<a v-if="scrollTarget" :href="scrollTarget" class="mt-16 font-extrabold animate-bounce text-zinc-400 text-2xl">
				↓
			</a>
		</div>
	</section>
</template>
