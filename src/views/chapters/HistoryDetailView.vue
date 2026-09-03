<script setup lang="ts">

import HeroSection from '@/components/HeroSection.vue';
import heroImg from '@/assets/images/hero/history.jpg'; /* TODO: Other hero image */
import firstSpaeti from '@/assets/images/chapters/history/firstSpaeti.jpg';
import spaetisBeginning from '@/assets/images/chapters/history/spaetisBeginning.jpg';
import reunification from '@/assets/images/chapters/history/reunification.jpg';
import internetcafe from '@/assets/images/chapters/history/internetcafe.jpg';
import PageContainer from '@/components/PageContainer.vue';
import ContentSection from '@/components/ContentSection.vue';
import SplitSection from '@/components/SplitSection.vue';
import YoutubeVideo from '@/components/YoutubeVideo.vue';
import QuoteBlock from '@/components/QuoteBlock.vue';
import InfoBox from '@/components/InfoBox.vue';
import Timeline from '@/components/Timeline.vue';
import FlipCard from '@/components/FlipCard.vue';

const timeline = [
	{
		year: '1950er–1960er Jahre',
		title: 'Die Anfänge',
		text: 'Entstehung der ersten Spätverkaufsstellen in der DDR zur Verbesserung der Versorgung ausserhalb der regulären Ladenöffnungszeiten.',
		image: firstSpaeti
	},
	{
		year: '1960er–1980er Jahre',
		title: 'Versorgung im DDR-Alltag',
		text: 'Früh- und Spätverkaufsstellen werden insbesondere in grösseren Städten etabliert; Berlin nimmt aufgrund seiner besonderen Stellung eine wichtige Rolle ein.',
		image: spaetisBeginning
	},
	{
		year: '1990',
		title: 'Der grosse Umbruch',
		text: 'Deutsche Wiedervereinigung und Ende des staatlich organisierten Einzelhandelssystems.',
		image: reunification
	},
	{
		year: '1990er Jahre',
		title: 'Erste moderne Spätis',
		text: 'Private Betreiber übernehmen zahlreiche ehemalige Spätverkaufsstellen und entwickeln sie zu den heutigen Spätis weiter.',
		image: internetcafe
	},
	{
		year: '2000er bis heute',
		title: 'Teil der Berliner Kiezkultur',
		text: 'Spätis etablieren sich als Treffpunkte der Berliner Kiez- und Nachtkultur, stehen jedoch zunehmend vor rechtlichen und wirtschaftlichen Herausforderungen.'
	}
]
</script>

