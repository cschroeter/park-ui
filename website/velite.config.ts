import path from 'node:path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { defineCollection, defineConfig, s } from 'velite'

const pages = defineCollection({
  name: 'Pages',
  pattern: ['src/content/pages/**/*.mdx', 'packages/*/CHANGELOG.md'],
  schema: s
    .object({
      id: s.string(),
      title: s.string(),
      description: s.string(),
      metadata: s.metadata(),
      content: s.markdown(),
      framework: s.string().default('*'),
      status: s.string().optional(),
      toc: s.toc(),
      code: s.mdx(),
      docs: s.string().optional(),
    })
    .transform((data, { meta }) => {
      if (data.id === 'changelog') {
        return {
          ...data,
          slug: 'overview/changelog',
          category: 'overview',
          framework: meta.path.replace(/.*\/packages\//, '').replace(/\/[^/]*$/, ''),
          toc: data.toc.map((entry) => ({ ...entry, items: [] })),
        }
      }
      return {
        ...data,
        slug: meta.path.replace(/.*\/pages\//, '').replace(/\.mdx$/, ''),
        category: meta.path.replace(/.*\/pages\//, '').replace(/\/[^/]*$/, ''),
      }
    }),
})

const controls = defineCollection({
  name: 'Controls',
  pattern: ['src/content/controls/*.json'],
  schema: s
    .record(
      s.string(),
      s.object({
        options: s.array(s.string()).optional(),
        defaultValue: s.string().optional(),
      }),
    )
    .transform((data, { meta }) => {
      const component = meta.path.replace(/.*\/controls\//, '').replace(/\.json$/, '')
      return {
        component,
        props: data,
      }
    }),
})

export default defineConfig({
  root: path.join(process.cwd()),
  collections: { pages, controls },
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
