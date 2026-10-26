import path from "path";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Build configuration for self-hosting (VPS / Coolify / Docker).
// It is the same app as vite.config.ts, but packaged as a standalone Node.js
// server (.output/server/index.mjs) instead of a Cloudflare Worker, and without
// the Lovable preview plugins that only exist for the editor.
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart(),
    nitro({ preset: "node-server" }),
    viteReact(),
  ],
});
