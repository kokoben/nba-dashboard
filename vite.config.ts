import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api/espn': 'http://localhost:3000',
    },
  },
  test: {
    environment: 'jsdom',
  },
});
