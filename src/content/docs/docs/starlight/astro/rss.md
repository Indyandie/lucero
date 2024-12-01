---
title: RSS
description: Generate an RSS feed with Astro.
lastUpdated: 2024-12-01
sidebar:
  order: 301
  label: rss
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
rss: true
pubDate: 2024-12-30
---

- [Astro RSS Guide](https://docs.astro.build/guides/rss/)

## Create a basic RSS Feed

1. Extend Starlight's schema ([`extend`](https://starlight.astro.build/reference/frontmatter/#extend)) with `pubDate` and `rss` (optional) fields.
   - Update `src/content/config.ts`

     ```javascript title="src/content/config.ts" ', z' {6-11}
     import { defineCollection, z } from "astro:content";
     import { docsSchema } from "@astrojs/starlight/schema";

     export const collections = {
       docs: defineCollection({
         schema: docsSchema({
           extend: z.object({
             pubDate: z.date().optional(),
             rss: z.boolean().optional(),
           }),
         }),
       }),
     };
     ```
   - Update page frontmatter
     ```yaml title="src/content/docs/**.md"
     title: Title
     description: A description. # recommended
     lastUpdated: 2024-11-30
     sidebar:
       order: 301
       label: rss
     tableOfContents:
       minHeadingLevel: 2
       maxHeadingLevel: 2
     rss: true # optional
     pubDate: 2024-11-30 # RSS feed
     ```
2. Install [`@astrojs/rss`](https://github.com/withastro/astro/tree/main/packages/astro-rss)
   ```shell title='terminal'
   deno add npm:@astrojs/rss
   ```
3. Create `rss.xml.js` in the `src/pages/` directory. This file will add RSS `items` through the Starlight `docs` content collection.
   ```javascript title="rss.xml.js"
   import rss from "@astrojs/rss";
   import { getCollection } from "astro:content";

   // export function GET(context) {
   export async function GET(context) {
     const docs = await getCollection("docs");

     return rss({
       // `<title>` field in output xml
       title: "Lucero",

       // `<description>` field in output xml
       description: "Take your documentation to the moon and back in the blink of an eye.",

       // Pull in your project "site" from the endpoint context
       // https://docs.astro.build/en/reference/api-reference/#contextsite
       site: `${context.site}/lucero`,

       // Array of `<item>`s in output xml
       items: docs.map((page) => ({
         title: page.data.title,
         pubDate: page.data.pubDate,
         description: page.data.description,

         // Compute RSS link from page `slug`
         link: `/lucero/${page.slug}/`,

         // content: sanitizeHtml(page.compiledContent()),
         content: sanitizeHtml.replace(/[\x1B]/g, "&esc;"),
       })),

       // (optional) inject custom xml
       customData: `<language>en-us</language>`,
     });
   }
   ```

## Add an RSS Stylesheet

1. Create a `styles.xsl` file somewhere in the `public` directory. Or use the recommended the [Pretty Feed v3](https://github.com/genmon/aboutfeeds/blob/main/tools/pretty-feed-v3.xsl) default Stylesheet.

   :::note
   This project uses a modified version of [Pretty Feed v3](https://github.com/genmon/aboutfeeds/blob/main/tools/pretty-feed-v3.xsl) found below.

   ##### Notable Changes

   - Update `header` layout
   - Replace some generic elements (`div`) with more semantic ones
   - Extracted the RSS `SVG` into an [`SVG` file](/lucero/rss/rss-icon.svg)
   - Remove all CSS and use [PicoCSS](https://github.com/picocss/pico)

   :::

   :::tip
   Remember this is `XML`, it has different rules from `HTML`.
   :::

   ```xml title="public/rss/styles.xsl"
   <?xml version="1.0" encoding="utf-8"?>
   <!--
   source
   https://github.com/genmon/aboutfeeds/blob/main/tools/pretty-feed-v3.xsl
   -->
   <xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                   xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/"
                   xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
     <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
     <xsl:template match="/">
       <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
         <head>
           <title><xsl:value-of select="/rss/channel/title" /> Web Feed</title>
           <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
           <link
             rel="stylesheet"
             href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
           />
         </head>
         <body class="bg-white not-content">
           <main class="container">
             <header>
               <h2><xsl:value-of select="/rss/channel/title" /></h2>
               <p><xsl:value-of select="/rss/channel/description" /></p>
               <a class="head_link" target="_blank">
                 <xsl:attribute name="href">
                   <xsl:value-of select="/rss/channel/link" />
                 </xsl:attribute>
                 Visit Website &#x2192;
               </a>
               <hr/>
             </header>
             <hr/>
             <section>
               <h2>
                 <img style="vertical-align: text-bottom; width: 1.2em; height: 1.2em" src="/lucero/rss/rss-icon.svg" class="pr-1" />
                 RSS Feed
               </h2>
               <hr/>
               <xsl:for-each select="/rss/channel/item">
                 <article>
                   <h4>
                     <a target="_blank">
                       <xsl:attribute name="href">
                       <xsl:value-of select="link" />
                       </xsl:attribute>
                       <xsl:value-of select="title" />
                     </a>
                   </h4>
                   <p>
                     <xsl:value-of select="description" />
                   </p>
                   <time>
                     <xsl:value-of select="pubDate" />
                   </time>
                 </article>
               </xsl:for-each>
             </section>
           </main>
         </body>
       </html>
     </xsl:template>
   </xsl:stylesheet>
   ```

## Include Content (sanitized)

- [Astro (RSS) - Including full post content](https://docs.astro.build/en/guides/rss/#including-full-post-content)

1. Install packages
   ```shell title="terminal"
   deno add npm:markdown-it npm:sanitize-html
   ```
1. Update `rss.xml.js` to add the `content` from each `item`. This project filters items, checking for `data.rss`, and sorted by descending date.
   ```javascript title="rss.xml.js" mark={4-6,8-9,40-46}
   import rss from "@astrojs/rss";
   import { getCollection } from "astro:content";

   // https://github.com/markdown-it/markdown-it
   import MarkdownIt from "markdown-it";
   const markdownParser = new MarkdownIt();

   // https://github.com/apostrophecms/sanitize-html
   import sanitizeHtml from "sanitize-html";

   // export function GET(context) {
   export async function GET(context) {
     const docs = await getCollection("docs");
     const items = docs
       .filter((page) => page.data.rss === true)
       .sort((a, b) => b.data.pubDate - a.data.pubDate);

     return rss({
       // ex. use your stylesheet from "public/rss/styles.xsl"
       stylesheet: "/lucero/rss/styles.xsl",

       // `<title>` field in output xml
       title: "Lucero",

       // `<description>` field in output xml
       description: "Take your documentation to the moon and back in the blink of an eye.",

       // Pull in your project "site" from the endpoint context
       // https://docs.astro.build/en/reference/api-reference/#contextsite
       site: `${context.site}/lucero`,

       // Array of `<item>`s in output xml
       // See "Generating items" section for examples using content collections and glob imports
       items: items.map((item) => ({
         title: item.data.title,
         pubDate: item.data.pubDate,
         description: item.data.description,

         // Compute RSS link from item `slug`
         link: `/lucero/${item.slug}/`,

         content: sanitizeHtml(
           markdownParser.render(item.body),
           {
             allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
           },
         )
           .replace(/\x1B/g, "&esc;"),
       })),

       // (optional) inject custom xml
       customData: `<language>en-us</language>`,
     });
   }
   ```

## Enable [RSS Auto-discovery](https://www.rssboard.org/rss-autodiscovery)

- [Astro Docs](https://docs.astro.build/en/guides/rss/#enabling-rss-feed-auto-discovery)

Update the `defineConfig.integrations.starlight.head` in the project `astro.config.mjs` file with the following

```javascript title="astro.config.mjs" {6-16}
export default defineConfig({
  // ...
  integrations: [
    starlight({
      title: 'Lucero',
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'alternate',
            type: 'application/rss+xml',
            title: 'Lucero',
            href: 'https://indyandie.github.io/lucero/rss.xml',
          },
        },
      ],
      // ...
    }),
  ],
})
```
