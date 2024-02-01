/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts,jsx}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts,jsx}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    // screens: {
    //   "2xl": "1320px",
    // },
    extend: {
      colors: {
        // primary: "#FFCE40",
        // secondary: "#9E7400",
        // terneary: "#FF9200",
        // accent: "#00ABE0",
      },
    },
  },
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
  plugins: [],
  site: {
    url: "https://takobaja.co.id/",
    name: "PT Tako Baja Prima",
  },
  schemaOrg: {
    identity: {
      type: "Organization",
      name: "PT Tako Baja Prima",
      url: "https://takobaja.co.id/",
      logo: "",
    },
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            supernova: {
              DEFAULT: "#FECE0A",
              "50": "#fefce8",
              "100": "#fffac2",
              "200": "#fff288",
              "300": "#ffe344",
              "400": "#fece0a",
              "500": "#eeb604",
              "600": "#cd8c01",
              "700": "#a46304",
              "800": "#874e0c",
              "900": "#733f10",
              "950": "#432005",
            },

            "buttered-rum": {
              DEFAULT: "#9E7400",
              "50": "#feffe7",
              "100": "#faffc0",
              "200": "#f9ff85",
              "300": "#fcff3f",
              "400": "#fff50b",
              "500": "#f4db00",
              "600": "#d3ab00",
              "700": "#9e7400",
              "800": "#8a5f09",
              "900": "#754e0e",
              "950": "#452903",
            },

            pizazz: {
              DEFAULT: "#FF9200",
              "50": "#fffbec",
              "100": "#fff7d3",
              "200": "#ffeca5",
              "300": "#ffdc6d",
              "400": "#ffc032",
              "500": "#ffa90a",
              "600": "#ff9200",
              "700": "#cc6c02",
              "800": "#a1530b",
              "900": "#82450c",
              "950": "#462104",
            },

            cerulean: {
              DEFAULT: "#00ABE0",
              "50": "#f0fbff",
              "100": "#e0f5fe",
              "200": "#b9edfe",
              "300": "#7ce0fd",
              "400": "#36d2fa",
              "500": "#0cbdeb",
              "600": "#00abe0",
              "700": "#017aa3",
              "800": "#066686",
              "900": "#0b546f",
              "950": "#07364a",
            },
          },
        },
      },
    },
  },
};
