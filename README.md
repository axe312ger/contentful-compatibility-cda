# Research: dual packages with browser support

We need to find a way to export our library as CJS, ESM and to the browser. Additionally, there are now dependencies that are ONLY available in ESM syntax, potentially breaking CJS only environments.

## We should ensure the plugin works in all common JS environments:

- node - CJS
- node - ESM
- node - TS
- browsers and mobile devices -> browser bundle
  - https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs
  - OR via Cypress / Playwright (?) 
  - iOS / android / mobile!
- bundlers - what should we do? only bundle? or also test if a website with the bundle can be run? at least on headless chrome locally? playwright?
  - Webpack
  - rollup
- Gastby
  - Gatsby TS
- Nextjs
  - Nextjs TS

- Nuxt
- Svelte
- Angular
- React native

## Assumptions

- The user has at least node v18 in use to run / build the project

