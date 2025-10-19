import { basename, join } from 'node:path'
import { Effect, pipe } from 'effect'
import { globby } from 'globby'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { defineCollection, defineConfig, s } from 'velite'

const pages = defineCollection({
  name: 'Pages',
  pattern: ['pages/**/*.mdx', '../../../packages/preset/CHANGELOG.md'],
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
          framework: '*',
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
  pattern: ['controls/*.json'],
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

const freeBlocks = ['banner-for-cookies', 'card-authentification', 'footer-with-social']

const blocks = defineCollection({
  name: 'Blocks',
  pattern: 'blocks.json',
  schema: s
    .object({
      id: s.string(),
      name: s.string(),
      description: s.string(),
      figmaNodeId: s.string(),
    })
    .transform(async (data) =>
      Effect.runPromise(
        pipe(
          Effect.succeed(`../components/react/src/plus/blocks/${data.id}`),
          Effect.map((blockPath) => join(process.cwd(), blockPath)),
          Effect.flatMap((pattern) =>
            pipe(
              Effect.promise(() => globby(pattern, { onlyDirectories: true })),
              Effect.flatMap((variants) =>
                Effect.forEach(variants, (variant) =>
                  Effect.succeed({
                    id: basename(variant),
                    name: capitalize(basename(variant)),
                    accessLevel: freeBlocks.includes(basename(variant)) ? 'free' : 'paid',
                  }),
                ),
              ),
              Effect.map((variants) => ({ ...data, variantCount: variants.length, variants })),
            ),
          ),
        ),
      ),
    ),
})

export default defineConfig({
  root: join(process.cwd(), './src/content'),
  collections: { pages, controls, blocks },
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

const capitalize = (item: string) =>
  item
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
