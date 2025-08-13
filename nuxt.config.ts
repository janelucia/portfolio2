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
    strategy: "prefix_except_default",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "de", name: "Deutsch", file: "de.json" },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  runtimeConfig: {
    githubPat: "", // can be overridden by NUXT_GITHUB_PAT environment variable
  },
});
