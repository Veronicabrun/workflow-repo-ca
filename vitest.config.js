import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // Setter opp et falskt nettlesermiljø for testene dine
  },
});
