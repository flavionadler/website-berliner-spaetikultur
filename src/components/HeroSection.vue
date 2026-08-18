<script setup lang="ts">

const props = defineProps<{
	image: string
	eyebrow?: string
	title: string
	subtitle?: string
	description?: string
	scrollTarget?: string
}>()

function scrollToTarget(): void {
	if (!props.scrollTarget) {
		return
	}

	const element = document.querySelector(props.scrollTarget)

	element?.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
	})
}
</script>

<template>
	<section class="relative h-screen overflow-hidden">
		<img
			:src="image"
			alt="Berliner Späti"
			class="absolute inset-0 h-full w-full object-cover" />

		<div class="absolute inset-0 bg-black/60"/>
		<div class="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
			<p v-if="eyebrow" class="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-yellow-400 sm:text-sm sm:tracking-[0.3em] md:text-base md:tracking-[0.4em]">
				{{ eyebrow }}
			</p>

			<h1 class="max-w-5xl text-4xl font-bold text-white sm:text-5xl md:text-8xl">
				{{ title }}
			</h1>

			<p v-if="subtitle" class="mt-6 max-w-2xl text-lg text-zinc-300 md:text-2xl">
				{{ subtitle }}
			</p>

			<p v-if="description" class="mt-4 max-w-3xl text-zinc-400">
				{{ description }}
			</p>

			<button
				v-if="scrollTarget"
				type="button"
				@click="scrollToTarget"
				class="mt-16 flex h-16 w-16 items-center justify-center text-5xl font-black text-zinc-300 animate-bounce transition hover:text-yellow-400">
				↓
			</button>
		</div>
	</section>
</template>
