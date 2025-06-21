import { coverageConfigDefaults, defineConfig } from "vitest/config";

// Reference: https://vitest.dev/config/
export default defineConfig({
  test: {
    // use 'github-actions' reporter if running in GitHub Actions
    reporters: process.env.GITHUB_ACTIONS ? ["default", "github-actions"] : ["default"],
    coverage: {
      reporter: ["text", "lcov"],
      provider: "v8",
      clean: true,
      include: ["src/**/*.ts"], // Include all TypeScript files in the src directory
      // Extend the default exclude patterns to exclude test files
      exclude: [...coverageConfigDefaults.exclude, "**/*.spec.ts", "**/*.test.ts"]
    }
  }
});
