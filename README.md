# unocss-preset-emmet

[![NPM](https://img.shields.io/npm/v/unocss-preset-emmet)](https://www.npmjs.com/package/unocss-preset-emmet)
[![NPM](https://img.shields.io/npm/dw/unocss-preset-emmet.svg)](https://www.npmjs.com/package/unocss-preset-emmet)
[![License](https://img.shields.io/github/license/lbb00/unocss-preset-emmet.svg)](https://github.com/lbb00/unocss-preset-emmet/blob/master/LICENSE)


> Alpha version, please do not use in production.

Emmet-style presets, rules based on [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet).

## Example

```html
<!-- font-size: 16px; -->
<p class="fw-16px">Emmet</p>
```

## Usage

```bash
npm install -D unocss-preset-emmet

```

```javascript
// unocss.config.js
import { defineConfig } from 'unocss'
import { presetEmmet } from 'unocss-preset-emmet'

export default defineConfig({
  presets: [presetEmmet()],
})
```
