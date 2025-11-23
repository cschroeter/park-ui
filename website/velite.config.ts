import { basename, join } from 'node:path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkDirective from 'remark-directive'
import { defineCollection, defineConfig, s } from 'velite'
import { remarkCallout, remarkCodeMeta } from '~/lib/remark'

const posts = defineCollection({
  name: 'Post',
  pattern: ['posts/**/*.mdx'],
  schema: s
    .object({
      title: s.string(),
      description: s.string(),
      publishedAt: s.string(),
      mdx: s.mdx(),
    })
    .transform((data, { meta }) => {
      if (typeof meta.path !== 'string') {
        throw new Error('Meta path is not a string')
      }
      const slug = basename(meta.path, '.mdx')
      const href = `/blog/${slug}`
      return { ...data, slug, href }
    }),
})

const docs = defineCollection({
  name: 'Doc',
  pattern: ['docs/**/*.mdx'],
  schema: s
    .object({
      title: s.string(),
      description: s.string(),
      metaDescription: s.string(),
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
      content: s.custom().transform((_, { meta }) => meta.content as string),
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

const changelog = defineCollection({
  name: 'Changelog',
  pattern: ['changelog/**/*.mdx'],
  schema: s.object({
    date: s.string(),
    mdx: s.mdx(),
  }),
})

export default defineConfig({
  root: join(process.cwd(), './src/content'),
  collections: { docs, posts, changelog },
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
