import { defineConfig } from 'astro/config';

const isVercel = Boolean(process.env.VERCEL);
const vercelHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL ||
  'aykanlar-trabzon-ekmegi.vercel.app';

export default defineConfig({
  site: isVercel
    ? `https://${vercelHost}`
    : 'https://talhacosar29.github.io',
  // GitHub Pages is a project site; Vercel serves the app at the domain root.
  base: isVercel ? '/' : '/aykanlar_trabzon_ekmegi',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  devToolbar: { enabled: false },
});
