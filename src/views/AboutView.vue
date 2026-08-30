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
			<p>Beschreibung was das Projekt ist, warum gwählt, Leitfrage, These und Beantwortung</p>
		</ContentSection>

		<ContentSection title="Vorgehen">
			<p>Beschreibung des Vorgehen, Reise nach Berlin usw.</p>
		</ContentSection>

		<ContentSection title="Danksagungen">
			<p>Danke an alle Interviewpartner</p>
		</ContentSection>
	</PageContainer>
</template>

<style scoped>

</style>
