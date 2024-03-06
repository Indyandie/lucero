import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';

// https://astro.build/config
export default defineConfig({
	site: 'https://indyandie.github.io/',
  base: 'lucero/',
	integrations: [
		starlight({
			title: '🌕 Lucero',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			plugins: [
        // Generate the OpenAPI documentation pages.
        starlightOpenAPI([
          {
           base: 'api/openai',
           label: 'openAI',
           schema: './apis/openai.yml',
          },
          {
           base: 'api/pokeapi',
           label: 'PokeAPI',
           schema: './apis/pokeapi.yml',
          },
        ]),
      ],
			sidebar: [
				{
					label: 'Docs',
					autogenerate: { directory: 'docs' },
				},
				{
          label: 'APIs',
          items: openAPISidebarGroups,
        },
				{
					label: 'Elements',
					autogenerate: { directory: 'elements' },
				},
			],
		}),
	],
});
