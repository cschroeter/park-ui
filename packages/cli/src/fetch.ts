import { createFetch, createSchema } from '@better-fetch/fetch'
import { z } from 'zod'

const Recipe = z.object({
  id: z.string(),
  name: z.string(),
  filename: z.string(),
  recipe: z.string(),
  hasSlots: z.boolean(),
})

const Component = z.object({
  id: z.string(),
  name: z.string(),
  filename: z.string(),
  sourceCode: z.string(),
  exportStatement: z.string(),
})

export const schema = createSchema({
  '/:framework/recipes/:id': {
    output: Recipe,
  },
  '/:framework/components/:id': {
    output: Component,
  },
})

export const fetch = createFetch({
  baseURL: 'https://next.park-ui.com/registry/latest',
  schema,
  plugins: [
    {
      id: 'json',
      name: 'JSON',
      init: (url, options) => ({
        url: `${url}.json`,
        options,
      }),
    },
  ],
})

const { data, error } = await fetch('/:framework/:category/:id', {
  params: {
    framework: 'react',
    category: 'components',
    id: 'avatar',
  },
})

console.log({ data, error })
