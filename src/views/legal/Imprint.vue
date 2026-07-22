<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import PageContainer from '@/components/PageContainer.vue'
import ContentSection from '@/components/ContentSection.vue'

import heroImg from '@/assets/images/hero/home.jpeg'
</script>

<template>

	<HeroSection
		:image="heroImg"
		eyebrow="Rechtliches"
		title="Impressum"
		description="Hier finden sie die Angaben zu diesem Schulprojekt"
		scroll-target="#imprint-content"
	/>

	<PageContainer id="imprint-content">

		<ContentSection title="Projekt">
			<p>
				Diese Website entstand im Rahmen einer IDPA (Interdisziplinäre Projektarbeit) an der Berufsfachschule
				Baden.
			</p>
		</ContentSection>

		<ContentSection title="Projektteam">
			<ul class="list-disc pl-6 space-y-2">
				<li>Flavio Nadler - <a href="mailto:f.nadler.inf23@stud.bbbaden.ch" class="text-yellow-400 underline underline-offset-4 transition hover:text-yellow-300">f.nadler.inf23@stud.bbbaden.ch</a></li>
				<li>Marko Akrap - <a href="mailto:m.akrap.inf23@stud.bbbaden.ch" class="text-yellow-400 underline underline-offset-4 transition hover:text-yellow-300">m.akrap.inf23@stud.bbbaden.ch</a></li>
				<li>Ramon Müller - <a href="mailto:r.mueller.mem23@stud.bbbaden.ch" class="text-yellow-400 underline underline-offset-4 transition hover:text-yellow-300">r.mueller.mem23@stud.bbbaden.ch</a></li>
				<li>Richard Heidecke - <a href="mailto:r.heidecke.mem23@stud.bbbaden.ch" class="text-yellow-400 underline underline-offset-4 transition hover:text-yellow-300">r.heidecke.mem23@stud.bbbaden.ch</a></li>
			</ul>
		</ContentSection>

		<ContentSection title="Kontakt">
			<p>
				Bei Fragen zu diesem Projekt wenden Sie sich bitte an die betreuende Lehrperson oder an eines der
				Projektmitglieder.
			</p>
		</ContentSection>

		<ContentSection title="Haftungsausschluss">
			<p>
				Diese Website wurde ausschliesslich zu Bildungszwecken erstellt.
				Trotz sorgfältiger Recherche übernehmen wir keine Gewähr für die Vollständigkeit,
				Richtigkeit oder Aktualität der Inhalte.
			</p>
		</ContentSection>

	</PageContainer>

</template>
