import { defineConfig, passthroughImageService } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'
// import rehypeMermaid from 'rehype-mermaid'

// https://astro.build/config

const siteURl = 'https://lucero.indieandy.cc/'

export default defineConfig({
  site: siteURl,
  image: {
    service: passthroughImageService(),
  },
  // base: '/lucero',
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
            href: `${siteURl}rss.xml`,
          },
        },
      ],
      logo: {
        dark: './src/assets/images/twemoji/full-moon.svg',
        light: './src/assets/images/twemoji/new-moon.svg',
        // src: './src/assets/images/twemoji/first-quarter-moon.svg',
        replacesTitle: false,
      },
      social: {
        github: 'https://github.com/indyandie/lucero',
        rss: `${siteURl}rss.xml`,
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
          collapsed: true,
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
        {
          label: 'RSS Feed',
          link: '/rss.xml',
          attrs: { target: '_blank' },
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