<template>
	<HeroSection :image="heroImg" title="Geschichte" eyebrow="Ursürunge in der DDR"
	             description="Die Geschichte des Berliner Spätis beginnt lange vor dem heutigen Kiezladen. Von den staatlichen Spätverkaufsstellen der DDR bis zum Treffpunkt der Berliner Nacht- und Kiezkultur hat sich seine Funktion grundlegend gewandelt."
	             scroll-target="#history-content"/>
	<PageContainer id="history-content">

		<ContentSection>
			<p>
				Die heutigen Berliner Spätis haben ihren Ursprung in den <b>Spätverkaufsstellen der DDR</b>. Obwohl sich
				ihr Erscheinungsbild und ihre Funktion im Laufe der Jahrzehnte stark verändert haben, reicht ihre
				Geschichte bis in die Nachkriegszeit zurück. Aus einer staatlich organisierten Versorgungseinrichtung
				entwickelte sich nach und nach ein fester Bestandteil der Berliner Alltags- und Kiezkultur.
			</p>
		</ContentSection>

		<ContentSection title="Die Anfänge in der DDR">
			<p>
				In der DDR waren die meisten Geschäfte nur zu festen Zeiten geöffnet. Bereits Anfang der 1950er-Jahre
				entstanden deshalb sogenannte Spätverkaufsstellen. Erste Hinweise auf solche Verkaufsstellen finden sich
				laut dem Historiker Stefan Wolle bereits 1952; ab 1953 gewannen sie zunehmend an Bedeutung.
			</p>
			<SplitSection>
				<template #left>
					<FlipCard>
						<template #front>
							<div class="flex flex-col items-center gap-4">
								<h2 class="text-3xl font-bold tracking-tight text-white">
									Wie entstanden die Spätverkaufsstellen?
								</h2>

								<p class="text-lg text-zinc-400">
									Beantwortet von Herrn Dr. Stefan Wolle
								</p>
							</div>
						</template>
						<template #back>
							<YoutubeVideo video-id="67TTe-UwVdc"/>
						</template>
					</FlipCard>
				</template>
				<template #right>
					<p>
						Der ursprüngliche Zweck der Spätverkaufsstellen unterschied sich dabei deutlich von der heutigen
						Funktion eines Berliner Spätis. Im Mittelpunkt stand zunächst die Versorgung von Arbeitern
						ausserhalb der üblichen Ladenöffnungszeiten. Besonders für Menschen, die im Schichtbetrieb
						arbeiteten, war es schwierig, während der regulären Öffnungszeiten einzukaufen. Die
						Spätverkaufsstellen sollten dieses Problem lösen und ermöglichten es beispielsweise, nach einer
						Spät- oder Nachtschicht noch Lebensmittel und andere Waren des täglichen Bedarfs einzukaufen.
					</p>
				</template>
			</SplitSection>
			<p>
				Die Entstehung der Spätverkaufsstellen steht zudem im Zusammenhang mit der schwierigen
				Versorgungssituation der frühen DDR. Nach dem Volksaufstand vom 17. Juni 1953 versuchte die Regierung
				unter anderem, die Versorgung der Bevölkerung und insbesondere der Arbeiterschaft zu verbessern. Die
				Einrichtung und der Ausbau von Spätverkaufsstellen waren dabei Teil verschiedener Massnahmen, mit denen
				die Einkaufsmöglichkeiten verbessert werden sollten.
			</p>
		</ContentSection>

		<ContentSection title="Das Leben rund um die Spätverkaufsstellen">
			<SplitSection>
				<template #left>
					<p>
						Anders als der heutige Späti waren die Spätverkaufsstellen der DDR in erster Linie Verkaufs- und
						Versorgungsstellen und keine sozialen Treffpunkte. Ihr Zweck bestand vor allem darin, die
						Bevölkerung auch ausserhalb der üblichen Ladenöffnungszeiten mit Waren des täglichen Bedarfs zu
						versorgen. Insbesondere für Schichtarbeiter waren die verlängerten Öffnungszeiten wichtig, da sie
						auch nach ihrer Arbeit noch einkaufen konnten.
					</p>
				</template>
				<template #right>
					<YoutubeVideo video-id="PNMnjKPPbeI"/>
				</template>
			</SplitSection>
			<SplitSection>
				<template #left>
					<InfoBox title="Facts">
						<ul>Spätverkaufsstellen in der DDR schlossen normalerweise bereits um 22 Uhr.</ul>
						<ul>
							Spätverkaufsstellen gab es auch in anderen Grossstädten der DDR, beispielsweise in Dresden,
							Karl-Marx-Stadt und Erfurt.
						</ul>
						<ul>
							Obwohl die Spätverkaufsstellen eine andere Funktion als heutige Spätis hatten, gehörten
							Alkohol und Zigaretten durchaus zum Sortiment.
						</ul>
					</InfoBox>
				</template>
				<template #right>
					<p>
						Auch das Sortiment und die Gestaltung unterschieden sich vom heutigen Späti. Die
						Spätverkaufsstellen waren vielfach normale Lebensmittelgeschäfte mit verlängerten Öffnungszeiten
						und nicht primär auf spontane Einkäufe, Nachtleben oder eine bestimmte Kiezkultur ausgerichtet.
						Die heutige soziale und kulturelle Bedeutung des Spätis ist somit nicht einfach ein Überbleibsel
						aus der DDR, sondern das Ergebnis einer späteren Entwicklung. Erst nach der Wiedervereinigung
						veränderte sich die Funktion der ehemaligen Verkaufsstellen zunehmend und entwickelte sich in
						Richtung des heutigen Späti-Konzepts.
					</p>
				</template>
			</SplitSection>
		</ContentSection>

		<ContentSection title="Die Entwicklung der Spätverkaufsstellen">
			<Timeline :items="timeline"/>
		</ContentSection>

		<ContentSection title="Die Zeit nach der Wiedervereinigung">
			<SplitSection>
				<template #left>
					<p>
						Mit der Wiedervereinigung veränderte sich das Konzept der Spätverkaufsstellen grundlegend. Die staatlich
						organisierten Verkaufsstellen verschwanden nach und nach oder wurden privatisiert. Gleichzeitig
						entstanden zahlreiche neue Spätis, die sich stärker an den Bedürfnissen ihrer Kundschaft orientierten.
					</p>
					<p>
						Das Sortiment wurde deutlich vielfältiger, und viele Betreiber verlängerten ihre Öffnungszeiten. Aus den
						ehemaligen Versorgungsstellen entwickelten sich kleine, privat geführte Geschäfte, die Getränke, Snacks,
						Tabakwaren und viele weitere Produkte anboten.
					</p>
				</template>
				<template #right>
					<FlipCard>
						<template #front>
							<div class="flex flex-col items-center gap-4">
								<h2 class="text-3xl font-bold tracking-tight text-white">
									Was passierte nach der Wiedervereinigung mit den Spätverkaufsstellen?
								</h2>

								<p class="text-lg text-zinc-400">
									Beantwortet von Herrn Dr. Stefan Wolle
								</p>
							</div>
						</template>
						<template #back>
							<YoutubeVideo video-id="-QOQj6dusIA"/>
						</template>
					</FlipCard>
				</template>
			</SplitSection>
			<p>
				In dieser Zeit gewann auch die soziale Funktion der Spätis zunehmend an Bedeutung. Während sie
				ursprünglich vor allem der Versorgung dienten, entwickelten sie sich immer stärker zu Orten, an denen
				sich Menschen begegnen und austauschen konnten.
			</p>
		</ContentSection>

		<ContentSection title="Wandel der Kiezkultur">
			<p>
				Mit dem Wandel Berlins veränderten sich auch die Spätis. Die wachsende Clubszene, steigender Tourismus
				und die zunehmende Internationalisierung der Stadt machten sie zu einem wichtigen Bestandteil des
				öffentlichen Lebens. Viele Menschen kaufen dort nicht nur ein, sondern bleiben vor dem Laden stehen,
				unterhalten sich oder treffen Freunde.
			</p>
			<p>
				Während Internetcafés früher wichtige Treffpunkte waren, verlor dieses Konzept mit der zunehmenden
				Verbreitung des Internets an Bedeutung.
			</p>
			<QuoteBlock
				quote="Vor knapp 20 Jahren waren es noch die Internetcafés und dann hat sich das so entwickelt."
				author="Kaan Mirzanli"
				source="Besitzer vom Späti 'Spätify' in Kreuzberg" />
			<p>
				Einige dieser Standorte wurden deshalb in Spätis umgewandelt und übernahmen erneut eine soziale Funktion
				im Quartier – diesmal jedoch als unkomplizierte Begegnungsorte für Nachbarn, Stammkunden und Besucher.
			</p>
		</ContentSection>

		<ContentSection class="mt-12">
			<p class="font-mono text-sm text-zinc-500">
				Ein herzliches Dankeschön an Stefan Wolle und das DDR Museum für ihren wertvollen Beitrag zu dieser
				Seite.
			</p>
		</ContentSection>

	</PageContainer>
</template>

<style scoped>

</style>
