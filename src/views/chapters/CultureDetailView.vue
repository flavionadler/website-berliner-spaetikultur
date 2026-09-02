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
        Neben ihrer Funktion als Verkaufsstelle erfüllen Spätis in Berlin eine bedeutende soziale und kulturelle Rolle.
        Sie dienen als niedrigschwellige Begegnungsorte, an denen Menschen unterschiedlicher Altersgruppen,
        sozialer Hintergründe und kultureller Herkunft miteinander in Kontakt treten können.
        Während unserer Recherche konnten wir zahlreiche spontane Gespräche zwischen Kundinnen und Kunden
        sowie mit den Betreiberinnen und Betreibern beobachten.
        Die offene und kommunikative Atmosphäre fördert den zwischenmenschlichen Austausch und macht den Späti
        zu einem Ort des alltäglichen sozialen Miteinanders
			</p>
			<div class="flex aspect-video w-full items-center justify-center rounded-2xl bg-zinc-900 text-zinc-400 shadow-xl">
				Bild-Platzhalter
			</div>
			<p>
        Besonders deutlich wird diese Funktion in Stadtteilen,
        in denen Spätis über Sitzgelegenheiten im Aussenbereich verfügen.
        Diese werden häufig als Treffpunkte genutzt, an denen sich Nachbarinnen und Nachbarn begegnen
        oder Freundesgruppen nach der Arbeit oder der Universität gemeinsam Zeit verbringen.
        Dadurch übernehmen Spätis Aufgaben, die weit über den Verkauf von Waren hinausgehen.
        Sie leisten einen wichtigen Beitrag zum sozialen Leben im Kiez
        und fördern den informellen Austausch innerhalb der Nachbarschaft.
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
