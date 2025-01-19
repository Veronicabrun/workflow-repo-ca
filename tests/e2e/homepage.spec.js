import { test, expect } from "@playwright/test";

test("homepage should show the News link", async ({ page }) => {
  // Gå til Noroff sin nettside
  await page.goto("https://www.noroff.no/en");

  // Sjekk at "News"-lenken er synlig
  await expect(page.getByRole("link", { name: "News" })).toBeVisible();
});
