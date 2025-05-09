import { AbsneakenderHase } from "./absneakender-hase";
import { GewinnbarerHase } from "./gewinnbarer-hase";

test("die Verlosung verteilt jeden Preis die korrekte Anzahl Male", () => {
  // Arrange
  const teilnehmer = ["@T1", "@T2", "@T3", "@T4", "@T5"];
  const preise = [
    new GewinnbarerHase("Preis A", 2),
    new GewinnbarerHase("Preis B", 1),
  ];
  
  // Act
  const verlosung = new AbsneakenderHase(teilnehmer, preise);
  const ergebnis = verlosung.verteileGewinne();
  
  // Assert
  const preisHäufigkeiten = new Map<string, number>();
  for (const preis of ergebnis.values()) {
    preisHäufigkeiten.set(preis, (preisHäufigkeiten.get(preis) || 0) + 1);
  }
  
  expect(preisHäufigkeiten.get("Preis A")).toBe(2);
  expect(preisHäufigkeiten.get("Preis B")).toBe(1);
});

test("die Verlosung verteilt die korrekte Anzahl Preise", () => {
  // Arrange
  const teilnehmer = ["@Teilnehmer1", "@Teilnehmer2", "@Teilnehmer3"];
  const preise = [
    new GewinnbarerHase("Preis 1", 1),
    new GewinnbarerHase("Preis 2", 2),
  ];
  
  // Act
  const verlosung = new AbsneakenderHase(teilnehmer, preise);
  const ergebnis = verlosung.verteileGewinne();
  
  // Assert
  // Erwartete Anzahl Preise: 1 + 2 = 3
  expect(ergebnis.size).toBe(3);
});
