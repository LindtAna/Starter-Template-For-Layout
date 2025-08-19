import { defineConfig } from 'minista'
import path from 'path'

/**
 * @see https://minista.qranoko.jp/docs/config-file
 */
export default defineConfig({
  // Projektstammverzeichnis (in der Regel unverändert)
  root: '',

  // Basis-URL (falls Deployment nicht im Root, anpassen)
  base: '/',

  // Ordner für Public-Dateien (werden unverändert kopiert)
  public: 'public',

  // Ausgabeordner für Build-Ergebnisse
  out: 'dist',

  assets: {
    // Gemeinsamer Assets-Ordner (Schriften, Icons, Bilder, Skripte)
    outDir: 'assets',
    outName: '[name]',

    //  Bilder (werden beim Build optimiert und in verschiedenen Größen erzeugt)
    images: {
      outDir: 'assets/images',
      outName: '[name]',
      remoteName: 'remote',
      optimize: {
        layout: 'constrained',
        breakpoints: [
          360, 400, 640, 800, 1024, 1280, 1440, 1920, 2560, 2880, 3840,
        ],
        resolution: [1, 2],
      },
    },

    // Unterstützung für SVG-Import als React/JSX-Komponenten
    svgr: {
      svgrOptions: {},
    },

    // SVG-Sprite aus dem Icon-Verzeichnis
    icons: {
      srcDir: 'src/assets/icons',
      outDir: 'assets/images',
      outName: '[dirname]',
      svgstoreOptions: {
        // Entfernt fill/stroke aus Symbolen, um Farben per CSS zu steuern
        cleanSymbols: ['fill', 'stroke'],
      },
    },

    // Schriften (woff2 etc.)
    fonts: {
      outDir: 'assets/fonts',
      outName: '[name]',
    },

    // Name des Haupt-Bundles
    bundle: {
      outName: 'bundle',
    },
  },

  resolve: {
    // Alias-Konfiguration @/ → src/
    alias: [
      {
        find: '@/',
        replacement: path.resolve('src') + '/',
      },
    ],
  },

  css: {
    modules: {
      // Verhalten der CSS-Module 
      scopeBehaviour: 'local',
      globalModulePaths: [],
      generateScopedName: undefined,
      hashPrefix: '',
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      scss: {
        // Helpers automatisch in alle SCSS-Dateien einbinden
        additionalData: `
          @use '@/styles/helpers' as *;
        `,
        // Warnungen der alten API unterdrücken
        silenceDeprecations: ['legacy-js-api'],
      },
      less: {},
      stylus: {},
    },
  },

  // Zusätzliche Vite-Optionen können hier übergeben werden
  vite: {},
})
