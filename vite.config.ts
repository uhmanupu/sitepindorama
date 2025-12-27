import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Se usar Vercel, pode apagar a linha 'base'. 
  // Se usar GitHub Pages, mantenha como está abaixo:
  base: '/sitepindorama/', 
})
