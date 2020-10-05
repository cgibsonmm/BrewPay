const { reloadApp } = require("detox-expo-helpers");

describe("HomeScreen", () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it("should have the logo", async () => {
    await element(by.id("main-logo")).toHaveText("BrewPay");
  });
});
