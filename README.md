# Contentful Compatibility Suite

This repository tests and demonstrates the compatibility of Contentful SDKs across various JavaScript environments. It provides automated tests, example implementations, and a framework for validating SDK usage in diverse runtime and build systems.

## Purpose

Ensure Contentful SDKs work reliably in:
- Node.js (CJS, ESM, TypeScript)
- Browsers (mobile and desktop)
- Popular frameworks, bundlers, and runtimes

## Supported Environments

Full list here: https://github.com/contentful-userland/contentful-compatability/tree/main/environments

### Node.js
- **CommonJS (CJS)**
- **ES Modules (ESM)**
- **TypeScript (CJS & ESM)**

### Browsers & Mobile
- Desktop and mobile browser bundles tested with Selenium
- iOS and Android mobile platforms

### Frameworks
- **Gatsby**
- **Next.js**
- **Nuxt**
- **Svelte**
- **Angular**
- **React Native**

### Bundlers
- **Webpack**
- **Rollup**
- **Vite** (with TypeScript)
- **Parcel**

## Quick Start

**Important:** You will need Node v18 as this is currently supported accross all environments.

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-link.git
   cd contentful-sdk-compatibility-suite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Optional: Provide browserstack credentials via env variables
   ```bash
   BROWSERSTACK_USERNAME=benediktroetsch_GN0yug
   BROWSERSTACK_ACCESS_KEY=qBvXgbx2saYVwUCASqBm
   ```

4. Run the suite:
   ```bash
   npm start
   ```


## Contributing

Contributions are welcome! Add environments, new ways of using the library in one fo the existing environments, improve tests in general, or suggest more features.
