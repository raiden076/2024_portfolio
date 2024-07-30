import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [tailwind(), mdx()],
  output: "hybrid",
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  })
});