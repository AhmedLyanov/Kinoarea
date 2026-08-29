import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Kinoarea", // default fallback title
      htmlAttrs: {
        lang: "ru",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  css: ["~~/globals.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    bhceshApiUrl: process.env.BHCESH_API_URL,
    bhceshToken: process.env.BHCESH_TOKEN,

    allohaApiUrl: process.env.ALLOHA_API_URL,
    allohaApiToken: process.env.ALLOHA_API_TOKEN,

    kinopoiskApiToken: process.env.KINOPOISK_API_TOKEN,
  },

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/icon", "@nuxt/image", "@nuxt/eslint", "@nuxtjs/seo"],
});