import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: '/',
    build: {
        outDir: 'docs',
        emptyOutDir: true,
        copyPublicDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                privacy: resolve(__dirname, 'privacy.html'),
                terms: resolve(__dirname, 'terms.html'),
                cookies: resolve(__dirname, 'cookies.html'),  // ← Added this line
                contact: resolve(__dirname, 'frontend/pages/contact.html'),
                login: resolve(__dirname, 'frontend/pages/login.html'),
                dashboard: resolve(__dirname, 'frontend/pages/dashboard.html'),
                'payment-success': resolve(__dirname, 'frontend/pages/payment-success.html'),
                'renewal-success': resolve(__dirname, 'frontend/pages/renewal-success.html'),
                'domain-checkout': resolve(__dirname, 'frontend/pages/domain-checkout.html')
            },
            output: {
                // Ensure HTML files go to root
                entryFileNames: 'assets/[name]-[hash].js',
                chunkFileNames: 'assets/[name]-[hash].js',
                assetFileNames: 'assets/[name]-[hash][extname]'
            }
        }
    },
    plugins: [
        {
            name: 'flatten-html',
            enforce: 'post',
            generateBundle(options, bundle) {
                for (const fileName in bundle) {
                    const file = bundle[fileName];
                    if (fileName.endsWith('.html') && fileName.includes('/')) {
                        const flatName = fileName.split('/').pop();
                        file.fileName = flatName;
                        bundle[flatName] = file;
                        delete bundle[fileName];
                    }
                }
            }
        }
    ]
})