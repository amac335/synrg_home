// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  // @ts-ignore - This silences the specific linting error
  // while we wait for Nuxt to generate the types locally
  googleFonts: {
    families: {
      Michroma: true,
      "Space Grotesk": [300, 400, 500, 600, 700],
      "Public Sans": [300, 400, 600, 700, 900],
      Inter: [300, 400, 500, 600],
    },
    display: "swap",
    download: true, // This downloads fonts to /public for Cloudflare hosting (resource consolidation!)
  },

  nitro: {
    preset: "cloudflare-pages",
  },

  // Nuxt 4 "Future" flags to stay ahead of the curve
  future: {
    compatibilityVersion: 4,
  },
});
