<script setup lang="ts">

import HeroSection from '@/components/HeroSection.vue';
import heroImg from '@/assets/images/hero/criticism.jpg';
import PageContainer from "@/components/PageContainer.vue";
import ContentSection from "@/components/ContentSection.vue";
</script>

<template>
	<HeroSection :image="heroImg" title="Kritik" eyebrow="Von Lärm bis hinzu Gewalt"
	             description="Erfahren Sie, welchen rechtlichen, wirtschaftlichen und gesellschaftlichen Herausforderungen
	              Berliner Spätis begegnen und wie diese ihre Zukunft im Stadtbild beeinflussen." />

  <PageContainer>
    <ContentSection>
      <p>Spätis sind seit Jahrzehnten ein fester Bestandteil des Berliner Stadtbildes.
        Für viele Bewohnerinnen und Bewohner gehören sie zum Alltag und bieten eine unkomplizierte Möglichkeit,
        auch ausserhalb regulärer Geschäftszeiten Lebensmittel, Getränke
        oder andere Produkte des täglichen Bedarfs zu erwerben.
        Trotz ihrer grossen Beliebtheit stehen Spätis jedoch vor verschiedenen
        rechtlichen, wirtschaftlichen und gesellschaftlichen Herausforderungen,
        welche ihre Zukunft und ihre Rolle im urbanen Raum beeinflussen.</p>
    </ContentSection>
  </PageContainer>
</template>

<style scoped>

</style>
