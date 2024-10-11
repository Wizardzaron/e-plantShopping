import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//originally /shoppingreact but needed to change for Vercel
export default defineConfig({
  base: "/",
  plugins: [react()],
})
