/// <reference types="vitest" />

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    WindiCSS(),
    Icons(),
    // Auto import components and icons
    Components({
      resolvers: [
        IconsResolver(),
      ],
    })
  ],
  test: {
    // keep jest api polyfill
    globals: true,
    environment: 'jsdom',
  },
})
