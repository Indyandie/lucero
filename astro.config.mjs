import { defineConfig, passthroughImageService } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'
// import rehypeMermaid from 'rehype-mermaid'

// https://astro.build/config
export default defineConfig({
  site: 'https://indyandie.github.io/',
  image: {
    service: passthroughImageService(),
  },
  base: '/lucero',
  integrations: [
    starlight({
      title: 'Lucero',
      logo: {
        dark: './src/assets/images/twemoji/full-moon.svg',
        light: './src/assets/images/twemoji/new-moon.svg',
        // src: './src/assets/images/twemoji/first-quarter-moon.svg',
        replacesTitle: false,
      },
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
            schema: './src/assets/openapi-documents/openai.yaml',
          },
          {
            base: 'api/pokeapi',
            label: 'PokeAPI',
            schema: './src/assets/openapi-documents/pokeapi.yaml',
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
              items: [
                'starlight-openapi',
                ...openAPISidebarGroups,
              ],
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
      expressiveCode: {
        themes: [
          'github-dark-dimmed',
          'github-light',
        ],
      },
      customCss: [
        // Relative path to your custom CSS file
        './src/fonts/font-face.css',
        './src/styles/custom.css',
      ],
    }),
  ],
  // markdown: {
  //   rehypePlugins: [
  //     // rehypeMermaid,
  //   ],
  // },
  vite: {
    server: {
      watch: {
        useFsEvents: false,
        usePolling: true,
      },
    },
  },
})
