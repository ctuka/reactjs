import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  preview: {
      port: 4000
    },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
})
