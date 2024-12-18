# Contentful Compatibility Suite

This repository tests and validates the compatibility of Contentful SDKs across various JavaScript environments. It provides automated tests, example applications, and a framework to ensure reliable SDK usage in diverse runtime and build systems.

## Purpose

Guarantee that Contentful SDKs:
- Work seamlessly in **Node.js** (CJS, ESM, TypeScript).
- Are compatible with **browsers**, including mobile platforms.
- Integrate reliably with **frameworks, bundlers, and runtimes**.

This suite serves as both a compatibility testbed and a reference for developers implementing Contentful SDKs in real-world projects.

## Supported Environments

For the complete list, visit: [Supported Environments](https://github.com/contentful-userland/contentful-compatibility/tree/main/environments)

### Highlights:
- **Node.js**: CJS, ESM, TypeScript
- **Browsers & Mobile**: Tested on desktop, iOS, and Android
- **Frameworks**: Next.js, Gatsby, Nuxt, Svelte, Angular, React Native
- **Bundlers**: Webpack, Rollup, Vite, Parcel

## Quick Start

### Requirements
- Node.js v18 or higher

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/contentful-userland/contentful-compatibility.git
   cd contentful-compatibility
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. **(Optional)** Provide BrowserStack credentials via environment variables:
   ```bash
   export BROWSERSTACK_USERNAME=your_username
   export BROWSERSTACK_ACCESS_KEY=your_access_key
   ```

4. Run the suite:
   ```bash
   npm start
   ```

## Contributing

We welcome contributions! You can:
- Add new environments or edge-case tests.
- Expand example applications with advanced usage scenarios.
- Enhance the overall test coverage or suggest features.
