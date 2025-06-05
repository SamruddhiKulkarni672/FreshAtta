import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        productBackground: " #E7E2E2",
        disocountBg: "#E9F0FF",
        productTextOriginal: "#81859C",
        discountColor: "#102B6B",
        productPriceColor : "#363842",
        cartBackgroundColor : '#D2874D'
      },
    },
  },
  plugins: [],
} satisfies Config;
