<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue';
import heroImg from '@/assets/images/hero/business-model.jpeg';
import PageContainer from '@/components/PageContainer.vue';
import QuoteBlock from '@/components/QuoteBlock.vue';
import ContentSection from '@/components/ContentSection.vue';
import SplitSection from '@/components/SplitSection.vue';
import YoutubeVideo from '@/components/YoutubeVideo.vue';
import InfoBox from '@/components/InfoBox.vue';
</script>

<template>
	<HeroSection :image="heroImg" title="Geschäftsmodell" eyebrow="Mehr als nur ein Kiosk"
	             description="Erfahren Sie, wie Berliner Spätis wirtschaftlich funktionieren und weshalb lange
	             Öffnungszeiten, ein gezieltes Sortiment und die Nähe zur Nachbarschaft ihren Erfolg ausmachen."
	             scroll-target="#business-model-content" />
	<PageContainer id="business-model-content">
		<ContentSection>
			<p>Spätis sind weit mehr als gewöhnliche Kioske. Ihr Geschäftsmodell basiert oft darauf, die Versorgung der
				Bevölkerung auch ausserhalb der üblichen Ladenöffnungszeiten sicherzustellen. Besonders in Berlin, wo
				das Nachtleben eine wichtige Rolle spielt, bieten Spätis eine grosse Auswahl an Getränken, Snacks,
				Tabakwaren, Alltagsartikeln und weiteren Produkten des täglichen Bedarfs.
			</p>
			<p>
				Das Geschäftsmodell der Berliner Spätkäufe variiert stark nach deren Standort und Grösse. Viele setzen
				auf lange Öffnungszeiten. Einige sind bis spät in die Nacht geöffnet, andere sogar rund um die Uhr.
				Dadurch sprechen sie vor allem Menschen an, die ausserhalb der regulären Einkaufszeiten einkaufen
				möchten – beispielsweise Nachtschwärmer, Schichtarbeitende oder Personen, die kurzfristig etwas
				benötigen.
			</p>
		</ContentSection>
		<ContentSection title="Sortiment und Kundschaft">
			<SplitSection>
				<template #left>
					<p>
						Das Sortiment eines Spätis ist meist auf spontane Einkäufe ausgelegt. Besonders gefragt sind Getränke,
						Tabakwaren, Snacks und Süssigkeiten. Gewisse Spätis bieten zusätzlich Kaffeespezialitäten, Eis oder
						regionale Produkte an. Die Kundschaft ist entsprechend vielfältig. Tagsüber kaufen häufig Anwohnende,
						Berufstätige oder Touristen ein. Am Abend und in der Nacht verschiebt sich der Fokus stärker auf Besucher
						des Berliner Nachtlebens, die vor oder nach dem Club- oder Barbesuch einen Späti aufsuchen.
					</p>
				</template>
				<template #right>
					<YoutubeVideo video-id="dQw4w9WgXcQ"/>
				</template>
			</SplitSection>
			<QuoteBlock
				quote="Wir treffen uns immer nach der Arbeit hier, um ein Feierabendbier zu geniessen."
				author="Kunde von einem Späti in Prenzlauer Berg"
				source="Strasseninterview in Berlin"
			/>
		</ContentSection>
		<ContentSection title="Wirtschaftliche Besonderheiten">
			<p>
				Im Vergleich zu grossen Supermärkten verfügen Spätis meist nur über eine kleine Verkaufsfläche.
				Deshalb konzentrieren sie sich auf Produkte mit hoher Nachfrage und schnellen Verkaufszyklen. Die
				Preise liegen häufig über denen des Einzelhandels, was viele Kundinnen und Kunden aufgrund der
				langen Öffnungszeiten und der zentralen Lage jedoch akzeptieren.
			</p>
			<SplitSection align="center">
				<template #left>
					<InfoBox title="Meistverkaufte Produkte">
						<ol>
							<li>Getränke</li>
							<li>Tabakwaren</li>
							<li>Alkohol-Flaschen</li>
						</ol>
					</InfoBox>
				</template>
				<template #right>
					<YoutubeVideo video-id="ruOoPMOsTZ4"/>
				</template>
			</SplitSection>
			<p>
				Hier handelt es sich um noch etwas mehr Platzhaltertext, den ich später mithilfe von Interviewinhalten
				ergänzen werde. Hier schreibe ich noch einmal einen ausführlichen Satz mit vielen zusätzlichen
				Informationen und Floskeln, welche dem Leser das Gefühl von mehr Kompetenz geben, als dem Verfasser
				dieses Texts eigentlich zuzurechnen wäre.
			</p>
			<QuoteBlock
				quote="Spätis sind ein Cent-Geschäft."
				author="Nathan"
				source="Mitarbeiter von 'Kiez Kios Alt-Moabit'"
			/>
		</ContentSection>
		<ContentSection title="Mehr als nur ein Geschäft">
			<p>
				Obwohl Spätis wirtschaftliche Unternehmen sind, geht ihr Geschäftsmodell häufig über den reinen Verkauf
				von Waren hinaus. Viele Betreiber kennen ihre Stammkundschaft persönlich und pflegen regelmässige
				Gespräche mit den Menschen aus der Nachbarschaft. Dadurch übernehmen Spätis vielerorts auch eine soziale
				Funktion und tragen zur Identität ihres Kiezes bei.
			</p>
			<QuoteBlock
				quote="Platzhalter für Zitat"
				author="Random Dude"
				source="aus Berlin"
			/>
			<p>
				Gerade diese Verbindung von wirtschaftlichem Erfolg und gesellschaftlicher Bedeutung macht das Berliner
				Späti-Konzept einzigartig und unterscheidet es von klassischen Kiosken oder Convenience Stores in vielen
				anderen Städten. Eventuell wird dieses Unterkapitel später noch durch ein anderes ersetzt, ich bin nicht
				sicher, ob hier nicht noch was sinnvolles dazu kommt.
			</p>
		</ContentSection>
	</PageContainer>
</template>

<style scoped>

</style>
