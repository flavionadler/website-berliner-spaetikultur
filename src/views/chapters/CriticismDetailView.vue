<script setup lang="ts">

import HeroSection from '@/components/HeroSection.vue';
import heroImg from '@/assets/images/hero/criticism.jpg';
import PageContainer from "@/components/PageContainer.vue";
import ContentSection from "@/components/ContentSection.vue";
import SplitSection from '@/components/SplitSection.vue';
import QuoteBlock from '@/components/QuoteBlock.vue';
import trashImg from '@/assets/images/criticism/spaeti-muell-flaschen.jpg';
import YoutubeVideo from "@/components/YoutubeVideo.vue";
</script>

<template>
	<HeroSection :image="heroImg" title="Kritik" eyebrow="Von Lärm bis hin zu Gewalt"
	             description="Erfahren Sie, welchen rechtlichen, wirtschaftlichen und gesellschaftlichen Herausforderungen
	              Berliner Spätis begegnen und wie diese ihre Zukunft im Stadtbild beeinflussen."
	             scroll-target="#criticism-content" />

	<PageContainer id="criticism-content">
		<ContentSection>
			<p>Spätis sind seit Jahrzehnten ein fester Bestandteil des Berliner Stadtbildes.
				Für viele Bewohnerinnen und Bewohner gehören sie zum Alltag und bieten eine unkomplizierte Möglichkeit,
				auch ausserhalb regulärer Geschäftszeiten Lebensmittel, Getränke
				oder andere Produkte des täglichen Bedarfs zu erwerben.
				Trotz ihrer grossen Beliebtheit stehen Spätis jedoch vor verschiedenen
				rechtlichen, wirtschaftlichen und gesellschaftlichen Herausforderungen,
				welche ihre Zukunft und ihre Rolle im urbanen Raum beeinflussen.</p>
		</ContentSection>

		<ContentSection title="Rechtliche Schwierigkeiten">
			<p>
				Eine der grössten Herausforderungen ergibt sich aus den rechtlichen Rahmenbedingungen.
        Insbesondere die Öffnung an Sonn- und Feiertagen sowie die Erlaubnis, Sitzmöglichkeiten vor dem Geschäft anzubieten,
        führen regelmässig zu Diskussionen zwischen Betreibern und Behörden.
			</p>
			<p>
				Rechtlich sind Spätis grundsätzlich Einzelhandelsbetriebe und unterliegen damit dem Berliner Ladenöffnungsgesetz (BerlLadÖffG).
        Gemäss § 3 BerlLadÖffG dürfen Verkaufsstellen in Berlin von Montag bis Samstag grundsätzlich ohne zeitliche Begrenzung geöffnet sein.
        An Sonn- und gesetzlichen Feiertagen müssen Einzelhandelsgeschäfte hingegen gemäss § 4 BerlLadÖffG grundsätzlich geschlossen bleiben.
			</p>
			<SplitSection>
				<template #left>
					<p>
						Viele Berliner Spätis betreiben zusätzlich einen gastronomischen Betrieb und gelten damit als sogenannte Mischbetriebe.
            Die rechtliche Grundlage hierfür bilden das Gaststättengesetz (GastG) sowie die hierzu ergangene Rechtsprechung.
            Das Verwaltungsgericht Berlin (Beschluss vom 18. Juli 2019, Az. VG 4 L 216.19) stellte klar,
            dass ein Betrieb gleichzeitig Einzelhandel und Gaststätte sein kann.
            Während der Einzelhandel an Sonn- und Feiertagen grundsätzlich geschlossen bleiben muss,
            darf der Gaststättenbetrieb weiterhin Speisen und Getränke zum unmittelbaren Verzehr anbieten.
					</p>
				</template>
				<template #right>
					<div class="flex aspect-video w-full items-center justify-center rounded-2xl bg-zinc-900 text-zinc-400 shadow-xl">
						Bild-Platzhalter
					</div>
				</template>
			</SplitSection>
      <p>
        Dies wird häufig als sogenannter Gassenschank bezeichnet.
        Produkte, die typischerweise nicht zum sofortigen Verzehr bestimmt sind – beispielsweise Zigaretten,
        Spirituosen in verschlossenen Flaschen oder Kosmetikartikel – dürfen an Sonn- und Feiertagen hingegen nicht im Rahmen des Gaststättenbetriebs verkauft werden,
        da sie weiterhin dem Einzelhandel zuzuordnen sind.
      </p>
			<p>
				Ein weiterer häufiger Diskussionspunkt betrifft die Sitzmöglichkeiten vor den Geschäften.
        Werden Tische oder Stühle auf öffentlichem Strassenland aufgestellt, handelt es sich um eine Sondernutzung im Sinne des § 11 Berliner Strassengesetz (BerlStrG).
        Für diese Nutzung ist grundsätzlich eine Sondernutzungserlaubnis erforderlich.
        Obwohl die gesetzliche Grundlage berlinweit einheitlich ist, unterscheiden sich die Bezirke deutlich in ihrer Genehmigungspraxis.
        Während der Bezirk Mitte Sitzgelegenheiten unter bestimmten Voraussetzungen zulässt, verfolgt der Bezirk Pankow eine wesentlich restriktivere Praxis.
        Als Begründung werden insbesondere die Sicherstellung der Barrierefreiheit, ausreichend breite Gehwege sowie der Schutz der Anwohnerinnen und Anwohner vor Lärmbelästigungen angeführt.
        Ausserdem sind die Besitzer bei mehr als 50 m² Aufenthaltsfläche oder mehr als 10 Sitzplätzen gemäss § 4 Abs. 5 der Berliner Gaststättenverordnung (GastV) dazu verpflichtet,
        sanitäre Anlagen zur Verfügung zu stellen. Damit geht ein weiterer Aufwand und gegebenenfalls weiteres Personal einher.
			</p>
      <p>
				Aus diesem Grund verzichten viele Betreiber bewusst auf grössere Sitzbereiche oder stellen lediglich einzelne Stühle vor ihrem Geschäft auf.
        Daher beantragen viele Besitzer ihre Sitzmöglichkeiten nicht als Sitzmöglichkeiten für Kundschaft, sondern für Mitarbeitende.
        Grössere Sitzgruppen können zu Ansammlungen von Personen führen, wodurch Beschwerden wegen Lärms,
        insbesondere in den Abend- und Nachtstunden, wahrscheinlicher werden.
        Konflikte entstehen häufig durch Musik oder durch Kundinnen und Kunden, die sich längere Zeit vor dem Späti aufhalten.
        Nach Angaben verschiedener Bezirksämter können viele dieser Konflikte jedoch zunächst im direkten Gespräch zwischen Betreibern und Anwohnern gelöst werden,
        bevor ordnungsrechtliche Massnahmen erforderlich werden.
			</p>
		</ContentSection>

		<ContentSection title="Ökologische Schwierigkeiten">
      <p>
        Auch Umweltaspekte werden regelmässig mit Spätis in Verbindung gebracht.
        Insbesondere in der Nähe von Parks oder öffentlichen Plätzen kaufen viele Besucher Getränke in einem Späti und verbringen anschliessend dort ihre Freizeit.
        Werden Verpackungen oder Flaschen anschliessend nicht ordnungsgemäss entsorgt, entstehen Verschmutzungen des öffentlichen Raums.
        Die Verantwortung hierfür liegt jedoch nicht beim Späti selbst, sondern im Verhalten einzelner Kundinnen und Kunden.
      </p>
      <img
          :src="trashImg"
          alt="Herumliegende Flaschen und Müll"
          class="aspect-video w-full rounded-2xl object-cover shadow-xl"
      />
    </ContentSection>

		<ContentSection title="Wirtschaftliche Schwierigkeiten">
			<SplitSection>
				<template #left>
					<p>
						Neben den rechtlichen Herausforderungen stehen Spätis auch vor wirtschaftlichen Problemen.
            Aufgrund der hohen Dichte an Spätis in vielen Berliner Bezirken herrscht ein starker Wettbewerb.
            Neue Geschäfte müssen sich zunächst einen festen Kundenstamm aufbauen und konkurrieren mit bereits etablierten Betrieben.
            Hinzu kommen steigende Energiepreise, höhere Gewerbemieten sowie gestiegene Einkaufspreise für Waren.
            Diese Entwicklungen führen häufig zu höheren Verkaufspreisen.
					</p>
				</template>
				<template #right>
          <YoutubeVideo video-id="x-kQ7T_b6AA"/>
				</template>
			</SplitSection>
      <p>Da Spätis ihre laufenden Kosten – insbesondere Miete, Personal, Energie, Wareneinsatz und Steuern – decken müssen,
        sind sie auf ausreichende Gewinnmargen angewiesen.
        Aussagen, wonach sämtliche Produkte grundsätzlich mit einem Gewinnaufschlag von 100 Prozent verkauft werden müssten,
        lassen sich jedoch wissenschaftlich nicht belegen und hängen stark vom jeweiligen Produkt sowie vom Geschäftsmodell des Betriebs ab.
      </p>
			<QuoteBlock
				quote="Der Konkurrenzkampf ist für ältere Spätis weniger zu spüren. Vor allem neue Läden haben Schwierigkeiten. Jeder Späti hat seine eigenen Stammkunden."
				author="Arbeiter vom Kiez Kiosk Alt-Moabit, 06.05.2026" />
		</ContentSection>

		<ContentSection title="Zusammenfassend">
			<p>
				Zusammenfassend lässt sich festhalten,
        dass Spätis trotz ihrer grossen Bedeutung für das Berliner Stadtbild vor zahlreichen rechtlichen, wirtschaftlichen und gesellschaftlichen Herausforderungen stehen.
        Insbesondere die unterschiedlichen Auslegungen der gesetzlichen Vorgaben durch die Bezirke
        sowie steigende Betriebskosten erschweren den langfristigen Betrieb vieler Geschäfte.
        Dennoch bleiben Spätis ein wichtiger Bestandteil der Berliner Alltags- und Kiezkultur
        und erfüllen für viele Menschen eine soziale und praktische Funktion, die über den reinen Warenverkauf hinausgeht.
			</p>
		</ContentSection>
	</PageContainer>
</template>

<style scoped>

</style>
