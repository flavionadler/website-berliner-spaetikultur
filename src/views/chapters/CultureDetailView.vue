<script setup lang="ts">

import HeroSection from '@/components/HeroSection.vue';
import heroImg from '@/assets/images/hero/home.jpeg'; /* TODO: Other hero image */
</script>

<template>
	<HeroSection :image="heroImg" title="Kultur und Soziales" eyebrow="Spätis als Treffpunkte"
	             description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam" />
</template>

<style scoped>

</style>
