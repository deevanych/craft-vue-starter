import {fileURLToPath, URL} from 'node:url'

import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import copy from 'rollup-plugin-copy'

// https://vite.dev/config/
import ViteRestart from 'vite-plugin-restart';

// @ts-ignore
export default defineConfig(({command, mode}) => {
    const env = loadEnv(mode, '../')

    return {
        base: command === 'serve' ? '' : '/dist/',
        publicDir: './public',
        envDir: '../',
        build: {
            manifest: 'manifest.json',
            outDir: '../web/dist/',
            sourcemap: true,
            emptyOutDir: true,
            rollupOptions: {
                input: {
                    app: './src/main.ts',
                    css: './src/scss/index.scss'
                }
            },
        },
        plugins: [
            vue(),
            vueDevTools(),
            ViteRestart({
                reload: [
                    '../templates/**/*',
                ],
            }),
            copy({
                targets: [
                    {
                        src: 'src/fonts/**/*',
                        dest: '../web/dist/fonts'
                    }, {
                        src: 'public/**/*',
                        dest: '../web/dist'
                    }],
                hook: 'writeBundle'
            }),
        ],
        resolve: {
            alias: {
                vue: 'vue/dist/vue.esm-bundler.js',
                vue$: 'vue/dist/vue.esm-bundler.js',
                '@': fileURLToPath(new URL('./src', import.meta.url))
            },
        },
        server: {
            fs: {
                strict: false
            },
            origin: `http://localhost:${env.VITE_PORT}`,
            port: env.VITE_PORT,
            strictPort: true,
            cors: true
        }
    }
})
