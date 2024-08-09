---
sidebar_position: 1
---

# Technické standardy a protokoly EHDS

## Úvod

Evropský prostor pro zdravotní data (EHDS) se opírá o řadu technických standardů a protokolů, které zajišťují interoperabilitu a bezpečnou výměnu dat mezi různými systémy a zeměmi. Tento dokument poskytuje přehled klíčových technických standardů a protokolů používaných v rámci EHDS.

## Klíčové technické standardy

### HL7 FHIR (Fast Healthcare Interoperability Resources)

HL7 FHIR je standard pro elektronickou výměnu zdravotnických informací. Poskytuje rámec pro sdílení dat mezi různými systémy a je základním kamenem interoperability v EHDS.

Hlavní charakteristiky:
- Využívá moderní webové technologie (REST, JSON)
- Podporuje flexibilní modelování dat
- Umožňuje snadnou implementaci a testování

:::tip Příklad využití
Nemocnice ve Švédsku může pomocí FHIR API bezpečně sdílet laboratorní výsledky pacienta s odbornou klinikou v Německu. Tato standardizace zajišťuje, že data jsou strukturována konzistentně a lze je snadno integrovat do různých zdravotnických IT systémů v celé Evropě.
:::

### IHE (Integrating the Healthcare Enterprise) profily

IHE profily definují specifické implementace zavedených standardů pro dosažení efektivní integrace systémů. V kontextu EHDS jsou důležité pro zajištění konzistentní implementace standardů napříč různými zdravotnickými systémy.

Klíčové IHE profily pro EHDS:
- XDS (Cross-Enterprise Document Sharing)
- PIX (Patient Identifier Cross-Referencing)
- PDQ (Patient Demographics Query)

### DICOM (Digital Imaging and Communications in Medicine)

DICOM je standard pro manipulaci, ukládání, tisk a přenos lékařských obrazových informací. V rámci EHDS je klíčový pro sdílení a výměnu medicínských snímků a souvisejících dat.

Hlavní funkce:
- Standardizovaný formát pro medicínské snímky
- Podpora pro různé modality (CT, MRI, ultrazvuk atd.)
- Metadata pro popis a kategorizaci snímků

### OpenEHR

OpenEHR je otevřená standardní specifikace pro správu elektronických zdravotních záznamů. V EHDS může být využita pro vytváření interoperabilních a dlouhodobě udržitelných zdravotních záznamů.

Klíčové koncepty:
- Dvouúrovňové modelování (oddělení informačního a znalostního modelu)
- Archetypový přístup k modelování klinických dat
- Podpora pro sémantickou interoperabilitu

## Bezpečnostní protokoly

### OAuth 2.0 a OpenID Connect

Tyto protokoly jsou využívány pro bezpečnou autorizaci a autentizaci v rámci EHDS.

OAuth 2.0:
- Poskytuje bezpečný rámec pro autorizaci
- Umožňuje aplikacím získat omezený přístup k uživatelským účtům

OpenID Connect:
- Rozšiřuje OAuth 2.0 o funkce pro autentizaci
- Umožňuje ověření identity uživatele

:::tip Praktický příklad
Když lékař v České republice potřebuje přistoupit k záznamům pacienta uloženým v systému v Rakousku, může použít OpenID Connect pro ověření své identity a OAuth 2.0 pro získání oprávnění k přístupu k specifickým datům pacienta.
:::

## Terminologické standardy

### SNOMED CT (Systematized Nomenclature of Medicine -- Clinical Terms)

SNOMED CT je komplexní, vícejazyčná klinická zdravotnická terminologie. V EHDS hraje klíčovou roli v zajištění sémantické interoperability.

Hlavní výhody:
- Standardizovaná terminologie pro klinické pojmy
- Podpora pro překlad mezi různými jazyky
- Hierarchická struktura umožňující detailní klasifikaci

### LOINC (Logical Observation Identifiers Names and Codes)

LOINC je univerzální standard pro identifikaci lékařských laboratorních pozorování. V EHDS je využíván pro standardizaci laboratorních a klinických výsledků.

Klíčové charakteristiky:
- Jedinečné kódy pro laboratorní a klinická pozorování
- Podpora pro mezinárodní použití a překlad
- Usnadňuje agregaci a analýzu dat z různých zdrojů

### ICD-10 (International Classification of Diseases, 10th revision)

ICD-10 je mezinárodní klasifikační systém pro kódování nemocí, příznaků a dalších zdravotních stavů. V EHDS je využíván pro standardizaci diagnostických informací.

Využití v EHDS:
- Jednotné kódování diagnóz napříč EU
- Podpora pro statistické analýzy a epidemiologické studie
- Usnadnění přeshraničního sdílení zdravotních informací

## Závěr

Implementace těchto technických standardů a protokolů v rámci EHDS je klíčová pro vytvoření robustního, interoperabilního a bezpečného ekosystému zdravotních dat v celé EU. Tyto standardy umožňují efektivní sdílení dat mezi různými systémy a zeměmi, přičemž zajišťují bezpečnost a ochranu soukromí pacientů.

:::tip
Pro více informací o implementaci EHDS a jeho technické infrastruktuře navštivte sekci [Implementace EHDS](../implementation/implementace-ehds.md).
:::