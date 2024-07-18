// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    "nuxt-icon",
  ],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  image: {
    format: ['webp']
  },
  runtimeConfig: {
    githubPat: "", // can be overridden by NUXT_GITHUB_PAT environment variable
  },
})
