import { defineConfig } from "tsdown";

// Reference: https://tsdown.dev/reference/config-options
export default defineConfig({
  entry: ["src/index.ts"],
  dts: true
});
