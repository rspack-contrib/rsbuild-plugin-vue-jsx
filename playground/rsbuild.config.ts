import { defineConfig } from '@rsbuild/core';
import { pluginVueJsx } from '../src';

export default defineConfig({
  plugins: [pluginVueJsx()],
});
