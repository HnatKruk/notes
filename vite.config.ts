import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 4000,
  },
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components/index.ts',
      '@icons': '/src/icons/index.ts',
      '@actions': '/src/store/actions.ts',
      '@actionTypes': '/src/store/actionTypes.ts',
      '@interfaces': '/src/interfaces/index.ts',
    },
  },
});