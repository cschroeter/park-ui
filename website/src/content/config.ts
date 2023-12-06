import { defineCollection, z } from 'astro:content'

const components = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    category: z.string(),
    description: z.string(),
    ark: z.object({ link: z.string() }).optional(),
    label: z.string().optional(),
  }),
})

const overview = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    label: z.string().optional(),
  }),
})

const props = defineCollection({
  type: 'data',
  schema: z.record(
    z.string(),
    z.object({
      options: z.array(z.string()).optional(),
      defaultValue: z.string().optional(),
    }),
  ),
})

export const collections = {
  components,
  overview,
  props,
}
