// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxt/icon', '@nuxt/image'],
  css: ['~/assets/css/main.css','~/assets/css/nprogress.css'],
})