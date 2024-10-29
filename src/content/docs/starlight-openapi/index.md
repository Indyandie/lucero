---
title: overview
sidebar:
  order: 0
lastUpdated: 2022-10-28
---

The [Starlight OpenAPI](https://starlight-openapi.vercel.app/) plugin generates documentation using OpenAPI specifications.

## Quick Setup

### Include `import`

```js title="astro.config.mjs (import)" ins={1}
import starlightOpenAPI, { openAPISidebarGroups } from "starlight-openapi";
```

### Add to `plugins`

```js title="astro.config.mjs (plugin)" ins={3-14}
plugins: [
  // Generate the OpenAPI documentation pages.
  starlightOpenAPI([
    {
      base: "api/openai",
      label: "openAI",
      schema: "./src/assets/openapi-documents/openai.yaml",
    },
    {
      base: "api/pokeapi",
      label: "PokeAPI",
      schema: "./src/assets/openapi-documents/pokeapi.yaml",
    },
  ]),
],
```

### Include in the `sidebar`

```js title="astro.config.mjs (sidebar)" ins={9} ins="openAPISidebarGroups"
sidebar: [
  {
    label: "OpenAPI",
    items: [
      {
        label: "starlight-openapi",
        items: [
          ,"starlight-openapi", 
          ...openAPISidebarGroups
          ],
      },
      {
        label: "Stoplight Elements",
        autogenerate: { directory: "openapi/stoplight-elements" },
      },
      {
        label: "RapiDoc",
        autogenerate: { directory: "openapi/rapidoc" },
      },
    ],
  },
],
```
