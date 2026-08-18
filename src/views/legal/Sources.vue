<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import PageContainer from '@/components/PageContainer.vue'
import ContentSection from '@/components/ContentSection.vue'

import heroImg from '@/assets/images/hero/home.jpeg'
</script>

<template>

	<HeroSection
		:image="heroImg"
		eyebrow="Dokumentation"
		title="Quellen"
		description="Deklaration der Herkunft der Informationen"
		scroll-target="#sources-content"
	/>

	<PageContainer id="sources-content">

		<ContentSection title="Literatur">
			<ul class="list-disc pl-6 space-y-2">
				<li>Unterlagen aus der DDR-Zeit (erhalten vom DDR Museum Berlin)</li>
			</ul>

		</ContentSection>

		<ContentSection title="Interviews">
			<ul class="list-disc pl-6 space-y-2">
				<li>Interview mit Herr Dr. Wolle, Historiker des DDR Museums</li>
				<li>Video-Interview mit Kaan Mirzanli, Besitzer vom Späti "Spätify" in Kreuzberg</li>
				<li>Interview mit einem Späti-Verkäufer in Alt-Moabit</li>
				<li>Gespräch mit Späti-Verkäufer in Prenzlauer Berg</li>
				<li>Strasseninterviews mit Kundinnen und Kunden verschiedener Spätis (Video und Gespräche)</li>
			</ul>
		</ContentSection>

		<ContentSection title="Bildmaterial">
			<p>
				Eigene Fotografien sowie Bildmaterial mit entsprechender Nutzungserlaubnis.
			</p>
		</ContentSection>

		<ContentSection title="Videos">
			<p>
				Die eingebundenen Videos stammen aus selbst durchgeführten Interviews und Aufnahmen im Rahmen dieses
				Projekts.
			</p>
		</ContentSection>

		<ContentSection title="Feldforschung / Eigene Erfahrungen">
			<p>
				Auf unserer Reise nach Berlin, haben wir natürlich viele eigene Erfahrungen gesammelt und viele spannende
				Dinge selbst herausgefunden. Diese Erkenntnisse geben wir selbstverständlich auch in unseren Texten wieder.
			</p>
		</ContentSection>

		<ContentSection title="Vollständiges Quellenverzeichnis">
			<p>
				Die auf dieser Website aufgeführten Quellen dienen lediglich als Übersicht. Das vollständige und
				detaillierte Quellenverzeichnis mit allen Literatur-, Internet-, Bild- und Interviewquellen ist in der
				schriftlichen Projektdokumentation zu finden.
			</p>
		</ContentSection>

	</PageContainer>

</template>
