
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Override TypeScript configuration to work around the TS6310 error
  optimizeDeps: {
    esbuildOptions: {
      tsconfigRaw: JSON.stringify({
        compilerOptions: {
          preserveSymlinks: true,
          skipLibCheck: true,
          composite: false,
          incremental: false,
          tsBuildInfoFile: null,
        }
      })
    }
  },
  esbuild: {
    tsconfigRaw: JSON.stringify({
      compilerOptions: {
        composite: false,
        skipLibCheck: true,
        incremental: false,
        tsBuildInfoFile: null,
      },
      references: undefined
    })
  },
  define: {
    // Disable TypeScript project references at build time
    'process.env.TS_NODE_PROJECT': '""'
  }
}));
