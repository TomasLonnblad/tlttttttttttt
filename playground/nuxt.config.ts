import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  extends: [
    './layers/theme',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  css: [
    '~/assets/css/main.css',
    '~/assets/css/test.css',
  ],
  future: {
    compatibilityVersion: 4,
  },
})
