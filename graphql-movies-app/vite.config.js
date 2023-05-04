import { resolve } from 'path'
import { defineConfig } from 'vite'
import graphqlLoader from 'vite-plugin-graphql-loader'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@services': resolve(__dirname, 'src/services'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@views': resolve(__dirname, 'src/views'),
    },
  },
  plugins: [react(), graphqlLoader.default()],
})
