import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // Excluye módulos específicos si no son requeridos por esbuild
  },
  build: {
    outDir: 'dist', // Directorio de salida (Vercel lo usa automáticamente)
    sourcemap: true, // Opcional: útil para debug en producción
  },
  server: {
    open: true, // Abre el navegador automáticamente en modo dev
  },
});
