import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    watch: false,
    host: true,
    globals: true,
    environment: "jsdom",
    coverage: {
      include: ["src/__tests__/*"],
      exclude: [
        "src/styles/theme-st/theme.js",
        "src/styles/theme-st/base/colors.js",
        " src/services/web/requestWebService.jsx ",
        "src/redux/index.jsx",
        "src/i18n/index.js",
        "src/main.jsx",
      ],
      reporter: ["text", "json", "html"],
      all: true,
      statements: 80,
    },
  },
});
