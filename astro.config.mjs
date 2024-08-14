import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [tailwind(), mdx(), solidJs()],
  output: "hybrid",
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  })
});