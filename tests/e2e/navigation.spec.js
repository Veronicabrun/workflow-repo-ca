import { test, expect } from "@playwright/test";

test.describe("Venue Navigation", () => {
  test("User can view venue details", async ({ page }) => {
    // Naviger til startsiden
    await page.goto("/");

    // Vent på at venue-listen lastes inn
    const venueContainer = page.locator("#venue-container");
    await expect(venueContainer).not.toHaveText("Loading...");

    // Vent på at minst ett venue vises
    const firstVenue = venueContainer.locator(":scope > *").first();
    await expect(firstVenue).toBeVisible();

    // Klikk på første venue
    await firstVenue.click();

    // Verifiser at "Venue details" vises i overskriften
    const heading = page.locator("h1");
    await expect(heading).toContainText("Venue details");
  });
});
