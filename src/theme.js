import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: "#08CB00" }, // Neon Byte – CTAs, highlights, accents
        secondary: { value: "#253900" }, // Terminal Depth – dark sections / backgrounds
        neutralDark: { value: "#000000" }, // Core Black – text, logo
        baseLight: { value: "#EEEEEE" }, // Soft Light – light sections / cards
      },
    },
  },
  config: {
    cssVarsRoot: ":root", // keep variables at root
    initialColorMode: "light", // always start in light mode
    useSystemColorMode: false, // ignore system preference
    disableTransitionOnChange: true, // smoother startup
  },
});

export const system = createSystem(defaultConfig, config);
