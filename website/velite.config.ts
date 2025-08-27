import { basename, dirname, join } from 'node:path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkDirective from 'remark-directive'
import { defineCollection, defineConfig, s } from 'velite'
import { remarkCallout } from '~/lib/remark'

const docs = defineCollection({
  name: 'Doc',
  pattern: ['docs/**/*.mdx'],
  schema: s
    .object({
      title: s.string(),
      description: s.string(),
      links: s
        .object({
          recipe: s.string().url().optional(),
          source: s.string().url().optional(),
          ark: s.string().url().optional(),
        })
        .optional(),
      mdx: s.mdx(),
      toc: s.toc(),
    })
    .transform((data, { meta }) => {
      if (typeof meta.path !== 'string') {
        throw new Error('Meta path is not a string')
      }
      const id = basename(meta.path, '.mdx')
      const category = basename(dirname(meta.path))
      const href = toBasePath(meta.path)
      const slug = join(category, id).replace(/^docs\//, '')

      return { ...data, id, category, slug, href }
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
    remarkPlugins: [remarkDirective, remarkCallout],
  },
})

const toBasePath = (filePath: string): string => {
  const contentIndex = filePath.indexOf('/src/content')
  if (contentIndex === -1) return filePath
  const relativePath = filePath.slice(contentIndex + '/src/content'.length)
  return relativePath.replace(/\.mdx$/, '')
}
