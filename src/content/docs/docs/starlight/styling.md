---
title: Styling
sidebar:
  order: 20
  label: styling
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 4
lastUpdated: 2024-10-31
---

## Custom `CSS`

- [CSS & Styling](https://starlight.astro.build/guides/css-and-tailwind/)
- [Color Theme Editor](https://starlight.astro.build/guides/css-and-tailwind/#color-theme-editor)
- [Default `CSS` Properties](https://github.com/withastro/starlight/blob/main/packages/starlight/style/props.css)

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

## Logo

```js title="astro.config.mjs" {4-9}
export default defineConfig({
  integrations: [
    starlight({
      logo: {
        // src: './src/assets/images/twemoji/full-moon.svg',
        dark: "./src/assets/images/twemoji/full-moon.svg",
        light: "./src/assets/images/twemoji/new-moon.svg",
        replacesTitle: false,
      },
    }),
  ],
});
```

## Custom Fonts

1. Add `CSS` and local font files under the `src` directory (`src/fonts`).

   ```shell frame="none"
   tree src/fonts
   ```

   ```ansi title="output" {"CSS": 2} {"Atkinson Hyperlegible": 3-8} {"Jetbrains Mono": 9-30}
   src/fonts
   ├── font-face.css
   ├── atkinson-hyperlegible
   │  ├── AtkinsonHyperlegible-Bold.ttf
   │  ├── AtkinsonHyperlegible-BoldItalic.ttf
   │  ├── AtkinsonHyperlegible-Italic.ttf
   │  ├── AtkinsonHyperlegible-Regular.ttf
   │  └── OFL.txt
   └── jetbrains-mono
      ├── AUTHORS.txt
      ├── fonts
      │  └── webfonts
      │     ├── JetBrainsMono-Bold.woff2
      │     ├── JetBrainsMono-BoldItalic.woff2
      │     ├── JetBrainsMono-ExtraBold.woff2
      │     ├── JetBrainsMono-ExtraBoldItalic.woff2
      │     ├── JetBrainsMono-ExtraLight.woff2
      │     ├── JetBrainsMono-ExtraLightItalic.woff2
      │     ├── JetBrainsMono-Italic.woff2
      │     ├── JetBrainsMono-Light.woff2
      │     ├── JetBrainsMono-LightItalic.woff2
      │     ├── JetBrainsMono-Medium.woff2
      │     ├── JetBrainsMono-MediumItalic.woff2
      │     ├── JetBrainsMono-Regular.woff2
      │     ├── JetBrainsMono-SemiBold.woff2
      │     ├── JetBrainsMono-SemiBoldItalic.woff2
      │     ├── JetBrainsMono-Thin.woff2
      │     └── JetBrainsMono-ThinItalic.woff2
      └── OFL.txt
   ```

2. Specify `@font-face` for each local font in the `font-face.css` file.

   ```css
   @font-face {
     font-family: "AtkinsonHyperlegible";
     src: url("./atkinson-hyperlegible/AtkinsonHyperlegible-Regular.ttf");
     font-weight: normal;
   }

   @font-face {
     font-family: "AtkinsonHyperlegible";
     src: url("./atkinson-hyperlegible/AtkinsonHyperlegible-Bold.ttf");
     font-weight: bold;
   }

   @font-face {
     font-family: "AtkinsonHyperlegibleItalic";
     src: url("./atkinson-hyperlegible/AtkinsonHyperlegible-Italic.ttf");
     font-weight: normal;
   }

   @font-face {
     font-family: "AtkinsonHyperlegibleItalic";
     src: url("./atkinson-hyperlegible/AtkinsonHyperlegible-BoldItalic.ttf");
     font-weight: bold;
   }

   @font-face {
     font-family: "JetBrainsMono";
     src: url("./jetbrains-mono/fonts/webfonts/JetBrainsMono-Regular.woff2");
     font-weight: normal;
   }

   @font-face {
     font-family: "JetBrainsMono";
     src: url("./jetbrains-mono/fonts/webfonts/JetBrainsMono-Bold.woff2");
     font-weight: bold;
   }
   ```
3. Include **`CSS` file** in the **`customCss`** array
   ```js title="astro.config.mjs" ins={"font CSS": 6}
   export default defineConfig({
     integrations: [
       starlight({
         customCss: [
           "./src/styles/custom.css",
           "./src/fonts/font-face.css",
         ],
       }),
     ],
   });
   ```

4. Use fonts in [`custom.css`](#custom-css)

   ```css title="src/styles/custom.css" {4-5} "AtkinsonHyperlegible" "JetBrainsMono"
   /* fonts */

   :root {
     --sl-font: AtkinsonHyperlegible, serif;
     --sl-font-system-mono: JetBrainsMono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
   }
   ```
