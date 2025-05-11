import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Обработка __dirname в ES-модуле
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Конфигурация Vite
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
