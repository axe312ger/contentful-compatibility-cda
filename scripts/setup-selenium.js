const { Builder, Browser, Capabilities } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

async function setupSeleniumClient() {
  const options = new chrome.Options();
  options.addArguments("--headless", "--no-sandbox", "--disable-dev-shm-usage");

  return new Builder()
    .forBrowser(process.env.BROWSER || Browser.SAFARI)
    .setChromeOptions(options)
    .build();
}

async function setupSeleniumClientBrowserStack() {
  const options = new chrome.Options();
  options.addArguments("--headless", "--no-sandbox", "--disable-dev-shm-usage");

  return new Builder()
    .forBrowser(process.env.BROWSER || Browser.SAFARI)
    .setChromeOptions(options)
    .usingServer("http://localhost:4444/wd/hub")
    .withCapabilities(Capabilities.chrome())
    .build();
}

module.exports = {
  setupSeleniumClient,
  setupSeleniumClientBrowserStack,
};
