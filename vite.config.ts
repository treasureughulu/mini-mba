import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base + HashRouter means the build works on any GitHub Pages path.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: { chunkSizeWarningLimit: 900 },
});
