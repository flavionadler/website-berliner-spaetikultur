<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue';
import heroImg from '@/assets/images/hero/business-model.jpeg';
import PageContainer from '@/components/PageContainer.vue';
import QuoteBlock from '@/components/QuoteBlock.vue';
import ContentSection from '@/components/ContentSection.vue';
import SplitSection from '@/components/SplitSection.vue';
import YoutubeVideo from '@/components/YoutubeVideo.vue';
import InfoBox from '@/components/InfoBox.vue';
import {RouteNames} from '@/constants/enums.ts';
</script>

<template>
	<HeroSection :image="heroImg" title="Geschäftsmodell" eyebrow="Mehr als nur ein Kiosk"
	             description="Erfahren Sie, wie Berliner Spätis wirtschaftlich funktionieren und weshalb lange
	             Öffnungszeiten, ein gezieltes Sortiment und die Nähe zur Nachbarschaft ihren Erfolg ausmachen."
	             scroll-target="#business-model-content" />
	<PageContainer id="business-model-content">
		<ContentSection>
			<p>
				Spätis – auch Spätkäufe genannt – sind aus dem Berliner Stadtbild kaum wegzudenken. Auf den ersten Blick
				ähneln sie klassischen Kiosken oder Convenience Stores. Ihr Geschäftsmodell geht jedoch über den reinen
				Verkauf von Getränken und Snacks hinaus. Lange Öffnungszeiten, ein auf spontane Bedürfnisse
				ausgerichtetes Sortiment und die enge Verbindung zum jeweiligen Kiez machen den Späti zu einer
				besonderen Form des Einzelhandels.
			</p>
			<p>
				Während Supermärkte vor allem für den geplanten Einkauf genutzt werden, erfüllen Spätis eine andere
				Funktion. Sie ermöglichen den schnellen und unkomplizierten Einkauf zwischendurch – sei es auf dem Weg
				zur Arbeit, während eines Spaziergangs durch den Kiez oder spät in der Nacht vor dem Besuch einer Bar
				oder eines Clubs.
			</p>
		</ContentSection>

		<ContentSection title="Sortiment und Kundschaft">
			<p>
				Das Sortiment eines Spätis ist in der Regel auf Produkte ausgerichtet, die schnell und spontan gekauft
				werden. Dazu gehören insbesondere Getränke, Snacks, Süssigkeiten, Tabakwaren und kleinere Artikel des
				täglichen Bedarfs. Gewisse Betreiber setzen zusätzlich auf eine grosse Auswahl an Lebensmitteln, um sich
				von anderen Spätis abzuheben:
			</p>
			<QuoteBlock
				quote="Was uns wirklich von anderen unterscheidet, ist, dass wir eine grosse Lebensmittelecke haben:
				Sucuk, Käse, Frischkäse, viele Chipssorten, Kekse. Das läuft bei uns sehr gut. Dazu kommt ein grosses
				Bier- und Alkoholsortiment."
				author="Kaan Mirzanli"
				source="Besitzer vom Späti 'Spätify' in Kreuzberg" />
			<SplitSection>
				<template #left>
					<p>
						Viele Betreiber passen ihr Angebot zudem an die Lage ihres Geschäfts und die Bedürfnisse ihrer
						Kundschaft an. Ein Späti in einem ruhigen Wohnquartier erfüllt eine andere Funktion als einer in
						unmittelbarer Nähe von Bars, Clubs oder touristischen Orten.
					</p>
				</template>
				<template #right>
					<YoutubeVideo video-id="dQw4w9WgXcQ"/>
				</template>
			</SplitSection>
		</ContentSection>

		<ContentSection title="Preisgestaltung: Das Faktor-Model">
			<p>
				Wie Spätis ihre Preise festlegen, folgt einem in der Branche verbreiteten Prinzip, dem sogenannten
				Faktor-Modell. Dabei wird der Einkaufspreis eines Produkts, den die Spätis beim Grosshändler zahlen, mit
				einem festen Faktor multipliziert, der die Betriebskosten für Miete, Strom und Personal deckt:
			</p>
			<QuoteBlock
				quote="Normalerweise arbeiten die meisten Spätis mit einem Faktor von zwei: Kauft man ein Bier für einen
				Euro inklusive Mehrwertsteuer ein, verkauft man es für zwei Euro. Bei uns, wo die Miete grösser ist,
				liegt der Faktor bei einigen Produkten auch bei bis zu 2.5."
				author="Kaan Mirzanli"
				source="Besitzer vom Späti 'Spätify' in Kreuzberg" />
			<p>
				Dieses Modell erklärt, weshalb Spätis im Vergleich zu grossen Supermarktketten meist höhere Preise
				verlangen. Viele Kundinnen und Kunden nehmen diesen Umstand aufgrund der langen Öffnungszeiten und der
				zentralen Lage jedoch in Kauf.
			</p>
		</ContentSection>

		<ContentSection title="Wirtschaftliche Besonderheiten">
			<SplitSection align="center">
				<template #left>
					<p>
						Im Vergleich zu grossen Supermärkten verfügen Spätis meist nur über eine kleine Verkaufsfläche.
						Deshalb konzentrieren sie sich auf Produkte mit hoher Nachfrage und schnellen Verkaufszyklen.
					</p>
				</template>
				<template #right>
					<InfoBox title="Die Bestseller im Späti">
						<ul>
							<li>Getränke und Zigaretten</li>
							<li>Bier und weitere alkoholische Getränke</li>
							<li>Snacks und Süssigkeiten</li>
							<li>«Takis» oder neue Red-Bull-Sorten</li>
						</ul>
					</InfoBox>
				</template>
			</SplitSection>
			<SplitSection align="center">
				<template #left>
					<p>
						Die Nachfrage schwankt zudem stark je nach Tageszeit: Am stärksten läuft das Geschäft meist
						wischen 18 und 22 Uhr, während die Stunden danach zwar ebenfalls umsatzstark, durch
						alkoholisierte Gäste jedoch auch anspruchsvoller sind. Auch die Öffnungszeiten selbst werden
						wirtschaftlich abgewogen: Manche Betreiber, die anfangs rund um die Uhr geöffnet hatten,
						schliessen mittlerweile nachts früher, weil in den Wintermonaten in den frühen Morgenstunden
						kaum noch Kundschaft kommt.
					</p>
				</template>
				<template #right>
					<YoutubeVideo video-id="ruOoPMOsTZ4"/>
				</template>
			</SplitSection>
		</ContentSection>

		<ContentSection title="Herausforderung der Selbstständigkeit">
			<p>
				Einen Späti zu betreiben, bedeutet für die meisten Inhaberinnen und Inhaber, selbstständig zu sein – mit
				allem, was dazugehört:
			</p>
			<QuoteBlock
				quote="Wenn du einen Späti hast, bist du selbstständig – und wie das Wort sagt: selbst und ständig. Auch
				an einem freien Tag sitzt man nicht einfach zu Hause: Man behält die Kameras im Blick, vergleicht
				Angebote bei verschiedenen Grossmärkten und organisiert den Nachschub."
				author="Kaan Mirzanli"
				source="Besitzer vom Späti 'Spätify' in Kreuzberg" />
			<p>
				Dazu gehört die laufende Beobachtung von Aktionen grosser Ketten wie Kaufland oder Rewe, um Waren
				möglichst günstig einzukaufen, ebenso wie die Koordination eines Teams, das im Schichtbetrieb rund um
				die Uhr im Einsatz ist.
			</p>
		</ContentSection>

		<ContentSection title="Mehr als nur ein Geschäft">
			<p>
				Obwohl Spätis wirtschaftliche Unternehmen sind, geht ihr Geschäftsmodell häufig über den reinen Verkauf
				von Waren hinaus. Viele Betreiber kennen ihre Stammkundschaft persönlich und pflegen regelmässige
				Gespräche mit den Menschen aus der Nachbarschaft. Dadurch übernehmen Spätis vielerorts auch eine soziale
				Funktion und tragen zur Identität ihres Kiezes bei. Auch im Berliner Nachtleben übernehmen Spätis eine
				wichtige Funktion als Treffpunkt vor dem eigentlichen Ausgang:
			</p>
			<QuoteBlock
				quote="Vor dem Club geht man nochmal eine Zigarette kaufen. Und weil Alkohol in Clubs und Bars ziemlich
				teuer ist, geht man vorher an den Späti und trinkt dort schon das ein oder andere Bier."
				author="Kaan Mirzanli"
				source="Besitzer vom Späti 'Spätify' in Kreuzberg"
			/>
			<SplitSection>
				<template #left>
					<div>
						<p>
							Selbst unter den Betreibern herrscht trotz wachsender Konkurrenz oft mehr Zusammenhalt als
							Rivalität: Man hilft sich mit fehlenden Produkten aus oder übernimmt gute Ideen voneinander.
						</p>
						<p>
							Ob Kulanz gegenüber Stammkunden, Treffpunkt vor dem Ausgehen oder Zusammenhalt unter den
							Betreibern: Gerade diese Verbindung von wirtschaftlichem Erfolg und gesellschaftlicher Bedeutung
							macht das Berliner Späti-Konzept einzigartig und unterscheidet es von klassischen Kiosken oder
							Convenience Stores in vielen anderen Städten.
						</p>
					</div>
				</template>
				<template #right>
					<YoutubeVideo video-id="QS_KHU5yzW4"/>
				</template>
			</SplitSection>
		</ContentSection>

		<ContentSection title="Fazit">
			<p>
				Ob für ein schnelles Getränk, den Einkauf spät in der Nacht oder ein kurzes Gespräch mit der
				Nachbarschaft: Der Späti ist in Berlin längst mehr als nur ein Laden. Doch gibt es ein vergleichbares
				Konzept auch in der Schweiz? Erfahren Sie in diesem Kapitel mehr dazu:
				<RouterLink class="text-yellow-500" :to="{ name: RouteNames.switzerland }">Vergleich zur Schweiz</RouterLink>
			</p>
		</ContentSection>
	</PageContainer>
</template>

<style scoped>

</style>
