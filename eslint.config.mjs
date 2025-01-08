import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,  // For nettlesermiljøet
        describe: true,      // For testgruppering
        test: true,          // For å opprette tester
        it: true,            // Alternativ for å lage tester
        expect: true,        // For testpåstander
        require: true,       // For Node.js-moduler som Tailwind-konfig
        module: true,        // For Node.js-moduler som Tailwind-konfig
        process: true,       // For miljøvariabler
      },
    },
  },
  pluginJs.configs.recommended,
];
