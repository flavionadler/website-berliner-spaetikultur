<script setup lang="ts">

import HeroSection from '@/components/HeroSection.vue';
import heroImg from '@/assets/images/hero/history.jpg'; /* TODO: Other hero image */
import newspaperImg from '@/assets/images/chapters/history/newspaper.jpg'; /* TODO: replace this placeholder image */
import PageContainer from '@/components/PageContainer.vue';
import ContentSection from '@/components/ContentSection.vue';
import SplitSection from '@/components/SplitSection.vue';
import YoutubeVideo from '@/components/YoutubeVideo.vue';
import QuoteBlock from '@/components/QuoteBlock.vue';
import InfoBox from '@/components/InfoBox.vue';
import Timeline from '@/components/Timeline.vue';

const timeline = [
	{
		year: '1949',
		title: 'Gründung der DDR',
		text: 'Nach der Teilung Deutschlands entstand die Deutsche Demokratische Republik.'
	},
	{
		year: '1950er',
		title: 'Erste Spätverkaufsstellen',
		text: 'Um Arbeiter auch nach Feierabend versorgen zu können, entstanden die ersten Spätverkaufsstellen. -- Man könnte auch Bilder einfügen!',
		image: heroImg
	},
	{
		year: '1989',
		title: 'Mauerfall',
		text: 'Mit dem Fall der Berliner Mauer änderte sich das wirtschaftliche Umfeld grundlegend.'
	},
	{
		year: 'Heute',
		title: 'Spätis als Kulturgut',
		text: 'Spätis sind heute fester Bestandteil des Berliner Stadtbildes.'
	}
]
</script>

