import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  css: ["~~/globals.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    bhceshApiUrl: process.env.BHCESH_API_URL,
    bhceshToken: process.env.BHCESH_TOKEN,

    allohaApiUrl: process.env.ALLOHA_API_URL,
    allohaApiToken: process.env.ALLOHA_API_TOKEN,
  },

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxt/image", "@nuxt/eslint"],
});
