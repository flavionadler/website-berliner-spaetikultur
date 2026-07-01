<script setup lang="ts">

import HeroSection from '@/components/HeroSection.vue';
import heroImg from '@/assets/images/hero/home.jpeg' /* TODO: Other hero image */
</script>

<template>
	<HeroSection :image="heroImg" title="Kritik" eyebrow="Von Lärm bis hinzu Gewalt"
	             description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam" />
</template>

<style scoped>

</style>
