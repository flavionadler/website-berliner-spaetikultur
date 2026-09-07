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
				<li>Video-Interview mit Herr Dr. Wolle, Historiker des DDR Museums</li>
				<li>Video-Interview mit Kaan Mirzanli, Besitzer vom Späti "Spätify" in Kreuzberg</li>
				<li>Interview mit einem Späti-Verkäufer in Alt-Moabit</li>
				<li>Gespräch mit Späti-Verkäufer in Prenzlauer Berg</li>
				<li>Strasseninterviews mit Kundinnen und Kunden verschiedener Spätis (Video und Gespräche)</li>
			</ul>
		</ContentSection>

    <ContentSection title="Bildmaterial">
      <ul class="list-disc pl-6 space-y-2">
        <li>
          Abb. 1. Unbekannter Fotograf (1989). <i>West and East Germans at the Brandenburg Gate in 1989</i>. Reproduktion durch Lear 21. Abgerufen am 07.09.2026 von https://commons.wikimedia.org/wiki/File:West_and_East_Germans_at_the_Brandenburg_Gate_in_1989.jpg
        </li>

        <li>
          Abb. 2. ChickSR (2021). <i>Internetcafe Nightstore</i>. Abgerufen am 07.09.2026 von https://commons.wikimedia.org/wiki/File:Internetcafe_Nightstore.jpg
        </li>

        <li>
          Abb. 3. Sturm, H. (1953). <i>Berlin, Elektro-Apparate-Werke Treptow, Konsum-Betriebs-Verkaufsstelle</i>. Abgerufen am 07.09.2026 von https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_183-22562-0011,_Berlin,_Elektro-Apparate-Werke_Treptow,_Konsum-Betriebs-Verkaufsstelle.jpg
        </li>

        <li>
          Abb. 4. Thurn, J. F. (1991). <i>Staßfurt, Konsum-Verkaufsstelle</i>. Abgerufen am 07.09.2026 von https://commons.wikimedia.org/wiki/File:Bundesarchiv_B_145_Bild-F089042-0034,_Sta%C3%9Ffurt,_Konsum-Verkaufsstelle.jpg
        </li>

        <li>
          Abb. 5. Bundesarchiv (o.J.). <i>Bild 183-61523-0002</i>. Abgerufen am 07.09.2026 von https://www.bild.bundesarchiv.de/dba/de/search/?yearfrom=&yearto=&query=183-61523-0002
        </li>

        <li>
          Abb. 6. Desjardins, F. (o.J.). <i>Monochrome photo showcasing littered bottles and trash highlighting pollution</i>. Abgerufen am 07.09.2026 von https://www.pexels.com/photo/a-grayscale-photo-of-empty-bottles-and-trash-8275505/
        </li>

        <li>
          Abb. 7. Pixabay (o.J.). <i>Close-up of a police car's flashing blue lights in an urban environment</i>. Abgerufen am 07.09.2026 von https://www.pexels.com/photo/vehicle-blue-emergency-light-turned-on-532001/
        </li>

        <li>
          Abb. 8. Senn, S. (2008). <i>Kanton Aargau auf der Schweizer Karte</i>. Abgerufen am 07.09.2026 von https://commons.wikimedia.org/wiki/File:Kanton_Aargau_auf_der_Schweizer_Karte.png
        </li>

        <li>
          Abb. 9. Leonardi, S. (o.J.). <i>Luftaufnahme der Schweizer Flagge über Luzern</i>. Abgerufen am 07.09.2026 von https://www.pexels.com/de-de/foto/stadt-see-reise-reisen-18558698/
        </li>
      </ul>
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
