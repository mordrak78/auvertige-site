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
  build: {
    // Optimisations Core Web Vitals
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // CRITIQUE: React et React-DOM DOIVENT être dans le chunk principal (index)
            // pour être chargés en premier et éviter les erreurs createContext
            // On ne les sépare PAS dans un chunk séparé
            if (id.includes('react') || id.includes('react-dom')) {
              // Ne pas créer de chunk séparé - laisser dans le chunk principal
              return undefined;
            }
            // Séparer framer-motion dans son propre chunk (peut être lazy-loaded)
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            if (id.includes('@radix-ui')) {
              return 'vendor-radix';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            // Autres dépendances
            return 'vendor';
          }
        },
        // Optimiser les noms de chunks
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          if (/\.(png|jpe?g|svg|gif|webp)$/.test(assetInfo.name || '')) {
            return 'assets/images/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    // Optimisation des assets
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
    // Code splitting agressif
    cssCodeSplit: true,
    sourcemap: false, // Désactiver en production pour réduire la taille
  },
  // Optimisations de développement
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['framer-motion'], // Exclure framer-motion du pre-bundling pour réduire le bundle initial
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    globals: true,
  },
}));
