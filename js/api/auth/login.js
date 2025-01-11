import { CONFIG } from "../../config.js";

export async function login(user) {
  const url = `${CONFIG.apiUrl}auth/login`;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  const response = await fetch(url, options);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Login failed");
  }

  return json;
}
// Adding a test comment to test lint-staged
console.log("This is a test line"); // Endret for å teste
