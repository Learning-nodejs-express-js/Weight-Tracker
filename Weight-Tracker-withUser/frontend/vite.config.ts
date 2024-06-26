import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/weights":"http://localhost:4000",
      "/users":"http://localhost:4000"
    }
  }
})
