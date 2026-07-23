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
		title="Datenschutzerklärung"
		description="Informationen zum Datenschutz."
		scroll-target="#privacy-content"
	/>

	<PageContainer id="privacy-content">

		<ContentSection title="Datenerhebung">
			<p>
				Diese Website erhebt keine personenbezogenen Daten. Es werden keine Benutzerkonten angeboten und keine
				Formulare verarbeitet.
			</p>
		</ContentSection>

		<ContentSection title="Cookies">
			<p>
				Diese Website verwendet keine Cookies zur Analyse oder zum Tracking.
			</p>
		</ContentSection>

		<ContentSection title="Hosting">
			<p>
				Die Website wird über Cloudflare Pages bereitgestellt.
				Beim Aufruf können technische Daten (z.B. IP-Adresse oder Browserinformationen)
				durch den Hosting-Anbieter verarbeitet werden.
			</p>
		</ContentSection>

		<ContentSection title="Externe Inhalte">
			<p>
				Zur Veranschaulichung werden Videos über YouTube eingebunden.
				Beim Abspielen eines Videos gelten zusätzlich die Datenschutzbestimmungen von YouTube.
			</p>
		</ContentSection>

	</PageContainer>

</template>
