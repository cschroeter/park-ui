import { basename, join } from 'node:path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkDirective from 'remark-directive'
import { defineCollection, defineConfig, s } from 'velite'
import { remarkCallout, remarkCodeMeta } from '~/lib/remark'

const docs = defineCollection({
  name: 'Doc',
  pattern: ['docs/**/*.mdx'],
  schema: s
    .object({
      title: s.string(),
      description: s.string(),
      category: s.string(),
      links: s
        .object({
          recipe: s.string().url().optional(),
          source: s.string().url().optional(),
          ark: s.string().url().optional(),
        })
        .optional(),
      mdx: s.mdx(),
      toc: s.toc({ maxDepth: 3 }),
    })
    .transform((data, { meta }) => {
      if (typeof meta.path !== 'string') {
        throw new Error('Meta path is not a string')
      }
      const id = basename(meta.path, '.mdx')
      const href = toBasePath(meta.path)
      const slug = href.replace('/docs/', '')

      return { ...data, id, slug, href }
    }),
})

export default defineConfig({
  root: join(process.cwd(), './src/content'),
  collections: { docs },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
    remarkPlugins: [remarkDirective, remarkCallout, remarkCodeMeta],
  },
})

const toBasePath = (filePath: string): string => {
  const contentIndex = filePath.indexOf('/src/content')
  if (contentIndex === -1) return filePath
  const relativePath = filePath.slice(contentIndex + '/src/content'.length)
  return relativePath.replace(/\.mdx$/, '')
}
