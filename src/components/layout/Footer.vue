<script setup lang="ts">
import {RouteNames} from '@/constants/enums.ts';
</script>

<template>
	<footer class="border-t border-white/10 bg-black/20 backdrop-blur-sm">
		<div
			class="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 lg:flex-row lg:items-start lg:justify-between">

			<div class="text-center lg:text-left">
				<h3 class="text-2xl font-bold text-white">
					Berliner Spätis
				</h3>

				<p class="mt-3 max-w-md text-sm leading-7 text-zinc-400 lg:text-base">
					IDPA-Projekt über die Berliner Späti-Kultur.
				</p>
			</div>

			<nav
				class="flex flex-col items-center gap-3 text-sm text-zinc-400 lg:items-end lg:text-base">

				<RouterLink :to="{ name: RouteNames.imprint }"
					class="transition hover:text-yellow-400">
					Impressum
				</RouterLink>

				<RouterLink :to="{ name: RouteNames.privacy }"
					class="transition hover:text-yellow-400">
					Datenschutz
				</RouterLink>

				<RouterLink :to="{ name: RouteNames.sources }"
					class="transition hover:text-yellow-400">
					Quellen
				</RouterLink>

			</nav>

		</div>

		<div
			class="border-t border-white/10 px-6 py-6 text-center text-xs leading-6 text-zinc-500 sm:text-sm">

			<p>© 2026 - Berliner Spätis</p>

			<p class="mt-1">
				Flavio Nadler · Marko Akrap · Ramon Müller · Richard Heidecke
			</p>

		</div>
	</footer>
</template>
