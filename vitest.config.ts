import { coverageConfigDefaults, defineConfig } from "vitest/config";

// Reference: https://vitest.dev/config/
export default defineConfig({
  test: {
    // setup 'github-actions' reporter if running in GitHub Actions
    reporters: process.env.GITHUB_ACTIONS ? ["default", "github-actions"] : ["default"],
    coverage: {
      reporter: ["text", "lcov"],
      provider: "istanbul", // we choose 'istanbul' because it supports both Bun and Node.js
      clean: true,
      // Extend the default exclude patterns to exclude test files
      exclude: [...coverageConfigDefaults.exclude, "**/*.spec.ts", "**/*.test.ts"]
    }
  }
});
