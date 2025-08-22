import { basename, dirname, join } from 'node:path'
import { defineCollection, defineConfig, s } from 'velite'

const docs = defineCollection({
  name: 'Doc',
  pattern: ['docs/**/*.mdx'],
  schema: s
    .object({
      title: s.string(),
      description: s.string(),
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
})
