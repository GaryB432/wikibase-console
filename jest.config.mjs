// @ts-check

/** @type {import('jest').Config} */
const config = {
  // We are no longer using the full preset, so remove this line:
  // preset: 'ts-jest/presets/default-esm',

  // Set the test environment to Node.js
  testEnvironment: "node",

  // Custom transform settings.
  transform: {
    // This transform rule specifically targets ESM files
    "^.+\\.(t|j)s$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.spec.json", // Use the specific spec config
        useESM: true,
      },
    ],
  },

  // This mapper fixes a known issue where Jest doesn't correctly resolve
  // .ts files from import statements that include a .js extension.
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },

  // Explicitly tell Jest to treat .ts files as ES modules
  extensionsToTreatAsEsm: [".ts"],

  // Correctly target files with a .spec.ts extension inside any __tests__ folder
  testMatch: ["**/__tests__/**/*.spec.ts"],
};

export default config;
