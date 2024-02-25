import type { Config } from "tailwindcss";

import { screens } from "./config/tailwind";

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      screens,
    },
  },
  daisyui: {
    themes: [
      {
        manaMate: {
          primary: "#0284c7",
          secondary: "#abc5e3",
          accent: "#5aaa74",
          neutral: "#031737",
          "base-100": "#f6f7f8",
          "base-200": "#efefef",
          info: "#3964ae",
          success: "#34d399",
          warning: "#e6ab00",
          error: "#d90029",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
} satisfies Config;
