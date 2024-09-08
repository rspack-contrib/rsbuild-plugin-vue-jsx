# @rsbuild/plugin-vue-jsx

@rsbuild/plugin-vue-jsx is a Rsbuild plugin to do something.

<p>
  <a href="https://npmjs.com/package/@rsbuild/plugin-vue-jsx">
   <img src="https://img.shields.io/npm/v/@rsbuild/plugin-vue-jsx?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
  <a href="https://npmcharts.com/compare/@rsbuild/plugin-vue-jsx?minimal=true"><img src="https://img.shields.io/npm/dm/@rsbuild/plugin-vue-jsx.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="downloads" /></a>
</p>

## Usage

Install:

```bash
npm add @rsbuild/plugin-vue-jsx -D
```

Add plugin to your `rsbuild.config.ts`:

```ts
// rsbuild.config.ts
import { pluginVueJsx } from "@rsbuild/plugin-vue-jsx";

export default {
  plugins: [pluginVueJsx()],
};
```

## Options

### foo

Some description.

- Type: `string`
- Default: `undefined`
- Example:

```js
pluginVueJsx({
  foo: "bar",
});
```

## License

[MIT](./LICENSE).
