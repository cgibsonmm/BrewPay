const { reloadApp } = require("detox-expo-helpers");

describe("HomeScreen", () => {
  beforeEach(async () => {
    await reloadApp();
  });

  xit("should have the logo", async () => {
    await element(by.id("main-logo")).toHaveText("BrewPay");
  });

  xit("should allow a user to by a beer", async () => {
    await element(by.id("beer-list")).tap();
    await expect(element(by.text("Buy Now"))).toBeVisible();
    await element(by.id("buy-now")).tap();

    await element(by.id("amount"));
  });
});
