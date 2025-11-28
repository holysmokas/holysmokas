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
                // Root level pages
                main: resolve(__dirname, 'index.html'),
                privacy: resolve(__dirname, 'privacy.html'),
                terms: resolve(__dirname, 'terms.html'),

                // Frontend pages - keep source in frontend/pages/
                contact: resolve(__dirname, 'frontend/pages/contact.html'),
                login: resolve(__dirname, 'frontend/pages/login.html'),
                dashboard: resolve(__dirname, 'frontend/pages/dashboard.html'),
                'payment-success': resolve(__dirname, 'frontend/pages/payment-success.html'),
                'renewal-success': resolve(__dirname, 'frontend/pages/renewal-success.html'),
                'domain-checkout': resolve(__dirname, 'frontend/pages/domain-checkout.html')
            }
        }
    },
    plugins: [
        {
            name: 'flatten-html',
            enforce: 'post',
            generateBundle(options, bundle) {
                // Move all HTML files to root level in output
                for (const fileName in bundle) {
                    const file = bundle[fileName];
                    if (fileName.endsWith('.html') && fileName.includes('/')) {
                        // Extract just the filename (remove directory path)
                        const flatName = fileName.split('/').pop();
                        // Rename the file in the bundle
                        bundle[flatName] = file;
                        file.fileName = flatName;
                        // Delete the old nested path
                        delete bundle[fileName];
                    }
                }
            }
        }
    ]
})