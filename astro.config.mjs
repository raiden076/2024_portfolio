import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [tailwind()],
  output: "hybrid",
  adapter: netlify({
    edgeMiddleware: true
  })
});