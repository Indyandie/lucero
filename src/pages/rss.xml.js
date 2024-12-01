import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

// https://github.com/markdown-it/markdown-it
import MarkdownIt from 'markdown-it'
const markdownParser = new MarkdownIt()

// https://github.com/apostrophecms/sanitize-html
import sanitizeHtml from 'sanitize-html'

// export function GET(context) {
export async function GET(context) {
  const docs = await getCollection('docs')
  const items = docs
    .filter((page) => page.data.rss === true)
    .sort((a, b) => b.data.pubDate - a.data.pubDate)

  return rss({
    // ex. use your stylesheet from "public/rss/styles.xsl"
    stylesheet: '/lucero/rss/styles.xsl',

    // `<title>` field in output xml
    title: 'Lucero',

    // `<description>` field in output xml
    description: 'Take your documentation to the moon and back in the blink of an eye.',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: `${context.site}/lucero`,

    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: items.map((page) => ({
      title: page.data.title,
      puitems: page.data.pubDate,
      description: page.data.description,

      // Compute RSS link from page `slug`
      link: `/lucero/${page.slug}/`,

      // content: sanitizeHtml(page.compiledContent()),
      content: sanitizeHtml(
        markdownParser.render(page.body),
        {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
        },
      )
        .replace(/\x1b/g, '&esc;'),
    })),

    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  })
}
