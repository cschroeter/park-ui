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
    })
    .transform((data, { meta }) => {
      const id = basename(meta.path, '.mdx')
      const category = basename(dirname(meta.path))
      const href = join('/docs/', category, id)

      return { ...data, id, category, slug: join(category, id), href }
    }),
})

export default defineConfig({
  root: join(process.cwd(), './src/content'),
  collections: { docs },
})
