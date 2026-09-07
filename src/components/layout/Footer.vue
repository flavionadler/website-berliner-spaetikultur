<script setup lang="ts">
import {RouteNames} from '@/constants/enums.ts';
import logo from '@/assets/images/spaetis-berlin_logo.png';
</script>

<template>
	<footer class="border-t border-white/10 bg-black/20 backdrop-blur-sm">
		<div
			class="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 lg:flex-row lg:items-start lg:justify-between">

			<div class="text-center lg:text-left">
				<img :src="logo" alt="Berliner Spätis" class="mx-auto h-20 w-auto lg:mx-0"/>

				<RouterLink class="mt-3 inline-block max-w-md text-sm leading-7 text-zinc-400 underline lg:text-base" :to="{ name: RouteNames.about }">
					Erfahren Sie mehr!
				</RouterLink>
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