<template>
	<HeroSection :image="heroImg" title="Geschichte" eyebrow="Ursürunge in der DDR"
	             description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
	             scroll-target="#history-content"/>
	<PageContainer id="history-content">

		<ContentSection>
			<p>
				Die heutigen Berliner Spätis haben ihren Ursprung in den Spätverkaufsstellen der DDR. Obwohl sich ihr
				Erscheinungsbild und ihre Funktion im Laufe der Jahrzehnte stark verändert haben, reicht ihre Geschichte
				bis in die Nachkriegszeit zurück. Aus einer staatlich organisierten Versorgungseinrichtung entwickelte
				sich nach und nach ein fester Bestandteil der Berliner Alltags- und Kiezkultur.
			</p>
		</ContentSection>

		<ContentSection title="Die Anfänge in der DDR">
			<SplitSection>
				<template #left>
					<p>
						In der DDR waren die meisten Geschäfte nur zu festen Zeiten geöffnet. Um die Versorgung der
						Bevölkerung auch ausserhalb der regulären Öffnungszeiten sicherzustellen, entstanden sogenannte
						<strong>Spätverkaufsstellen</strong>. Sie boten vor allem Waren des täglichen Bedarfs an und
						ermöglichten es den Menschen, auch am Abend noch Lebensmittel oder andere wichtige Produkte zu
						kaufen. Die Einführung dieser Geschäfte hing eng mit den Lebens- und Arbeitsbedingungen der DDR
						zusammen. Viele Menschen arbeiteten im Schichtbetrieb oder hatten aufgrund ihrer Arbeitszeiten
						kaum Gelegenheit, tagsüber einzukaufen. Gleichzeitig war die Versorgung zentral organisiert,
						weshalb besondere Verkaufsstellen geschaffen wurden, um Versorgungslücken zu schliessen.
					</p>
				</template>
				<template #right>
					<YoutubeVideo video-id="JKWAUvbNeQs"/>
				</template>
			</SplitSection>
			<SplitSection>
				<template #left>
					<img :src="newspaperImg" alt="Zeitungsartikel aus DDR"/>
				</template>
				<template #right>
					<QuoteBlock quote="YOYO, irgendöppis öber DDR" author="Herr Dr. Stefan Wolle"
					            source="Historiker beim DDR Museum Berlin"/>
				</template>
			</SplitSection>
		</ContentSection>

		<ContentSection title="Das Leben rund um die Spätverkaufsstellen">
			<p>
				Bereits in der DDR waren Spätverkaufsstellen mehr als reine Verkaufsorte. Sie waren häufig Treffpunkte
				im Wohnviertel, an denen Menschen miteinander ins Gespräch kamen oder sich auf dem Heimweg noch mit dem
				Nötigsten versorgten. Dennoch stand damals vor allem die Versorgung der Bevölkerung im Vordergrund – die
				heutige Rolle als Treffpunkt des Berliner Nachtlebens entwickelte sich erst später. Auch das Sortiment
				unterschied sich von heutigen Spätis. Aufgrund der staatlich gelenkten Wirtschaft war die Produktauswahl
				deutlich kleiner und weniger vielfältig als heute.
			</p>
			<QuoteBlock quote="Bliblablup Zitat über Geschichte der Spätis" author="Herr Dr. Stefan Wolle"
			            source="Historiker beim DDR Museum Berlin"/>
			<SplitSection>
				<template #left>
					<InfoBox title="Fun Facts">
						<ul>Fun Fact Nr. 1</ul>
						<ul>Fun Fact Nr. 2</ul>
						<ul>Fun Fact Nr. 3</ul>
					</InfoBox>
				</template>
				<template #right>
					<YoutubeVideo video-id="PNMnjKPPbeI"/>
				</template>
			</SplitSection>
			<p>
				Hier handelt es sich um noch etwas mehr Platzhaltertext, den ich später mithilfe von Interviewinhalten
				ergänzen werde. Hier schreibe ich noch einmal einen ausführlichen Satz mit vielen zusätzlichen
				Informationen und Floskeln, welche dem Leser das Gefühl von mehr Kompetenz geben, als dem Verfasser
				dieses Texts eigentlich zuzurechnen wäre.
			</p>
		</ContentSection>

		<ContentSection>
			<Timeline :items="timeline"/>
		</ContentSection>

		<ContentSection title="Die Zeit nach der Wiedervereinigung">
			<p>
				Mit der Wiedervereinigung veränderte sich das Konzept der Spätverkaufsstellen grundlegend. Die staatlich
				organisierten Verkaufsstellen verschwanden nach und nach oder wurden privatisiert. Gleichzeitig
				entstanden zahlreiche neue Spätis, die sich stärker an den Bedürfnissen ihrer Kundschaft orientierten.
				Das Sortiment wurde deutlich vielfältiger, und viele Betreiber verlängerten ihre Öffnungszeiten. Aus den
				ehemaligen Versorgungsstellen entwickelten sich kleine, privat geführte Geschäfte, die Getränke, Snacks,
				Tabakwaren und viele weitere Produkte anboten. In dieser Zeit gewann auch die soziale Funktion der
				Spätis zunehmend an Bedeutung. Während sie ursprünglich vor allem der Versorgung dienten, entwickelten
				sie sich immer stärker zu Orten, an denen sich Menschen begegnen und austauschen konnten.
			</p>
			<QuoteBlock quote="Wäs ä nöd" author="Random Typ"/>
		</ContentSection>

		<ContentSection title="Wandel der Kiezkultur">
			<SplitSection>
				<template #left>
					<p>
						Mit dem Wandel Berlins veränderten sich auch die Spätis. Die wachsende Clubszene, steigender
						Tourismus und die zunehmende Internationalisierung der Stadt machten sie zu einem wichtigen
						Bestandteil des öffentlichen Lebens. Viele Menschen kaufen dort nicht nur ein, sondern bleiben
						vor dem Laden stehen, unterhalten sich oder treffen Freunde. Ein Späti-Besitzer berichtete uns
						ausserdem, dass sich in manchen Stadtteilen ehemalige Internetcafés nach und nach zu Spätis
						entwickelten. Während Internetcafés früher wichtige Treffpunkte waren, verlor dieses Konzept mit
						der zunehmenden Verbreitung des Internets an Bedeutung. Einige dieser Standorte wurden deshalb in
						Spätis umgewandelt und übernahmen erneut eine soziale Funktion im Quartier – diesmal jedoch als
						unkomplizierte Begegnungsorte für Nachbarn, Stammkunden und Besucher.
					</p>
				</template>
				<template #right>
					<YoutubeVideo video-id="VmSDJYbaPes"/>
				</template>
			</SplitSection>
		</ContentSection>

	</PageContainer>
</template>

<style scoped>

</style>
