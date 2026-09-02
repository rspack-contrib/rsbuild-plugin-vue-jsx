// Configuration guide: https://rstack.rs/config
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginVue } from '@rsbuild/plugin-vue';
import { define } from 'rstack';
import { pluginVueJsx } from '../src/index.ts';

define.app({
  plugins: [
    pluginVue(),
    pluginVueJsx(),
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
    }),
  ],
});
