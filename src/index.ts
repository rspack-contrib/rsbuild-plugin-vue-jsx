import type { RsbuildPlugin } from '@rsbuild/core';

export type pluginVueJsxOptions = {
  foo?: string;
  bar?: boolean;
};

export const pluginVueJsx = (
  options: pluginVueJsxOptions = {},
): RsbuildPlugin => ({
  name: 'plugin-example',

  setup() {
    console.log('Hello Rsbuild!', options);
  },
});
