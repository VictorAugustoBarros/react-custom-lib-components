import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      cachedChecks: false,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
    },
  },
  plugins: [
    react({
      jsxRuntime: "classic", // Add this line
    }),
    viteTsconfigPaths(),
    svgrPlugin(),
  ],
});
