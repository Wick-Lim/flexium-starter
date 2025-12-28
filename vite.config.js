import { defineConfig } from 'vite'

export default defineConfig({
    // Enable JSX for .jsx files
    esbuild: {
        jsxFactory: 'f',
        jsxFragment: 'Fragment',
        jsxInject: `import { f } from 'flexium'\nconst Fragment = 'fragment'`
    },

    // Build configuration
    build: {
        outDir: 'dist',
        sourcemap: true
    },

    // Dev server configuration
    server: {
        port: 3000,
        open: true
    }
})
