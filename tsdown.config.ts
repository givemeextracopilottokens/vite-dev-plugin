import { defineConfig } from 'tsdown';

export default defineConfig({
  name: 'vite-dev-plugin',
  outDir: 'build',
  minify: true,
  deps: { dts: { neverBundle: true } },
});
