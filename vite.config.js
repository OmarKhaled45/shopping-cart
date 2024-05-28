import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/shopping-cart/',
  plugins: [vue()],
  base: '/shopping-cart/', // replace 'your-repo-name' with your repository name
})
