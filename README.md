# Ask-EHDS

![Cover Image](https://i.ibb.co/tqscZnK/DALL-E-2024-07-14-15-13-30-A-clean-pixel-art-style-illustration-representing-the-Ask-EHDS-project-in.webp)

**Ask-EHDS** je open-source konverzační platforma navržená pro podporu zdravotnických odborníků v procesu elektronizace zdravotnictví. Projekt využívá umělou inteligenci pro zpracování dotazů od uživatelů a poskytuje odpovědi založené na širokém znalostním základě a pokročilé technologii.

## Účel a Mise

Cílem Ask-EHDS je usnadnit zdravotnickým odborníkům přístup k informacím a nástrojům, které zlepší jejich rozhodování a péči o pacienty. Platforma kombinuje moderní technologie, aby zodpovídala dotazy uživatelů efektivně a přesně.

## Architektura

### Backend

- **AI Framework:** 
  - Ask-EHDS využívá **LangChain**, což je pokročilý AI framework, který umožňuje efektivní integraci a řízení jazykových modelů (LLM) pro zpracování dotazů od uživatelů. LangChain umožňuje snadné skládání řetězců komponent pro optimalizaci výkonu a přesnosti odpovědí.

- **Vectorová Databáze:** 
  - Platforma je propojena s vektorovou databází pomocí LangChain, což umožňuje rychlé vyhledávání a porovnávání relevantních informací. LangChain integruje vektorové vyhledávání pro efektivní zpracování velkého množství dat.

- **Knowledge Base:** 
  - Znalostní základna, která je pravidelně aktualizována a spravována pomocí LangChain, zajišťuje, že odpovědi jsou vždy aktuální a přesné. LangChain poskytuje nástroje pro správu a automatické aktualizace obsahu znalostní báze.

### Frontend

- **Next.js:** 
  - Uživatelské rozhraní je postaveno na **Next.js**, což je moderní framework pro tvorbu rychlých a responzivních webových aplikací. LangChain podporuje serverové funkce v rámci Next.js, což zajišťuje efektivní komunikaci s uživateli a rychlé poskytování odpovědí.

## Klíčové Funkce

- **Zpracování Dotazů:** 
  - LangChain řídí zpracování dotazů uživatelů pomocí jazykových modelů, které poskytují přesné odpovědi v reálném čase. To zahrnuje použití promptů a modelů optimalizovaných pro specifické zdravotnické scénáře.

- **Podpora Zdravotnických Odborníků:** 
  - Platforma využívá LangChain pro poskytování personalizovaných odpovědí, které pomáhají zdravotnickým odborníkům při orientaci ve zdravotnických datech a podporují jejich rozhodování.

- **Automatické Aktualizace:** 
  - LangChain umožňuje neustálé vylepšování a aktualizace znalostní báze a algoritmů, čímž zajišťuje, že odpovědi jsou vždy aktuální a relevantní.

## Technické Detaily

- **Jazykový Model:** 
  - Ask-EHDS využívá LangChain k řízení jazykových modelů, pro generování odpovědí a analýzu dotazů. LangChain podporuje různé modely a poskytuje flexibilitu při výběru a konfiguraci modelů pro různé úkoly.

- **Vectorová Databáze:** 
  - LangChain umožňuje integraci s vektorovou databází, což usnadňuje rychlé a efektivní vyhledávání a porovnávání informací.

- **Next.js Frontend:** 
  - Uživatelské rozhraní je postaveno na Next.js, kde LangChain zajišťuje serverové funkce a podporu pro efektivní komunikaci s uživateli.

## Výhody Pro Zdravotnické Odborníky

- **Efektivita:** 
  - Rychlý přístup k relevantním informacím šetří čas a zlepšuje efektivitu práce díky integraci LangChain.

- **Přesnost:** 
  - Vysoce přesné odpovědi jsou zajištěny pokročilým AI modelem a pravidelně aktualizovanou znalostní bází spravovanou pomocí LangChain.

- **Podpora Rozhodování:** 
  - LangChain pomáhá při řešení komplexních zdravotnických otázek a poskytuje podporu v procesu rozhodování prostřednictvím analýzy dat a prediktivních modelů.
