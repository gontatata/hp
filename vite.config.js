import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/hp/", // GitHub Pagesのリポジトリ名に合わせて設定
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
