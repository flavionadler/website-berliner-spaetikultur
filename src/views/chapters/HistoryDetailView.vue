<script setup lang="ts">

import HeroSection from '@/components/HeroSection.vue';
import heroImg from '@/assets/images/hero/spaeti.jpeg'; /* TODO: Other hero image */
</script>

<template>
	<HeroSection :image="heroImg" title="Geschichte" eyebrow="Ursürunge in der DDR"
	             description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam" />
</template>

<style scoped>

</style>
