# Glossar Red Rigged Raffle

## Einführung
Dieses Glossar erklärt die wichtigsten Begriffe aus dem Red Rigged Raffle Code und ihre Bedeutung. Die ursprünglichen Bezeichner stammen aus der "Red-Sprache" und wurden in verständliche deutsche und englische Begriffe übersetzt.

## Klassen und ihre Bedeutung

### AbsneakenderHase
- Deutsch: Verlosungssystem
- Englisch: RafflePrizeDistributor
- Erklärung: Die Hauptklasse, die für die Durchführung der Verlosung zuständig ist.

### GewinnbarerHase
- Deutsch: Gewinn
- Englisch: Prize
- Erklärung: Repräsentiert einen Preis, der bei der Verlosung gewonnen werden kann.

## Methoden und ihre Funktionen

### absneaken
- Deutsch: verteileGewinne
- Englisch: distributePrizes
- Erklärung: Die zentrale Methode, die die Gewinne an die Teilnehmer verteilt.

## Wichtige Variablen im Code

### Teilnehmerverwaltung
- brokieMokies → teilnehmer (participants): Liste aller Teilnehmer an der Verlosung
- mokieBrokies → gemischteTeilnehmer (shuffledParticipants): Zufällig sortierte Teilnehmerliste

### Preisverwaltung
- gewinnbareHasen → preise (prizes): Liste aller verfügbaren Preise
- zahlenmässigerHase → anzahlVerfügbar (availableQuantity): Anzahl der noch verfügbaren Exemplare eines Preises

### Verlosungsprozess
- zufälligerHase → zufallsZahl (randomNumber): Zufallszahl für die Auswahl
- rangierterHase → ausgewählterIndex (selectedIndex): Position des ausgewählten Teilnehmers
- ausgesuchterHase → ausgewählterTeilnehmer (selectedParticipant): Der aktuell ausgewählte Teilnehmer
- gewonnenerHase → aktuellerPreis (currentPrize): Der Preis, der gerade vergeben wird
- gewinnenderHase → aktuellerGewinner (currentWinner): Der Teilnehmer, der gerade einen Preis gewinnt
- richieMichies → ergebnis (result): Die finale Zuordnung von Gewinnern zu Preisen

## Dateien und ihre Bedeutung

### testender-hase.test.ts
- Deutsch: verlosung.test.ts
- Englisch: raffle.test.ts
- Erklärung: Enthält die Tests für die Verlosungslogik, um sicherzustellen, dass alles korrekt funktioniert.

## Fazit
Die Übersetzung der Bezeichner macht den Code nun für Außenstehende verständlich und erleichtert die Wartung und Weiterentwicklung des Systems. Die ursprünglichen "Red"-Bezeichner waren zwar kreativ, aber für die professionelle Softwareentwicklung nicht geeignet. 