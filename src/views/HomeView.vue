<script setup lang="ts">
import ChapterCard from '@/components/ChapterCard.vue';
import HeroSection from '@/components/HeroSection.vue';
import {RouteNames} from '@/constants/enums.ts';

import heroImg from '@/assets/images/hero/home.jpeg'
import businessModelImg from '@/assets/images/hero/business-model.jpeg'
import historyImg from '@/assets/images/hero/history.jpg'
import cultureImg from '@/assets/images/hero/culture.jpeg'
import criticismImg from '@/assets/images/hero/criticism.jpg'
import ContentSection from '@/components/ContentSection.vue';
import PageContainer from '@/components/PageContainer.vue';

const chapters = [
	{
		title: 'Geschäftsmodell',
		description: 'Wie funktionieren Spätis? Wie rentabel ist dieses Geschäft? Diese Fragen und alles zum ' +
			'Geschäftsmodell der Spätis, werden in diesem Kapitel beantwortet.',
		image: businessModelImg,
		to: RouteNames.businessModel,
	},
	{
		title: 'Geschichte',
		description: 'Von den DDR-Spätverkaufsstellen bis zur heutigen Berliner Späti-Kultur.',
		image: historyImg,
		to: RouteNames.history,
	},
	{
		title: 'Kultur',
		description: 'Warum Spätis weit mehr als gewöhnliche Kioske sind.',
		image: cultureImg,
		to: RouteNames.culture,
	},
	{
		title: 'Kritik',
		description: 'Zwischen Nachbarschaft, Lärm und gesetzlichen Vorschriften.',
		image: criticismImg,
		to: RouteNames.criticism,
	},
]
</script>

<template>
	<HeroSection :image="heroImg" eyebrow="IDPA-Projekt" title="Spätis in Berlin"
	             subtitle="Ein Stück Alltagskultur"
	             description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
	             scroll-target="#home-content"/>
	<PageContainer id="home-content">
		<ContentSection>
			<p>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
				dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
				clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
				consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
				sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
				takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
				sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
				eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
				ipsum dolor sit amet.
			</p>
		</ContentSection>
		<div class="flex flex-col gap-12 p-6">
			<ChapterCard
				v-for="(chapter, index) in chapters"
				:key="chapter.to"
				v-bind="chapter"
				:reversed="index % 2 === 1"
			/>
		</div>
	</PageContainer>
</template>
