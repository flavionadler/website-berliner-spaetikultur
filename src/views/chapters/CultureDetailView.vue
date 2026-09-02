<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue';
import heroImg from '@/assets/images/hero/culture.jpeg';
import PageContainer from '@/components/PageContainer.vue';
import ContentSection from '@/components/ContentSection.vue';
import SplitSection from '@/components/SplitSection.vue';
import QuoteBlock from '@/components/QuoteBlock.vue';
</script>

<template>
	<HeroSection :image="heroImg" title="Kultur und Soziales" eyebrow="Spätis als Treffpunkte"
	             description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
	             scroll-target="#culture-content" />
	<PageContainer id="culture-content">
		<ContentSection>
			<p>
        Neben ihrer Funktion als Verkaufsstelle erfüllen Spätis in Berlin eine bedeutende soziale und kulturelle Rolle.
        Sie dienen als niedrigschwellige Begegnungsorte, an denen Menschen unterschiedlicher Altersgruppen,
        sozialer Hintergründe und kultureller Herkunft miteinander in Kontakt treten können.
        Während unserer Recherche konnten wir zahlreiche spontane Gespräche zwischen Kundinnen und Kunden
        sowie mit den Betreiberinnen und Betreibern beobachten.
        Die offene und kommunikative Atmosphäre fördert den zwischenmenschlichen Austausch und macht den Späti
        zu einem Ort des alltäglichen sozialen Miteinanders.
			</p>
			<div class="flex aspect-video w-full items-center justify-center rounded-2xl bg-zinc-900 text-zinc-400 shadow-xl">
				Bild-Platzhalter
			</div>
			<p>
        Besonders deutlich wird diese Funktion in Stadtteilen,
        in denen Spätis über Sitzgelegenheiten im Aussenbereich verfügen.
        Diese werden häufig als Treffpunkte genutzt, an denen sich Nachbarinnen und Nachbarn begegnen
        oder Freundesgruppen nach der Arbeit oder der Universität gemeinsam Zeit verbringen.
        Dadurch übernehmen Spätis Aufgaben, die weit über den Verkauf von Waren hinausgehen.
        Sie leisten einen wichtigen Beitrag zum sozialen Leben im Kiez
        und fördern den informellen Austausch innerhalb der Nachbarschaft.
			</p>
		</ContentSection>

		<ContentSection title="Bedeutung">
			<SplitSection>
				<template #left>
					<div class="space-y-6">
						<p>
							Darüber hinaus sind Spätis eng mit der kulturellen Identität Berlins verbunden.
              Sie stehen sinnbildlich für Offenheit, Vielfalt und Ungezwungenheit – Eigenschaften,
              die häufig mit der Hauptstadt in Verbindung gebracht werden.
              In vielen Stadtteilen haben sie sich zu festen Bestandteilen des öffentlichen Lebens entwickelt
              und spiegeln die multikulturelle Prägung Berlins wider.
              Sowohl Einheimische als auch Touristinnen und Touristen betrachten Spätis als charakteristische Orte,
              die das besondere Lebensgefühl der Stadt verkörpern.
              Durch ihre Präsenz prägen sie das Strassenbild zahlreicher Quartiere
              und tragen wesentlich zur lebendigen Atmosphäre der Wohnviertel bei.
						</p>
          </div>
				</template>
				<template #right>
					<div class="flex aspect-video w-full items-center justify-center rounded-2xl bg-zinc-900 text-zinc-400 shadow-xl">
						Video-Platzhalter
					</div>
				</template>
			</SplitSection>
      <p>
        Eine weitere zentrale Bedeutung kommt Spätis im Berliner Nachtleben zu.
        Dank ihrer langen Öffnungszeiten gewährleisten sie die Versorgung mit Waren
        auch ausserhalb der regulären Ladenöffnungszeiten und stellen insbesondere
        in den Abend- und Nachtstunden einen wichtigen Anlaufpunkt dar.
        Häufig werden sie vor oder nach dem Besuch von Bars, Clubs oder kulturellen
        Veranstaltungen aufgesucht. Darüber hinaus dienen sie als Treffpunkte für
        Freundesgruppen oder als Ort für kurze Pausen während einer langen Nacht.
        In einer Stadt wie Berlin, die international für ihr vielfältiges Nachtleben
        bekannt ist, bilden Spätis somit einen wichtigen Bestandteil der urbanen
        Infrastruktur.
      </p>
		</ContentSection>

		<ContentSection title="Meinung">
			<SplitSection>
				<template #left>
					<p>
						Unsere Beobachtungen zeigen zudem, dass auch Besucherinnen und Besucher aus dem Ausland
            dem Konzept der Spätis überwiegend positiv gegenüberstehen.
            Viele äusserten sich überrascht darüber, dass ein vergleichbares Angebot in ihren Herkunftsländern nicht existiert.
            Auch in der Schweiz ist dieses Konzept kaum verbreitet und lässt sich höchstens mit sogenannten Migrolinos vergleichen.
            Diese erfüllen jedoch in erster Linie eine Nahversorgungsfunktion
            und besitzen nicht dieselbe soziale und kulturelle Bedeutung wie ein Berliner Späti.
            Zudem zeigen Umfragen in der Schweiz, dass ein vergleichbares Konzept von der Bevölkerung derzeit kaum als notwendig erachtet wird.
					</p>
				</template>
				<template #right>
					<QuoteBlock
						quote="Wer nachts einsam ist kann sich da ein bisschen hinsetzen das ist ja die soziale Funktion das ist eigentlich sehr gut, dass es sowas gibt."
						author="Interviewperson – Platzhalter" />
				</template>
			</SplitSection>
			<p>
				Insgesamt wird deutlich, dass Spätis weit mehr sind als kleine Einzelhandelsgeschäfte.
        Sie vereinen wirtschaftliche, soziale und kulturelle Funktionen
        und leisten einen wichtigen Beitrag zur urbanen Lebensqualität sowie zur Identität Berlins.
        Als Orte der Nahversorgung, der Begegnung und des gesellschaftlichen Austauschs
        prägen sie das Gemeinschaftsgefühl in den Kiezen
        und sind ein fester Bestandteil der Berliner Alltags- und Nachtkultur.
			</p>
		</ContentSection>
	</PageContainer>
</template>

<style scoped>

</style>
