import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: '/',
    build: {
        outDir: 'docs',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                contact: resolve(__dirname, 'contact.html'),
                'payment-success': resolve(__dirname, 'payment-success.html'),
                login: resolve(__dirname, 'frontend/pages/login.html'),
                dashboard: resolve(__dirname, 'frontend/pages/dashboard.html')
            }
        }
    }
})