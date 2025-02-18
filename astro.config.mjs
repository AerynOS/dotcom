import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
// import compressor from "astro-compressor"
import icon from "astro-icon";

import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://aerynos.com",
  image: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    fallback: {},
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: true,
  integrations: [
    icon(),
    tailwind(),

    sitemap({
      i18n: {
        defaultLocale: "en", // All urls that don't contain `fr` after `https://aerynos.com/` will be treated as default locale, i.e. `en`
        locales: {
          en: "en", // The `defaultLocale` value must present in `locales` keys
          // fr: "fr",
        },
      },
    }),

    // pre-compress them generated files - requires web server to be configured to look for these first
    // compressor({
    //   gzip: false,
    //   brotli: true,
    // }),

    mdx()
  ],
  experimental: {
    clientPrerender: true,
    svg: true,
  },
})