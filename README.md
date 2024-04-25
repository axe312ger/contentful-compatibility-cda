# Research: dual packages with browser support

We need to find a way to export our library as CJS, ESM and to the browser. Additionally, there are now dependencies that are ONLY available in ESM syntax, potentially breaking CJS only environments.

## We should ensure the plugin works in all common JS environments:

- CJS
- ESM
- TS
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


## Results:

yes, updating p-queue to "ESM only" creates issues!!! Rollup might fix it, but having a bundle as a dependency of a SDK lib is super weird and might be a red flag for some (security) consultants!


## Plan:

* SDK in esm files + cjs bundle (for compatability reasons? maybe? do we REALLY need it?  Lets see later!)
* If we can, rip out webpack, use rollup. Make sure ESM only dependencies are bundled into our CJS variants
* If possible, make sure all libs use the same typescript/rollup/babel/browserlist config


## today

* core: ESM + TS only
* JS sdk: make cjs bundle via rollup, esm ts only. browser bundle also via rollup.