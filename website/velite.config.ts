import { basename, dirname, join } from 'node:path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { defineCollection, defineConfig, s } from 'velite'

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
      // @ts-expect-error TODO
      const id = basename(meta.path, '.mdx')
      // @ts-expect-error TODO
      const category = basename(dirname(meta.path))
      const href = join('/docs/', category, id)

      return { ...data, id, category, slug: join(category, id), href }
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
  },
})
