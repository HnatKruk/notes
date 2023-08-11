import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 4000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@icons': path.resolve(__dirname, './src/icons'),
      '@actions': path.resolve(__dirname, './src/store/actions.js'),
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
    },
  },
});