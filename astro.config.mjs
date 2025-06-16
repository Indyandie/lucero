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
        {
          // favicon
          tag: 'link',
          attrs: { rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' },
        },
        // IOS/Android
        {
          tag: 'link',
          attrs: { rel: 'apple-touch-icon', sizes: '192x192', href: '/apple-touch-icon-192x192.png' },
        },
        {
          tag: 'link',
          attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon-180x180.png' },
        },
        {
          tag: 'link',
          attrs: { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-touch-icon-152x152.png' },
        },
        {
          tag: 'link',
          attrs: { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon-120x120.png' },
        },
        {
          tag: 'link',
          attrs: { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-touch-icon-76x76.png' },
        },
        {
          tag: 'link',
          attrs: { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-touch-icon-57x57.png' },
        },
        {
          tag: 'link',
          attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        },

        {
          // Safari 9+
          tag: 'link',
          attrs: { rel: 'mask-icon', href: '/mask-icon.svg', color: '#012C3C' },
        },

        {
          // Chrome Android
          tag: 'link',
          attrs: { rel: 'icon', sizes: '196x196', href: '/shortcut-icon.png' },
        },
      ],
      logo: {
        dark: './src/assets/images/twemoji/full-moon.svg',
        light: './src/assets/images/twemoji/new-moon.svg',
        // src: './src/assets/images/twemoji/first-quarter-moon.svg',
        replacesTitle: false,
      },
      social: [
        { icon: 'github', label: 'github', href: 'https://github.com/indyandie/lucero' },
        { icon: 'rss', label: 'rss', href: `${siteURl}rss.xml` },
      ],
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
