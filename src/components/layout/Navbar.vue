<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { RouteNames } from '@/constants/enums'

const route = useRoute()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
	isScrolled.value = window.scrollY > 20
}

const closeMobileMenu = () => {
	isMobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
	isMobileMenuOpen.value = !isMobileMenuOpen.value
}

watch(
	() => route.fullPath,
	() => {
		closeMobileMenu()
	},
)

onMounted(() => {
	handleScroll()
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
	<header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
		:class="isScrolled || isMobileMenuOpen
			? 'bg-black/70 backdrop-blur-md border-b border-white/10'
			: 'bg-transparent border-b border-transparent'">

		<div class="relative z-50 mx-auto flex h-18 max-w-[1800px] items-center justify-between px-10">

			<RouterLink :to="{ name: RouteNames.home }"
				class="text-xl font-bold tracking-wide text-white drop-shadow-lg hover:text-yellow-400 transition"
				@click="closeMobileMenu">
				Berliner Spätis
			</RouterLink>

			<nav class="hidden md:flex gap-8">
				<RouterLink :to="{ name: RouteNames.businessModel }"
					class="text-zinc-100 drop-shadow-lg hover:text-yellow-400 transition">
					Geschäftsmodell
				</RouterLink>

				<RouterLink :to="{ name: RouteNames.history }"
					class="text-zinc-100 drop-shadow-lg hover:text-yellow-400 transition">
					Geschichte
				</RouterLink>

				<RouterLink :to="{ name: RouteNames.culture }"
					class="text-zinc-100 drop-shadow-lg hover:text-yellow-400 transition">
					Kultur
				</RouterLink>

				<RouterLink :to="{ name: RouteNames.criticism }"
					class="text-zinc-100 drop-shadow-lg hover:text-yellow-400 transition">
					Kritik
				</RouterLink>
			</nav>

			<button type="button"
				class="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-white/20 md:hidden"
				:aria-expanded="isMobileMenuOpen"
				aria-label="Navigation öffnen oder schließen"
				@click="toggleMobileMenu">

				<span class="sr-only">Navigation öffnen oder schließen</span>

				<span class="absolute h-0.5 w-5 rounded-full bg-white transition duration-300"
					:class="isMobileMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5'" />

				<span class="absolute h-0.5 w-5 rounded-full bg-white transition duration-300"
					:class="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'" />

				<span class="absolute h-0.5 w-5 rounded-full bg-white transition duration-300"
					:class="isMobileMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'" />
			</button>

		</div>

		<Transition enter-active-class="transition duration-300 ease-out"
			enter-from-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="transition duration-200 ease-in"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0">

			<div v-if="isMobileMenuOpen"
				class="fixed inset-0 z-40 flex min-h-screen flex-col items-center justify-center bg-black/85 px-8 backdrop-blur-xl md:hidden">

				<nav class="relative z-10 flex flex-col items-center gap-6 text-center">
					<RouterLink :to="{ name: RouteNames.businessModel }"
						class="group text-4xl font-black tracking-tight text-white transition hover:text-yellow-400"
						@click="closeMobileMenu">
						Geschäftsmodell
						<span class="mt-2 block h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
					</RouterLink>

					<RouterLink :to="{ name: RouteNames.history }"
						class="group text-4xl font-black tracking-tight text-white transition hover:text-yellow-400"
						@click="closeMobileMenu">
						Geschichte
						<span class="mt-2 block h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
					</RouterLink>

					<RouterLink :to="{ name: RouteNames.culture }"
						class="group text-4xl font-black tracking-tight text-white transition hover:text-yellow-400"
						@click="closeMobileMenu">
						Kultur
						<span class="mt-2 block h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
					</RouterLink>

					<RouterLink :to="{ name: RouteNames.criticism }"
						class="group text-4xl font-black tracking-tight text-white transition hover:text-yellow-400"
						@click="closeMobileMenu">
						Kritik
						<span class="mt-2 block h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
					</RouterLink>
				</nav>
			</div>
		</Transition>
	</header>
</template>

<style scoped>

</style>
