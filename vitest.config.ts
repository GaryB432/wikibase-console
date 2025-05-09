import { fileURLToPath, URL } from "node:url";
import { coverageConfigDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["src/**/*.{test,spec}.{js,ts}"],
    coverage: {
      ...coverageConfigDefaults,
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
