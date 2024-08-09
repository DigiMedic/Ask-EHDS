# Ask-EHDS Dokumentace

Tento projekt obsahuje dokumentaci pro Evropský prostor pro zdravotní data (EHDS) a jeho implementaci v České republice. Je vytvořen pomocí [Docusaurus](https://docusaurus.io/), moderního generátoru statických webových stránek.

## O projektu

Ask-EHDS je iniciativa zaměřená na poskytování komplexních informací o Evropském prostoru pro zdravotní data (EHDS) a jeho dopadu na české zdravotnictví. Naším cílem je vzdělávat a informovat zdravotnické profesionály, pacienty a veřejnost o výhodách a implementaci EHDS v České republice.

## Obsah dokumentace

Naše dokumentace pokrývá následující klíčové oblasti:

- Úvod do EHDS
- Technické aspekty EHDS
- Bezpečnost a ochrana dat v EHDS
- Implementace EHDS v ČR
- EHDS a české zdravotnictví

## Roadmapa projektu

### Fáze 1: Základní dokumentace (Současný stav)
- [x] Vytvoření úvodních dokumentů o EHDS
- [x] Nastavení základní struktury dokumentace
- [x] Implementace vícejazyčné podpory (čeština, angličtina)

### Fáze 2: Rozšíření obsahu (Q3-Q4 2023)
- [ ] Přidání detailních případových studií
- [ ] Rozšíření sekce o technických aspektech EHDS
- [ ] Vytvoření interaktivních prvků pro lepší pochopení EHDS

### Fáze 3: Integrace a optimalizace (Q1-Q2 2024)
- [ ] Implementace vyhledávacího systému v dokumentaci
- [ ] Optimalizace pro mobilní zařízení
- [ ] Integrace s externími zdroji dat o EHDS

### Fáze 4: Komunita a spolupráce (Q3-Q4 2024)
- [ ] Vytvoření fóra pro diskuzi o EHDS
- [ ] Implementace systému pro příspěvky od komunity
- [ ] Organizace webinářů a online událostí o EHDS

## Instalace

```bash
$ yarn
```

## Lokální vývoj

```bash
$ yarn start
```

Tento příkaz spustí lokální vývojový server a otevře okno prohlížeče. Většina změn se projeví živě bez nutnosti restartovat server.

## Sestavení

```bash
$ yarn build
```

Tento příkaz generuje statický obsah do adresáře `build`, který lze hostovat na jakémkoli hostingu pro statický obsah.

## Nasazení

Použití SSH:

```bash
$ USE_SSH=true yarn deploy
```

Bez použití SSH:

```bash
$ GIT_USER=<Vaše GitHub uživatelské jméno> yarn deploy
```

Pokud používáte GitHub Pages pro hosting, tento příkaz je pohodlný způsob, jak sestavit web a odeslat ho do větve `gh-pages`.

## Přispívání

Vítáme příspěvky od komunity! Pokud chcete přispět k projektu Ask-EHDS, prosím:

1. Forkněte repozitář
2. Vytvořte novou větev pro vaše změny
3. Proveďte změny a commitněte je
4. Odešlete pull request s popisem vašich změn

Před odesláním pull requestu se ujistěte, že vaše změny jsou v souladu s existujícím stylem kódu a dokumentace.

## Licence

Tento projekt je licencován pod [MIT licencí](LICENSE).

## Kontakt

Pro více informací o projektu Ask-EHDS navštivte naši [webovou stránku](https://ask-ehds.eu) nebo nás kontaktujte na [info@ask-ehds.eu](mailto:info@ask-ehds.eu).