import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://talhacosar29.github.io',
  base: '/aykanlar_trabzon_ekmegi',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  devToolbar: { enabled: false },
});
