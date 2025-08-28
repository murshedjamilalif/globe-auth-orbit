
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
  // Complete TypeScript override to bypass project references
  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        target: "esnext",
        lib: ["dom", "dom.iterable", "esnext"],
        allowJs: true,
        skipLibCheck: true,
        esModuleInterop: true,
        allowSyntheticDefaultImports: true,
        strict: true,
        forceConsistentCasingInFileNames: true,
        module: "esnext",
        moduleResolution: "node",
        resolveJsonModule: true,
        isolatedModules: true,
        noEmit: false,
        jsx: "react-jsx",
        composite: false,
        incremental: false,
        noEmitOnError: false
      },
      include: ["src/**/*"],
      exclude: ["node_modules"]
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      tsconfigRaw: {
        compilerOptions: {
          target: "esnext",
          skipLibCheck: true,
          composite: false,
          noEmit: false
        }
      }
    }
  }
}));
