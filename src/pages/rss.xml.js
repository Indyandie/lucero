import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
// https://github.com/markdown-it/markdown-it
import MarkdownIt from 'markdown-it'
const parser = new MarkdownIt()
// https://github.com/apostrophecms/sanitize-html
import sanitizeHtml from 'sanitize-html'

// export function GET(context) {
export async function GET(context) {
  const blog = await getCollection('docs')

  return rss({
    // `<title>` field in output xml
    title: 'Lucero',
    // `<description>` field in output xml
    description: 'Take your documentation to the moon and back in the blink of an eye.',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/lucero/${post.slug}/`,
      // content: sanitizeHtml(post.compiledContent()),
      content: sanitizeHtml(
        parser.render(post.body),
        {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
        },
      ).replace(/[\x1B]/g, '&esc;'),
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  })
}
