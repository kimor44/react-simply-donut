import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true }), libInjectCss()],
  build: {
    lib: {
      entry: {
        donuts: resolve(__dirname, "src/donuts"),
        legends: resolve(__dirname, "src/legends"),
        "": resolve(__dirname, "src/index.ts"),
      },
      name: "react-simply-donut",
      formats: ["es", "cjs"],
      fileName: (format, entryName) =>
        `${entryName ? entryName + "/" : ""}react-simply-donut.${format}.js`,
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
        },
      },
    },
  },
});
