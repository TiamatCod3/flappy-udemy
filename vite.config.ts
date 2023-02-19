import { defineConfig } from 'vite'

export default defineConfig({
    base: '/flappy-udemy/',
    build: {
        // Do not inline images and assets to avoid the phaser error
        // "Local data URIs are not supported"
        assetsInlineLimit: 0,
        chunkSizeWarningLimit: 1600,
    },
    server:{
        port: 3000
    }
})