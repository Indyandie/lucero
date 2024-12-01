---
title: Components
description: Working with Starlight components.
lastUpdated: 2024-11-02
sidebar:
  label: components
  order: 23
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
rss: true
pubDate: 2024-11-02
---

- [Component Reference](https://starlight.astro.build/reference/overrides/)

## Overrides

- [Override Components](https://starlight.astro.build/guides/overriding-components/)

### Conditional Override

This example overrides on specific pages using the _built-in_ `ContentPanel` component.

1. Create a replacement component.

   ```astro title="src/components/overrides/CustomContentPanel.astro"
   ---
   import type { Props } from '@astrojs/starlight/props'
   import Default from '@astrojs/starlight/components/ContentPanel.astro'
   const pageSlug = Astro.props.slug
   ---
   {
     pageSlug === ('openapi/rapidoc/pokeapi' || 'openapi/stoplight-elements/pokeapi') ? (
       <section>
         <slot />
       </section>
     ) : (
       <Default {...Astro.props}>
         <slot />
       </Default>
     )
   }

   <style>
     section:first-child {
       display: none;
     }
   </style>
   ```
2. Override custom component in the `astro.config.mjs` file.

   ```js title="astro.config.mjs" ins={4-6} ins="ContentPanel" ins="CustomContentPanel.astro"
   export default defineConfig({
     integrations: [
       starlight({
         components: {
           ContentPanel: "./src/components/overrides/CustomContentPanel.astro",
         },
       }),
     ],
   });
   ```
