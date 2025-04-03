import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "",  // Remove any custom base path
  plugins: [react()],
  build: {
    outDir: "dist",  // Ensure the output folder is "dist" (Vercel serves from this folder)
    emptyOutDir: true, // Clears old builds before generating a new one
  },
  server: {
    port: 3000,  // Optional: Local development server port
  },
});
