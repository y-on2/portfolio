// Temporary fix for file lock issue 
import { defineConfig } from 'vite' 
import react from '@vitejs/plugin-react' 
export default defineConfig({ 
  plugins: [react()], 
  build: { outDir: 'build' } 
}) 
