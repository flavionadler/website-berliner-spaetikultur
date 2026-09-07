<script setup lang="ts">

import heroImg from '@/assets/images/hero/titlepicture_ch.jpg';
import cantonAgImg from '@/assets/images/chapters/comparison-to-switzerland/Kanton_Aargau_auf_der_Schweizer_Karte.png';
import voteImg from '@/assets/images/chapters/comparison-to-switzerland/vote.png';
import migrolinoImg from '@/assets/images/chapters/comparison-to-switzerland/Migrolino.jpeg';
import HeroSection from '@/components/HeroSection.vue';
import PageContainer from '@/components/PageContainer.vue';
import ContentSection from '@/components/ContentSection.vue';
import SplitSection from '@/components/SplitSection.vue';
import FlipCard from '@/components/FlipCard.vue';
</script>

<template>
	<HeroSection :image="heroImg" title="Vergleich zur Schweiz" eyebrow="Spätis in der Schweiz?"
	             description="Erfahren Sie in diesem Kapitel, weshalb es das Konzept der Spätis in der Schweiz nicht so
	             gibt, wie in Berlin." scroll-target="#comparison-to-switzerland-content" />
	<PageContainer id="comparison-to-switzerland-content">
		<ContentSection>
			<p>
				Ob sich das Berliner Späti-Modell in der Schweiz umsetzen lässt, hängt stark von den gesetzlichen
				Regelungen zu Ladenöffnungszeiten und Arbeitszeiten ab. Genau hier unterscheidet sich die Schweiz von
				Berlin.
			</p>
		</ContentSection>

		<ContentSection title="Kein einheitliches Schweizer Ladenschlussgesetz">
			<p>
				In der Schweiz gibt es kein einheitliches Gesetz, das für alle Geschäfte dieselben Ladenöffnungszeiten
				festlegt. Die Öffnungszeiten unter der Woche sowie an Samstagen wird kantonal geregelt. Im Kanton Aargau
				können die Geschäfte an Werktagen zwischen 6 Uhr morgens bis 23 Uhr abends geöffnet sein.
			</p>
			<SplitSection>
				<template #left>
					<p>
						Für einen möglichen Schweizer Späti würde das bedeuten, dass man das Konzept im Kanton Aargau
						deutlich einfacher einführen könnte, wie in anderen Kantonen, da sie je nach Kanton deutlich
						stärker eingeschränkt wären.<br>
						Mehr zu den Schweizer Ladenöffnungsgesetzen können Sie hier erfahren:
						<a
							href="https://www.parlament.ch/de/services/news/Seiten/2026/20260609111905814194158159026_bsd062.aspx?"
							target="_blank" class="text-yellow-500">
							Ladenöffnungszeiten in der Schweiz: Was Sie wissen müssen
						</a>
					</p>
				</template>
				<template #right>
          <img
              :src="cantonAgImg"
              alt="Kanton Aargau auf der Schweizer Karte"
              class="w-full rounded-2xl shadow-xl"
          />
					<p>Kanton Aargau mit lockeren Konditionen für Ladenöffnungszeiten.</p>
				</template>
			</SplitSection>
      <SplitSection align="center">
        <template #left>
          <img
              :src="migrolinoImg"
              alt="Migrolino als Beispiel eines Schweizer Convenience-Shops"
              class="w-full rounded-2xl object-cover shadow-xl"
          />
        </template>

        <template #right>
          <p>
            Ein ähnliches Konzept zeigt sich zurzeit vor allem bei Migrolino oder Coop Pronto.
            Sie besitzen ein ähnliches Sortiment. Jedoch gilt für beide die Kantonalen Richtlinien.
            Ausserdem gehören sie zu einer Kette und sind lediglich ein Tochterkonzept von der
            Migros, wie vom Coop. Spätis im Vergleich sind eigenständige Läden.
          </p>
        </template>
      </SplitSection>
			<p>
				Die Migros hält jedoch mit einem ganz anderen Konzept mit. Sie entwickelten das Konzept Migros teo. Hier sind
				keine Verkäufer vor Ort. Es ist lediglich ein Team von zwei Leuten involviert, welche die Verantwortung
				besitzen, diesen Laden aufzufüllen. Grundsätzlich funktioniert es über die Self-Checkout-Kassen. Das ist um
				einiges einfacher mit dem Recht zu vereinbaren, da die Einschränkung vor allem beim Personal liegt.
			</p>
			<p><a href="https://corporate.migros.ch/de/news/ein-migros-teo-fuer-speicher" target="_blank" class="text-yellow-500">Ein Migros teo für Speicher | Migros</a></p>
		</ContentSection>

		<ContentSection title="Warum der Sonntag schwieriger ist">
			<p>
				Schwierig wird es jedoch sonntags. An Sonntagen greift ebenfalls das Nationale eidgenössische
				Arbeitsgesetz. Das besagt unter anderem, dass Arbeitnehmer von Samstag, 23 Uhr bis Sonntag, 23 Uhr nicht
				beschäftigt, werden dürfen. Daher bräuchte es hier eine Sonderbewilligung.
			</p>
			<p>Ausgenommen davon sind zum Beispiel: </p>
			<ul class="list-disc pl-10">
				<li>Kioske an öffentlichen Strassen und Plätzen</li>
				<li>bestimmte Geschäfte an Bahnhöfen und Flughäfen</li>
				<li>bestimmte Tankstellenshops</li>
				<li>Geschäfte in bestimmten Fremdenverkehrsgebieten</li>
				<li>weitere speziell geregelte Betriebsarten</li>
			</ul>
			<p>
				Diese Ausnahmen sind jedoch an bestimmte Voraussetzungen gebunden. Ein Tankstellenshop kann beispielsweise
				nicht einfach deshalb rund um die Uhr geöffnet sein, weil er ein ähnliches Sortiment wie ein Späti
				verkauft. Das Angebot muss bei den entsprechenden Sonderregelungen insbesondere auf die Bedürfnisse von
				Reisenden ausgerichtet sein.
			</p>
			<p>
				Ein Dorfladen würde, wenn man sich die Voraussetzungen anschaut diese nicht erfüllen. Dadurch würde er
				weder dieselben Rechte noch dieselben Pflichten erhalten.
			</p>
			<p>
				Offizielle Informationen des SECO: <a href="https://www.seco.admin.ch/de/faq-ladenoeffnung-sonntag" target="_blank" class="text-yellow-500">FAQ Ladenöffnung am Sonntag</a>
			</p>
		</ContentSection>

		<ContentSection title="Die aktuelle politische Diskussion: vier oder zwölf Sonntage?">
			<p>
				Die Frage nach längeren Öffnungszeiten ist momentan auch politisch aktuell.
			</p>
			<p>
				Ausgangspunkt war eine Standesinitiative des Kantons Zürich mit dem Titel «Zeitlich befristete
				Flexibilisierung der Ladenöffnungszeiten». Die Idee: Die Kantone sollten die Möglichkeit erhalten,
				anstelle von maximal vier bis zu zwölf Sonntage pro Jahr festzulegen, an denen Verkaufsgeschäfte ohne
				spezielle Ausnahmebewilligung Personal beschäftigen dürfen.
			</p>
			<p>
				Wichtig ist dabei: Die vorgeschlagene Änderung hätte nicht bedeutet, dass alle Schweizer Geschäfte
				automatisch an zwölf Sonntagen öffnen müssten. Die Kantone hätten selbst entscheiden können, ob sie von
				der Möglichkeit Gebrauch machen.
			</p>
			<p>
				Auch die übrigen Schutzbestimmungen des Arbeitsgesetzes wären bestehen geblieben.
			</p>
		</ContentSection>

		<ContentSection title="Was sagte der Bundesrat?">

			<SplitSection>
				<template #left>
					<p>
						Der Bundesrat unterstützte die Änderung. In seiner Stellungnahme vom 22. April 2026 bezeichnete er die
						geplante Ausweitung als eine massvolle Flexibilisierung.
					</p>
					<p>
						Seine Argumentation: Die Kantone sollten selbst entscheiden können, ob zusätzliche Sonntagsverkäufe zu
						den Bedürfnissen ihrer Bevölkerung und ihrer Wirtschaft passen. Damit sollte der föderalistische Aufbau
						der Schweiz erhalten bleiben.
					</p>
					<p>
						Der Bundesrat wollte also nicht schweizweit zwölf Verkaufssonntage vorschreiben. Er wollte den
						Kantonen lediglich mehr Spielraum geben. Entschied sich mit 22 Stimmen dagegen, 21 dafür und
						einer Enthaltung, dass diese Möglichkeit nicht für die Kantone in Frage kommt.
					</p>
					<p>
						Damit trat der Ständerat nicht auf die Vorlage ein. Die geplante Erhöhung von vier auf zwölf
						mögliche Sonntagsverkäufe wurde somit vorerst gestoppt.
					</p>
				</template>
				<template #right>
					<img :src="voteImg" alt="Kanton Aargau auf der Schweizer Karte"/>
				</template>
			</SplitSection>
			<p>
				Interessant war die Zusammensetzung der Mehrheit: Gegen die Vorlage bildete sich eine ungewöhnliche
				Allianz aus Mitgliedern von SP, Grünen, Mitte und SVP. Die Befürworter argumentierten unter anderem mit
				veränderten Einkaufsgewohnheiten, dem Onlinehandel und der Möglichkeit, den Kantonen mehr Flexibilität zu
				geben. Die Gegner stellten dagegen den Schutz des Sonntags und der Arbeitnehmenden in den Mittelpunkt.
			</p>
			<p>Die Abstimmung im Detail: <a href="https://www.parlament.ch/de/services/news/Seiten/2026/20260609105007655194158159026_bsd053.aspx" target="_blank" class="text-yellow-500">Der Ständerat will keine zusätzlichen Sonntagsverkäufe</a></p>
		</ContentSection>

		<ContentSection title="Was bedeutet das für einen Schweizer Späti?">
			<p>
				Für einen möglichen Schweizer Späti ist diese Diskussion besonders interessant.
			</p>
			<p>
				Das aktuelle Recht macht es relativ einfach, unter der Woche lange zu öffnen, wenn der jeweilige Kanton
				dies zulässt. Ein Späti könnte beispielsweise in einem liberalisierten Kanton bis spät abends geöffnet
				sein.
			</p>
		</ContentSection>

		<ContentSection title="Der Sonntag bleibt dagegen die grössere Hürde.">
			<p>
				Ein Berliner Späti, der stark auf das Wochenende und das Nachtleben ausgerichtet ist, lässt sich deshalb
				nicht einfach in die Schweiz übertragen. Ein Schweizer Späti müsste sich entweder auf eine gesetzliche
				Ausnahme stützen. Zum beispielsweise als Kiosk oder seine Öffnungszeiten entsprechend den kantonalen und
				arbeitsrechtlichen Vorgaben gestalten.
			</p>
			<p>
				Gerade deshalb sind die heutigen Schweizer Kioske, Bahnhofsläden und Tankstellenshops interessante
				Vergleichsbeispiele: Sie zeigen, dass lange Öffnungszeiten möglich sind, aber nur innerhalb bestimmter
				rechtlicher Rahmenbedingungen.
			</p>
		</ContentSection>

		<ContentSection title="Was sagen Umfragen und Betroffene?">
			<SplitSection>
				<template #left>
					<p>
						Die Diskussion ist nicht nur eine juristische oder politische Frage. Auch die Einstellung der
						Bevölkerung und der Beschäftigten spielt eine Rolle.
					</p>
					<p>
						Eine Untersuchung der Gewerkschaft Unia zu den verlängerten Ladenöffnungszeiten in der Berner
						Innenstadt befragte direkt betroffene Beschäftigte. Die Ergebnisse zeigen unter anderem, wie
						stark die Auswirkungen längerer Öffnungszeiten auf Arbeitszeiten und Arbeitsbedingungen
						wahrgenommen werden.
					</p>
				</template>
				<template #right>
					<FlipCard>
						<template #front>
							<p>
								Auch die Umfragen der Konsumenten zeigt, dass das Bedürfnis für Weitere Läden begrenzt
								ist. Konsumenten sehen es unter anderem Kritisch und mehr Vorteile für die Unternehmen.
							</p>
						</template>
						<template #back>
							<iframe class="aspect-video w-full" src="https://www.srf.ch/play/embed?urn=urn:srf:video:698688a9-b4af-4401-8001-6b332529bed5&subdivisions=false" allowfullscreen allow="geolocation *; autoplay; encrypted-media"></iframe>
						</template>
					</FlipCard>
				</template>
			</SplitSection>
			<p>
				Auch ältere Befragungen unter Beschäftigten im Detailhandel zeigen eine deutliche Skepsis
				gegenüber zusätzlicher Nacht- und Sonntagsarbeit. In einer vom Schweizerischen Gewerkschaftsbund
				veröffentlichten Umfrage lehnten 85 % der Befragten zusätzliche Arbeit am Abend, in der Nacht
				oder am Sonntag ab. Diese Umfrage ist allerdings älter und bezieht sich auf Beschäftigte, nicht
				auf die Gesamtbevölkerung.
			</p>
			<p>Links zu den Umfragen und Diskussionen:</p>
			<p><a href="https://unia.ch/fileadmin/bern/2025-08-27_Dossier_Befragung_Ladenoeffnungszeiten.pdf" target="_blank" class="text-yellow-500">2025-08-27_Dossier_Befragung_Ladenoeffnungszeiten.pdf</a></p>
			<p><a href="https://www.srf.ch/radio-srf-1/mehr-sonntagsverkaeufe-umstrittene-ladenoeffnungszeiten-shoppen-auch-am-sonntag" target="_blank" class="text-yellow-500">Braucht es mehr Sonntagsverkäufe in der Schweiz? - Radio SRF 1 - SRF</a></p>
			<p><a href="https://www.sgb.ch/themen/arbeit/detail/verkaeuferinnen-wollen-nicht-noch-laenger-arbeiten" target="_blank" class="text-yellow-500">VerkäuferInnen wollen nicht noch länger arbeiten</a></p>
		</ContentSection>

		<ContentSection title="Ein Schweizer Späti wäre also möglich, jedoch auf andere Art und Weise als Berlin.">
			<p>
				Die rechtliche Situation erklärt einen wichtigen Unterschied zwischen Berlin und der Schweiz.
			</p>
			<p>
				In der Schweiz fehlt nicht grundsätzlich die Möglichkeit, spät einzukaufen. Kioske, Tankstellenshops und
				bestimmte Bahnhofsgeschäfte dürfen bereits heute unter bestimmten Voraussetzungen sehr lange oder
				sonntags geöffnet sein.
			</p>
			<p>
				Was fehlt, ist die Kombination aus Quartierladen, langen Öffnungszeiten und sozialem Treffpunkt, die den
				Berliner Späti ausmacht.
			</p>
			<p>
				Die politische Diskussion über die Möglichkeit 12 anstelle von vier Sonntagen ist umstritten. Der Bundesrat
				wollte den Kantonen mehr Möglichkeiten geben, der Ständerat lehnte dies im Juni 2026 jedoch knapp ab.
				Die Frage, wie viel Einkaufsmöglichkeiten eine Gesellschaft am Sonntag braucht und wie viel Schutz die
				Beschäftigten benötigen, bleibt damit offen.
			</p>
			<p>
				Das Konzept kann vom jetzigen Standpunkt aus nicht eins zu eins umgesetzt werden. Die rechtliche Lage müsste
				angepasst werden oder das Konzept muss an die Gesetze angepasst werden.
			</p>
		</ContentSection>
	</PageContainer>
</template>

<style scoped>

</style>
