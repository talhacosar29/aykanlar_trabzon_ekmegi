import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aykanlartrabzonekmegi.com.tr',
  trailingSlash: 'never',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  devToolbar: { enabled: false },
});
