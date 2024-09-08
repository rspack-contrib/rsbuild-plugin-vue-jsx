import { defineConfig } from '@rsbuild/core';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginVueJsx } from '@rsbuild/plugin-vue-jsx';
import { getRandomPort } from '../helper';

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginBabel({
      include: /\.(?:jsx|tsx)(\.js)?$/,
    }),
    pluginVueJsx(),
  ],
  server: {
    port: getRandomPort(),
  },
  performance: {
    buildCache: false,
  },
});
