import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("User can navigate to a venue", async ({ page }) => {
    console.log("🟢 Starter navigasjonstesten...");

    // 1️⃣ **Gå til hjemmesiden**
    await page.goto("/");

    // 2️⃣ **Vent en kort tid først (hjelper med timing-problemer)**
    await page.waitForTimeout(3000);

    // 3️⃣ **Vent til venue-listen er lastet inn**
    await page.waitForSelector(".venue-item", { timeout: 15000 });

    console.log("✅ Venue-listen er lastet inn!");

    // 4️⃣ **Klikk på første venue**
    const firstVenue = page.locator(".venue-item").first();
    await firstVenue.click();
    console.log("✅ Klikket på første venue!");

    // 5️⃣ **Sjekk at venue-detaljsiden vises**
    await expect(page.locator("h1")).toContainText("Venue details");
    console.log("✅ Navigasjon til Venue Details er vellykket!");
  });
});
