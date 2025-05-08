import { coverageConfigDefaults, defineConfig } from "vitest/config";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  test: {
    environment: "node",
    include: ["src/**/*.{test,spec}.{js,ts}"],
    coverage: {
      ...coverageConfigDefaults, // Spread the default coverage options
      // exclude: [
      //   "**/*.config.{js,ts}",
      //   ...coverageConfigDefaults.exclude,
      // ],
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

