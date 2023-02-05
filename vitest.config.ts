/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "jsdom",
    globals: true,
    coverage: {
      provider: "c8",
      reporter: "html",
      reportsDirectory: "./__tests__/coverage",
    },
  },
});
