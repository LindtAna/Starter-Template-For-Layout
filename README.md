# STARTER TEMPLATE

Ein Layout für moderne Frontend-Projekte auf Basis von Minista mit JSX-Unterstützung (ohne React), SCSS, Linting und Autoformatierung.

# Start

Erstelle ein Projekt mit npm create: `npm create`:

```bash
npm create friendly-frontend@latest
```

Für die TypeScript-Variante füge den Flag `--ts` hinzu:

```bash
npm create friendly-frontend@latest -- --ts
```

# Was ist enthalten:

Der Starter umfasst:

- [Minista] mit JSX-Support ohne React(https://minista.qranoko.jp/)
- Bundling über [Vite](https://vite.dev/)
- Styles:
  - [SCSS](https://sass-lang.com/)
  - [PostCSS](https://postcss.org/) + Plugins: [`preset-env`](https://www.npmjs.com/package/postcss-preset-env), [`pxtorem`](https://www.npmjs.com/package/postcss-pxtorem)
  - CSS Normalize: [`@a1rth/css-normalize`](https://www.npmjs.com/package/@a1rth/css-normalize)
  - Utility-Mixin und Funktionen in `src/styles/helpers`

- Nützliche Dependencies:
  - [`clsx`](https://www.npmjs.com/package/clsx) — praktisches Zusammenführen von CSS-Klassen
  - [`imask`](https://www.npmjs.com/package/imask) Input-Masken

- Linting und Formatierung::
  - [`ESLint`](https://eslint.org/), [`Stylelint`](https://stylelint.io/), [`Prettier`](https://prettier.io/)
  - Gemeinsame Konfiguration:: [`friendly-frontend-lint-config`](https://www.npmjs.com/package/friendly-frontend-lint-config)
- Komfort:
  - Aliase über`jsconfig.json` (`@/ → src/`)
  - orgefertigte src/ -Struktur mit Komponenten, Sections, Utilities und Layouts

# Skripte

```bash
npm run start         # Start im Dev-Modus
npm run build         # Build erzeugen
npm run preview       # Lokale Vorschau des Builds

npm run lint:js       # JS-Code prüfen
npm run lint:js:fix   # JS-Code automatisch korrigieren
npm run lint:css      # CSS-Code prüfen
npm run lint:css:fix  # CSS-Code automatisch korrigieren
npm run format        # Formatierung prüfen
npm run format:fix    # Formatierung anwenden
npm run lint          # Komplettcheck (Code & Formatierung ohne Fixes)
npm run lint:fix      # Komplettcheck mit Auto-Fix und Formatierung

```

# Projektstruktur

```csharp

├── public/               # Statische Dateien, die nicht vom Bundler verarbeitet werden
├── src/
│   ├── assets/           # Bilder, Icons, Favicons und Schriftarten
│   │   ├── favicons/     # Favicons für die Website
│   │   ├── fonts/        # Eingebundene Schriftarten (woff2 usw.)
│   │   ├── icons/        # SVG-Icons (für Sprite)
│   │   └── images/       # Sonstige Bilder
│   │
│   ├── components/       # Kleine wiederverwendbare Komponenten (Button, Input etc.)
│   ├── constants/        # Konstanten, Enums, Konfigurationen, Wörterbücher etc.
│   ├── layouts/          # Seiten-Struktur-Komponenten (Header, Content, Section, Footer)
│   ├── modules/          # JavaScript-Module (z. B. OverlayMenu, InputMaskCollection)
│   ├── pages/            # Seiten-Dateien (Minista routet automatisch alles hier)
│   ├── sections/         # Wiederverwendbare Page-Sections (Hero, About, Features etc.)
│   ├── styles/           # Projektweite Styles (Variablen, Mixins, Resets)
│   ├── utils/            # Utility-Funktionen (z. B. pxToRem, debounce)
│   ├── global.jsx        # Globales Layout für alle Seiten (Minista Feature)
│   └── main.js           # Einstiegspunkt für Browser-JS-Logik
│
├── .gitignore             # Von Git ignorierte Dateien und Ordner
├── .prettierignore        # Von Prettier ignorierte Dateien und Ordner
├── eslint.config.js       # ESLint-Konfiguration (JS/JSX-Prüfung)
├── jsconfig.json          # Pfad- und Autocomplete-Einstellungen für JS (IDE & Bundler)
├── minista.config.js      # Minista-Konfiguration
├── package.json           # Projekt-Dependencies, Skripte, Metadaten
├── package-lock.json      # Festgeschriebene Versionen aller Pakete
├── postcss.config.js      # PostCSS-Konfiguration (preset-env, pxtorem etc.)
├── prettier.config.js     # Prettier-Einstellungen
├── README.md              # Projektdokumentation
└── stylelint.config.js    # Stylelint-Konfiguration (CSS/SCSS-Prüfung)

```

# Was besonders praktisch ist
- JSX ohne React – fast wie HTML, aber mächtiger: JS einbetten und Markup-Snippets auslagern

- Vite + Minista nutzt Vite als Bundler für moderne, schnelle Builds mit HMR

- Icon-Komponente mit automatischer Farbsteuerung.Wrapper-Komponente in src/components/Icon.jsx leitet fill und stroke weiter und nutzt currentColor, sodass SVG-Icons stets zur Textfarbe passen

- Leistungsstarke Sass-Helpers in src/styles/helpers/:

  · Funktionen (fluid, fluid-to-laptop)
  · Mixins für Media Queries (mobile, mobile-above, hover etc.)
  · Variablen und Konstanten
  ·Utility-CSS-Klassen für Standardaufgaben:
       .container , .visually-hidden , .visible-tablet, .hidden-tablet, .visible-mobile, .hidden-mobile

# Minista-Dokumentation

   https://minista.qranoko.jp/docs/




 Minista-Konfiguration – minista.config.js https://minista.qranoko.jp/docs/config-file

Globales Layout – src/global.jsx https://minista.qranoko.jp/docs/global

Seiten-Metadaten – Variable metadata in src/pages/**.jsx https://minista.qranoko.jp/docs/metadata

<Head>-Komponente – für Meta-Tags, <title> usw. https://minista.qranoko.jp/docs/head

<Image>-Komponente – optimiertes Laden von Bildern https://minista.qranoko.jp/docs/image

<Icon>-Komponente – SVG-Sprite und Icons https://minista.qranoko.jp/docs/svg-sprite-icon

    In diesem Template wurde die eingebaute <Icon> noch einmal in src/components/Icon.jsx umwickelt.
    Sie leitet automatisch `fill` und `stroke` weiter und nutzt `currentColor`, damit man die Icon-Farbe bequem per CSS steuern kann.


# Für die TypeScript-Version: `npm create friendly-frontend@latest -- --ts`


Original concept and template : Aleksander Lamkov
GitHub: https://github.com/aleksanderlamkov/friendly-frontend-starter

