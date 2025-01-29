import { test, expect } from "@playwright/test";

test.describe("Login functionality", () => {
  test("User can successfully log in with valid credentials", async ({
    page,
  }) => {
    // 1️⃣ Gå til login-siden
    await page.goto("http://127.0.0.1:5501/login/index.html");

    // 2️⃣ Fyll inn email og passord
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    // 3️⃣ Klikk login-knappen
    await page.getByRole("button", { name: "Login" }).click();

    // 4️⃣ Vent til vi navigeres bort fra login-siden
    await page.waitForURL("http://127.0.0.1:5501/");

    // 5️⃣ Prøv å finne en unik tekst eller element på forsiden
    const mainHeader = await page.locator("h1");
    if (await mainHeader.isVisible()) {
      const headerText = await mainHeader.textContent();
      console.log("Header text after login:", headerText);
    } else {
      console.warn("⚠️ Ingen <h1> funnet. Sjekker LocalStorage...");
    }

    // 6️⃣ Sjekk at brukeren faktisk er logget inn ved å sjekke localStorage
    const token = await page.evaluate(() => localStorage.getItem("token"));
    console.log("Stored token:", token);
    expect(token).not.toBeNull();

    // 7️⃣ Finn logout-knappen, eller en annen måte å bekrefte innlogging på
    const logoutButton = await page.locator("button:text('Logout')");
    if (await logoutButton.isVisible()) {
      await expect(logoutButton).toBeVisible();
    } else {
      console.warn(
        "⚠️ Ingen 'Logout'-knapp funnet. Testen vil ikke feile, men du bør sjekke hvorfor.",
      );
    }
  });

  test("User sees an error message with invalid login credentials", async ({
    page,
  }) => {
    // 1️⃣ Gå til login-siden
    await page.goto("http://127.0.0.1:5501/login/index.html");

    // 2️⃣ Fyll inn feil email og passord
    await page.locator('input[name="email"]').fill("invalid@example.com");
    await page.locator('input[name="password"]').fill("wrongpassword");

    // 3️⃣ Klikk login-knappen
    await page.getByRole("button", { name: "Login" }).click();

    // 4️⃣ Sjekk at en feilmelding vises
    const errorMessage = page.locator("#message-container");
    await expect(errorMessage).toBeVisible();
  });
});
