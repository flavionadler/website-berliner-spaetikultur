<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue';
import heroImg from '@/assets/images/hero/culture.jpeg';
import PageContainer from '@/components/PageContainer.vue';
import ContentSection from '@/components/ContentSection.vue';
import SplitSection from '@/components/SplitSection.vue';
import QuoteBlock from '@/components/QuoteBlock.vue';
</script>

<template>
	<HeroSection :image="heroImg" title="Kultur und Soziales" eyebrow="Spätis als Treffpunkte"
	             description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
	             scroll-target="#culture-content" />
	<PageContainer id="culture-content">
		<ContentSection>
			<p>
				Textblock: soziale Funktion der Spätis
			</p>
			<div class="flex aspect-video w-full items-center justify-center rounded-2xl bg-zinc-900 text-zinc-400 shadow-xl">
				Bild-Platzhalter
			</div>
			<p>
				Textblock: Späti als Treffpunkt
			</p>
		</ContentSection>

		<ContentSection title="Bedeutung">
			<SplitSection>
				<template #left>
					<div class="space-y-6">
						<p>
							Textblock: kulturelle Bedeutung der Spätis
						</p>
						<p>
							Textblock: Spätis im Berliner Nachtleben
						</p>
					</div>
				</template>
				<template #right>
					<div class="flex aspect-video w-full items-center justify-center rounded-2xl bg-zinc-900 text-zinc-400 shadow-xl">
						Video-Platzhalter
					</div>
				</template>
			</SplitSection>
		</ContentSection>

		<ContentSection title="Meinung">
			<SplitSection>
				<template #left>
					<p>
						Textblock: Wahrnehmung durch Besucher und Vergleich mit der Schweiz
					</p>
				</template>
				<template #right>
					<QuoteBlock
						quote="Zitat aus Interview – Platzhalter"
						author="Interviewperson – Platzhalter" />
				</template>
			</SplitSection>
			<p>
				Textblock: Fazit zur sozialen und kulturellen Bedeutung
			</p>
		</ContentSection>
	</PageContainer>
</template>

<style scoped>

</style>
