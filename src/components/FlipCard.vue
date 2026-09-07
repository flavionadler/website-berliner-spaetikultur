<script setup lang="ts">
import { ref } from 'vue'

const isFlipped = ref(false)

function toggleFlip(): void {
	isFlipped.value = !isFlipped.value
}
</script>

<template>
	<div class="group w-full cursor-pointer perspective-[1000px]" @click="toggleFlip">
		<div class="transition-transform duration-300 group-hover:-translate-y-2">
			<div class="relative min-h-80 w-full transform-3d transition-transform duration-700" :class="{ 'transform-[rotateY(180deg)]': isFlipped }">
				<div class="absolute inset-0 flex flex-col rounded-3xl border border-zinc-700 bg-zinc-900 p-6 shadow-xl transition-all duration-300 group-hover:border-yellow-500/60 group-hover:shadow-[0_12px_40px_rgba(234,179,8,0.15)] backface-hidden">
					<div class="flex flex-1 items-center justify-center text-center">
						<slot name="front" />
					</div>

					<div class="flex items-center justify-center gap-2 text-xs text-zinc-500 transition-colors duration-300 group-hover:text-yellow-500">
						<span>Klicken zum Umdrehen</span>
						<span class="text-sm">↻</span>
					</div>
				</div>

				<div class="absolute inset-0 flex flex-col rounded-3xl border border-zinc-700 bg-zinc-900 p-6 shadow-xl transition-all duration-300 group-hover:border-yellow-500/60 group-hover:shadow-[0_12px_40px_rgba(234,179,8,0.15)] backface-hidden transform-[rotateY(180deg)]">
					<div class="flex flex-1 items-center justify-center text-center">
						<slot name="back" />
					</div>

					<div class="flex items-center justify-center gap-2 text-xs text-zinc-500 transition-colors duration-300 group-hover:text-yellow-500">
						<span>Klicken zum Zurückdrehen</span>
						<span class="text-sm">↻</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
