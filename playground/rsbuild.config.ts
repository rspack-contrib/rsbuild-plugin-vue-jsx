import { defineConfig } from '@rsbuild/core';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginVueJsx } from '../src';

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginVueJsx(),
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
    }),
  ],
});
