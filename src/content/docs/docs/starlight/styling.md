---
title: Styling
sidebar:
  order: 20
  label: styling
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 4
lastUpdated: 2022-10-27
---

## Custom `CSS`

- [CSS & Styling](https://starlight.astro.build/guides/css-and-tailwind/)
- [Color Theme Editor](https://starlight.astro.build/guides/css-and-tailwind/#color-theme-editor)

1. Add `CSS` files to the `/src/styles/` directory (or anywhere in `src`)

```css title="/src/styles/custom.css"
/* Dark mode colors. */
:root {
  --sl-color-accent-low: #272500;
  --sl-color-accent: #726d00;
  --sl-color-accent-high: #cdcc9c;
  --sl-color-white: #ffffff;
  --sl-color-gray-1: #eeeeee;
  --sl-color-gray-2: #c8c8c8;
  --sl-color-gray-3: #a4a4a4;
  --sl-color-gray-4: #585858;
  --sl-color-gray-5: #383838;
  --sl-color-gray-6: #272727;
  --sl-color-black: #181818;
}
```

2. Include **`CSS` file** in the **`customCss`** array

```js title="astro.config.mjs" {4-6} {"CSS file": 5}
export default defineConfig({
  integrations: [
    starlight({
      customCss: [
        "./src/styles/custom.css",
      ],
    }),
  ],
});
```
