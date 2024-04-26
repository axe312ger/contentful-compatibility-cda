const { Builder, By, Browser, until } = require("selenium-webdriver");
const assert = require("assert");

(async () => {
  const driver = await new Builder().forBrowser(Browser.SAFARI).build();

  await driver.get("http://localhost:4200/");

  const loadingResult = await driver.findElement(By.id("loading-entries"));
  const loadingResultText = await loadingResult.getText();
  assert.strictEqual(
    loadingResultText,
    "Loading...",
    "Result text does not indicate success."
  );

  await driver.sleep(2000);

  // Check for success
  const loadedResultText = await loadingResult.getText();
  assert.strictEqual(
    loadedResultText,
    "✅ Success!",
    "Result text does not indicate success."
  );
  assert(
    !loadedResultText.startsWith("🚫 Error"),
    "Result text indicates an error."
  );

  await driver.quit();
})();
