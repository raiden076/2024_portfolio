import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [tailwind()],
  output: "hybrid",
  experimental: {
    actions: true,
  },
  adapter: cloudflare(),
});
