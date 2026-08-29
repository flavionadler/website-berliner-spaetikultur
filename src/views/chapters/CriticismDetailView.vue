<script setup lang="ts">

import HeroSection from '@/components/HeroSection.vue';
import heroImg from '@/assets/images/hero/criticism.jpg';
import PageContainer from "@/components/PageContainer.vue";
import ContentSection from "@/components/ContentSection.vue";
import SplitSection from '@/components/SplitSection.vue';
import QuoteBlock from '@/components/QuoteBlock.vue';
</script>

<template>
	<HeroSection :image="heroImg" title="Kritik" eyebrow="Von Lärm bis hinzu Gewalt"
	             description="Erfahren Sie, welchen rechtlichen, wirtschaftlichen und gesellschaftlichen Herausforderungen
	              Berliner Spätis begegnen und wie diese ihre Zukunft im Stadtbild beeinflussen."
	             scroll-target="#criticism-content" />

	<PageContainer id="criticism-content">
		<ContentSection>
			<p>Spätis sind seit Jahrzehnten ein fester Bestandteil des Berliner Stadtbildes.
				Für viele Bewohnerinnen und Bewohner gehören sie zum Alltag und bieten eine unkomplizierte Möglichkeit,
				auch ausserhalb regulärer Geschäftszeiten Lebensmittel, Getränke
				oder andere Produkte des täglichen Bedarfs zu erwerben.
				Trotz ihrer grossen Beliebtheit stehen Spätis jedoch vor verschiedenen
				rechtlichen, wirtschaftlichen und gesellschaftlichen Herausforderungen,
				welche ihre Zukunft und ihre Rolle im urbanen Raum beeinflussen.</p>
		</ContentSection>

		<ContentSection title="Rechtliche Schwierigkeiten">
			<p>
				Textblock: rechtliche Rahmenbedingungen
			</p>
			<p>
				Textblock: Ladenöffnungsgesetz und Sonn- und Feiertage
			</p>
			<SplitSection>
				<template #left>
					<p>
						Textblock: Mischbetriebe und Gassenschank
					</p>
				</template>
				<template #right>
					<div class="flex aspect-video w-full items-center justify-center rounded-2xl bg-zinc-900 text-zinc-400 shadow-xl">
						Bild-Platzhalter
					</div>
				</template>
			</SplitSection>
			<p>
				Textblock: Sitzmöglichkeiten, Sondernutzung und Lärm
			</p>
		</ContentSection>

		<ContentSection title="Ökologische Schwierigkeiten">
			<p>
				Textblock: Verschmutzung des öffentlichen Raums
			</p>
		</ContentSection>

		<ContentSection title="Wirtschaftliche Schwierigkeiten">
			<SplitSection>
				<template #left>
					<p>
						Textblock: Konkurrenz und wirtschaftliche Belastungen
					</p>
				</template>
				<template #right>
					<div class="flex aspect-video w-full items-center justify-center rounded-2xl bg-zinc-900 text-zinc-400 shadow-xl">
						Video-Platzhalter
					</div>
				</template>
			</SplitSection>
			<QuoteBlock
				quote="Interviewaussage zum Konkurrenzkampf – Platzhalter"
				author="Interviewperson – Platzhalter" />
			<p>
				Textblock: Betriebskosten und Preisentwicklung
			</p>
		</ContentSection>

		<ContentSection title="Zusammenfassend">
			<p>
				Textblock: Fazit zu den Schwierigkeiten von Spätis
			</p>
		</ContentSection>
	</PageContainer>
</template>

<style scoped>

</style>
