import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";
import icon from "astro-icon";
import path from "path";
import postcssImport from "postcss-import";
import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";

const isBackend = process.env.BUILD_ENV === "backend";

export default defineConfig({
  output: "static",
  compressHTML: !isBackend,
  outDir: "dist",
  devToolbar: {
    enabled: false,
  },
  build: {
    inlineStylesheets: "never",
    assets: "assets",
  },
  integrations: [
    relativeLinks(),
    icon({
      iconDir: "src/assets/icons",
      svgoOptions: {
        plugins: [
          {
            name: "removeAttrs",
            params: { attrs: "(fill|stroke)" },
          },
          { name: "removeDimensions" },
        ],
      },
    }),
  ],
  vite: {
    resolve: {
      alias: {
      "@": path.resolve("src"),
      },
    },
    css: {
      postcss: {
        plugins: [
          // postcssImport(),
          autoprefixer(),
          postcssPresetEnv({
            stage: 2, // Оптимальный уровень поддержки современных фич CSS
          }),
        ],
      },
      preprocessorOptions: {
        scss: {
          api: "modern",
          loadPaths: [path.resolve("src/assets/scss")],
          quietDeps: true,
          additionalData: `
        //  @use "${path.resolve("src/assets/scss/helpers/_index.scss").replace(/\\/g, "/")}" as *;
         @use "helpers" as *;
          `,
          silenceDeprecations: ["import", "global-builtin","legacy-js-api"],
        },
      },
    },
    build: {
      assetsInlineLimit: 1,
      minify: isBackend ? false : true,
      rollupOptions: {
        output: {
          entryFileNames: "js/main-[hash].js",
          assetFileNames: (assetInfo) => {
            const ext = assetInfo.name.split(".").pop();

            if (/css/i.test(ext)) {
              return "css/main-[hash][extname]";
            }

            if (/png|jpe?g|gif|svg|webp|avif/i.test(ext)) {
              return "img/[name]-[hash][extname]";
            }

            if (/woff2?|ttf|otf|eot/i.test(ext)) {
              return "fonts/[name]-[hash][extname]";
            }

            return "assets/[name]-[hash][extname]";
          },
        },
      },
    },
  },
});
