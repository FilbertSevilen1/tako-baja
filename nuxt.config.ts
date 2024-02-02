// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  css: ["~/assets/css/main.css"],
  
  modules: [
    "nuxt-icon",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-gtag",
    "@stefanobartoletti/nuxt-social-share",
    "@nuxt/ui",
    "@nuxtjs/robots",
    "nuxt-simple-sitemap",
    "nuxt-schema-org",
    "nuxt-jsonld",
  ],
  gtag: {
    id: process.env.GTAG_ID,
  },
  site: {
    url: "https://takobajaprima.co.id/",
    name: "PT Tako Baja Prima",
  },
  schemaOrg: {
    identity: {
      type: "Organization",
      name: "PT Tako Baja Prima",
      url: "https://takobajaprima.co.id/",
      logo: "",
    },
  },
  plugins: [],

})
