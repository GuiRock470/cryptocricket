import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path';
import { copyFileSync } from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      writeBundle() {
        // Copia o index.html para 404.html
        copyFileSync('dist/index.html', 'dist/404.html');
      },
    },
  ],
  base: '/cryptocricket/',
  resolve: {
    alias: {
      'src': path.resolve(__dirname, 'src/'),
    },
  },
})
