import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const basePath = "/dona-valentinna-decor";

export default defineConfig({
  vite: {
    base: `${basePath}/`,
  },
  nitro: false,
  tanstackStart: {
    router: {
      basepath: basePath,
    },
    pages: [
      {
        path: `${basePath}/`,
        prerender: {
          enabled: true,
        },
      },
    ],
  },
});
