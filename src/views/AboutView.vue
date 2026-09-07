<script setup lang="ts">

import HeroSection from '@/components/HeroSection.vue';
import heroImg from '@/assets/images/hero/home.jpeg';
import PageContainer from '@/components/PageContainer.vue';
import ContentSection from '@/components/ContentSection.vue';
</script>

<template>
	<HeroSection title="Über das Projekt" :image="heroImg" eyebrow="Über uns und das Projekt"
	             scroll-target="#about-content"/>
	<PageContainer id="about-content">
		<ContentSection title="Das Projekt">
			<p>Wir sind eine Gruppe Lernender in Informatik und Automation.
        Zusammenen haben wir ein halbes Jahr lang an dieser Webseite für unsere Interdisziplinäre Projektarbeit in der Schule gearbeitet.
        Viele aus dem Team waren schon in Berlin und staunten über die einzigartigen "Spätis". Zusammen haben
        wir uns für diese Leitfrage des Projekts entschieden:
      </p>

      <p>"Welche Rolle spielen Spätis als Geschäftsmodell, sozialer Treffpunkt und Bestandteil des Berliner Nachtlebens?"</p>

      <p>Mit unserem Projekt wollten wir genau das anschauen und das Konzept als Ganzes mit der Schweiz,
        unserem Heimatland, vetgleichen. Wir können mit voller Überzaugung sagen:</p>

      <p>Spätis sind mehr als nur Verkaufsstellen; sie sind ein erfolgreiches,
        flexibles Geschäftsmodell und zugleich soziale Treffpunkte,
        die als fester Bestandteil der Berliner Nacht- und Alltagskultur eine zentrale Rolle übernehmen.</p>
		</ContentSection>

		<ContentSection title="Vorgehen">
			<p>Um dieses Projekt in die Tat umzusetzen, sind wir zu viert nach Berlin gereist, wo wir dann
      mithilfe von Interviews, Expertegesprächen, Besuchen in Spätis, Videos und Fotos, Informationen rundum Spätis gesammelt haben. </p>

      <p>All unser Wissen haben wir dann in Form von Texten, Videos Und Bildern auf dieser Webseite dargestellt.</p>
		</ContentSection>

		<ContentSection title="Danksagungen">
			<p>Wir wollen uns bei allen bedanken, die uns beim Umsetzen dieses Projektes geholfen haben.
        Dazu gehören: Das DDR-Museum Berlin und dem Herrn Dr. Wolle,
        Kaan Mirzanl, dem Besit-zer des Spätify-Späti in Kreuzberg,
        dem Kiez Kiosk Alt-Moabit sowie den zahlreichen den Späti-Besitzern,
        Einwohnern und Touristen Berlins,
        die sich Zeit für unsere Fragen und Ge-spräche genommen haben. </p>
		</ContentSection>
	</PageContainer>
</template>

<style scoped>

</style>
