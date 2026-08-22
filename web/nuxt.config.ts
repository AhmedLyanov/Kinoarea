import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    css: ["~~/globals.css"],

    vite: {
        plugins: [tailwindcss()],
    },

    runtimeConfig: {
        apiUrl: "",
        apiToken: "",
    },

    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    modules: ["@nuxt/icon", "@nuxt/image"],
});