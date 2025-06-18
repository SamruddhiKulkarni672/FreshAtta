import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        clash: ['"Clash Grotesk"', "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },

      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        productBackground: " #E7E2E2",
        disocountBg: "#244316",
        productTextOriginal: "#81859C",
        discountColor: "#102B6B",
        productPriceColor: "#363842",
        cartBackgroundColor: "#D2874D",
        serachBackgroundColor: "#F0F0F0",
        headerTextColor: "#242424",
        productDetailPageText: "#382020",
        productDetailDescriptionText: "#292929",
        productDetailContentText: "#666666",
        productDetailSizeborder: "#807C7C",
        productDetailTextItem: "#4E4B4B",
        productDetalbgOfButton: "#A0D4A39C",
        shadowProductDetail: "[0_4px_4px_#00000040]",
        cartShadow: "shadow-[4px_4px_4px_0px_#00000040]",

        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
