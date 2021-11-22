import { defineConfig } from "pinecone-cli";

export default defineConfig({
  source: "./themes/_pinecone-color-theme.json",
  output: "./themes",
  prefix: "$",
  options: {
    cleanUnusedThemes: false,
    includeNonItalicVariants: true,
    updateContributes: false,
    experimental: {
      removeEmptyThemeValues: false,
    },
  },
  theme: {
    variants: {
      gloom: {
        name: "Head in the Clouds",
        type: "dark",
      },
    },
    colors: {
      transparent: "#0000",
      bg: {
        gloom: "#faf8f6",
      },
      fg: {
        gloom: "#c29d84",
      },
    },
  },
});
