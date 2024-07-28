import { cyberpunk } from 'daisyui/src/theming/themes';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [{
      cyberpunkUpdated: {
        "color-scheme": "light",
        "fontFamily":
          "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
        "primary": "oklch(63.63% 0.2217 0)",
        "secondary": "oklch(83.33% 0.184 204.72)",
        "accent": "oklch(71.86% 0.2176 310.43)",
        "neutral": "oklch(23.04% 0.065 269.31)",
        "neutral-content": "oklch(94.51% 0.179 104.32)",
        "base-100": "oklch(84.5% 0.1826 94.13)",
        "--rounded-box": "0",
        "--rounded-btn": "0",
        "--rounded-badge": "0",
        "--tab-radius": "0",
      },
    }],
  },
};
