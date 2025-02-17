# 🌕 Lucero

Documentation playground using [starlight](https://starlight.astro.build/) and [starlight-openapi](https://starlight-openapi.vercel.app/).

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## Starlight Deets

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

---

### Commands

> [!WARNING]
> This repo uses the [Deno](https://deno.com/) runtime.

All commands are run from the root of the project, from a terminal:

| command                              | action                                                                                        |
| :----------------------------------- | :-------------------------------------------------------------------------------------------- |
| `deno install --allow-scripts`       | Installs dependencies                                                                         |
| `deno task dev`                      | Starts local dev server at `localhost:4321`                                                   |
| `deno task build`                    | Build your production site to `./dist/`                                                       |
| `deno task preview`                  | Preview your build locally, before deploying                                                  |
| `deno task astro ...`                | Run CLI commands like `astro add`, `astro check`                                              |
| `deno task astro -- --help`          | Get help using the Astro CLI                                                                  |
| `deno run -A npm:@astrojs/upgrade`   | _"Update"_ **Astro** dependencies, use the command below to bump or install the dependencies. |
| `deno add npm:<package>[@<version>]` | Add/Upgrade package                                                                           |

## To Do

- Markdown
  - [ ] Reference links
  - Mermaid JS
    - [ ] NixOS playwright workaround
    - [ ] update `workflow`
- [ ] Add Tailwind CSS (Wait till next version, so configuration can be in a `CSS` file?)
- [ ] Custom palette (dark/light)
- [ ] Create Expressive Code Theme
- [ ] Add [**RSS feed**](https://docs.astro.build/en/guides/rss/)
  - [x] docs collection
  - [x] add stylesheet [Pretty feed](https://github.com/genmon/aboutfeeds/blob/main/tools/pretty-feed-v3.xsl)
  - [ ] blog collection
  - [ ] announcements collection
- [ ] Create customizable components
  - [ ] Stoplight Elements
  - [ ] RapiDoc
- new projects
  - [ ] Fork to create a Deno Starlight starter kit.
  - [x] Fork to create a version that overrides the starlight components with simpler semantic versions.
    - [dwarflight](https://github.com/Indyandie/dwarflight)
