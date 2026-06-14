// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages as a user site at the root domain.
// No `base` needed since it serves from https://riandoza.github.io
export default defineConfig({
  site: 'https://riandoza.github.io',
});
