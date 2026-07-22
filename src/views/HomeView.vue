<script setup lang="ts">
import ChapterCard from '@/components/ChapterCard.vue';
import HeroSection from '@/components/HeroSection.vue';
import {RouteNames} from '@/constants/enums.ts';

import heroImg from '@/assets/images/hero/home.jpeg'
import businessModelImg from '@/assets/images/placeholder.png'
import historyImg from '@/assets/images/placeholder.png'
import cultureImg from '@/assets/images/placeholder.png'
import criticismImg from '@/assets/images/placeholder.png'

const chapters = [
	{
		title: 'Geschäftsmodell',
		description: 'Wie funktionieren Spätis? Wie rentabel ist dieses Geschäft? Diese Fragen und alles zum ' +
			'Geschäftsmodell der Spätis, werden in diesem Kapitel beantwortet.',
		image: businessModelImg, /* TODO: Replace placeholder with suitable image - something about money? */
		to: RouteNames.businessModel,
	},
	{
		title: 'Geschichte',
		description: 'Von den DDR-Spätverkaufsstellen bis zur heutigen Berliner Späti-Kultur.',
		image: historyImg, /* TODO: Replace placeholder with suitable image - DDR related? Documents from Dr. Wolle? */
		to: RouteNames.history,
	},
	{
		title: 'Kultur',
		description: 'Warum Spätis weit mehr als gewöhnliche Kioske sind.',
		image: cultureImg, /* TODO: Replace placeholder with suitable image - benches/people in front of späti? */
		to: RouteNames.culture,
	},
	{
		title: 'Kritik',
		description: 'Zwischen Nachbarschaft, Lärm und gesetzlichen Vorschriften.',
		image: criticismImg, /* TODO: Replace placeholder with suitable image - police car passing by? */
		to: RouteNames.criticism,
	},
]
</script>

<template>
	<HeroSection :image="heroImg" eyebrow="IDPA-Projekt" title="Spätis in Berlin"
	             subtitle="Ein Stück Alltagskultur"
	             description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
	             scroll-target="#chapter-overview"/>
	<div class="flex flex-col gap-12 p-6" id="chapter-overview">
		<ChapterCard
			v-for="(chapter, index) in chapters"
			:key="chapter.to"
			v-bind="chapter"
			:reversed="index % 2 === 1"
		/>
	</div>
</template>
