// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aditbansal1.github.io',
  output: 'static',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
});
