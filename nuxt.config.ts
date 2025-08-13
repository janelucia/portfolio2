// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "nuxt-icon", "@nuxtjs/i18n"],
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  image: {
    format: ["webp"],
  },
  i18n: {
    defaultLocale: "en",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "de", name: "Deutsch", file: "de.json" },
    ],
  },
  runtimeConfig: {
    githubPat: "", // can be overridden by NUXT_GITHUB_PAT environment variable
  },
});
