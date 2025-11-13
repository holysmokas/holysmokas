import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This will be replaced by the deployment script with the actual repo name
export default defineConfig({
    plugins: [react()],
    base: '/{{projectName}}/'
})