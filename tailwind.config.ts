import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      neutral1: "#022D22",
      neutral2: "#023C2D",
      neutral3: "#094E3D",
      neutral4: "#136953",
      neutral5: "#287561",
      neutral6: "#E1E4C2",
      neutral7: "#94A289",
      primary1: "#82E6CD",
      primary2: "#45D9B5",
      primary3: "#2ABD9A",
      primary4: "#1B7660",
      secondary1: "#F7F1CE",
      secondary2: "#E7E1BD",
      secondary3: "#CDC8A9",
      secondary4: "#535F57",
      error1: "#930A23",
      error2: "#E4C6B1",
    },
    fontFamily: {},
  },
  plugins: [],
};
export default config;
