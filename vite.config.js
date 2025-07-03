import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // ルートパスに設定（リダイレクト用）
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
