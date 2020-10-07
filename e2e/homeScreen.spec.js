import { by, element, expect } from "detox";
const { reloadApp } = require("detox-expo-helpers");

describe("HomeScreen", () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it("should have the logo", async () => {
    await expect(element(by.id("main-logo"))).toExist();
    await expect(element(by.id("main-logo"))).toHaveText("BrewPay");
  });
});
