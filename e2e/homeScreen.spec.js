import { by, element, expect } from "detox";
const { reloadApp } = require("detox-expo-helpers");

describe("HomeScreen", () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it("should have the logo", async () => {
    await expect(element(by.text("BrewPay"))).toBeVisible();
  });
});
