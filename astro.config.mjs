import { defineConfig, passthroughImageService } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'

// https://astro.build/config
export default defineConfig({
  site: 'https://indyandie.github.io/',
  image: {
    // service: squooshImageService(),
    service: passthroughImageService(),
  },
  base: '/lucero',
  integrations: [
    starlight({
      title: '🌕 Lucero',
      social: {
        github: 'https://github.com/indyandie/lucero',
      },
      components: {
        ContentPanel: './src/components/overrides/CustomContentPanel.astro',
      },
      plugins: [
        // Generate the OpenAPI documentation pages.
        starlightOpenAPI([
          {
            base: 'api/openai',
            label: 'openAI',
            schema: 'https://raw.githubusercontent.com/openai/openai-openapi/master/openapi.yaml',
          },
          {
            base: 'api/pokeapi',
            label: 'PokeAPI',
            schema: 'https://raw.githubusercontent.com/PokeAPI/pokeapi/master/openapi.yml',
          },
        ]),
      ],
      sidebar: [
        {
          label: 'Docs',
          autogenerate: { directory: 'docs' },
        },
        {
          label: 'OpenAPI',
          items: [
            {
              label: 'starlight-openapi',
              items: openAPISidebarGroups,
            },
            {
              label: 'Stoplight Elements',
              autogenerate: { directory: 'openapi/stoplight-elements' },
            },
            {
              label: 'RapiDoc',
              autogenerate: { directory: 'openapi/rapidoc' },
            },
          ],
        },
      ],
    }),
  ],
  vite: {
    server: {
      watch: {
        useFsEvents: false,
        usePolling: true,
      },
    },
  },
})
