<script setup lang="ts">
import {useRouter} from 'vue-router';
import { Motion } from "motion-v"

const props = defineProps<{
	title: string
	description: string
	image: string
	to: string
	reversed?: boolean
}>()

const router = useRouter();

function openDetail(): void {
	router.push({ name: props.to });
}
</script>

<template>
	<Motion
		:initial="{ opacity: 0, x: reversed ? 150 : -150 }"
		:while-in-view="{ opacity: 1, x: 0 }"
		:transition="{ duration: 0.6 }" >
		<article :class="[
			'group mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-yellow-500/40 hover:shadow-2xl',
			reversed ? 'md:flex-row-reverse' : 'md:flex-row',]">

			<div class="md:w-2/5 overflow-hidden">
				<img
					:src="props.image"
					:alt="title"
					class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full"/>
			</div>

			<div class="flex flex-1 flex-col justify-center p-8 md:p-10">
				<h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">
					{{ title }}
				</h2>

				<p class="mb-8 text-zinc-400 md:text-lg">
					{{ description }}
				</p>

				<button
					@click="openDetail"
					class="w-fit rounded-xl bg-yellow-500 px-5 py-3 font-medium text-black transition hover:bg-yellow-400">
					Mehr erfahren →
				</button>
			</div>
		</article>
	</Motion>
</template>
