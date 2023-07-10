import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/maxitomix/top_shopping_cart/',
  plugins: [react()],
})
