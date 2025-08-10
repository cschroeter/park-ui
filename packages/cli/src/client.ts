import { createFetch, createSchema } from '@better-fetch/fetch'
import { z } from 'zod'

export type ExportsConfig = z.infer<typeof ExportsConfig>
const ExportsConfig = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('named'),
    specifier: z.string(),
    symbols: z.array(
      z.object({
        name: z.string(),
        isType: z.boolean().optional(),
      }),
    ),
  }),
  z.object({
    type: z.literal('namespace'),
    specifier: z.string(),
    name: z.string(),
  }),
])

const Recipe = z.object({
  id: z.string(),
  filename: z.string(),
  recipe: z.string(),
  hasSlots: z.boolean(),
})

const Component = z.object({
  id: z.string(),
  filename: z.string(),
  sourceCode: z.string(),
  exportsConfig: ExportsConfig,
})

const Index = z.array(
  z.object({
    id: z.string(),
  }),
)

export const schema = createSchema({
  '/recipes/index': {
    output: Index,
  },
  '/recipes/:id': {
    output: Recipe,
  },
  '/components/:framework/index': {
    output: Index,
  },
  '/components/:framework/:id': {
    output: Component,
  },
})

const $fetch = createFetch({
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

export type Framework = 'react' | 'vue' | 'svelte' | 'solid'

interface Params {
  framework: Framework
  id: string
}

export const getComponent = (params: Params) => $fetch('/components/:framework/:id', { params })
export const getRecipe = (id: string) => $fetch('/recipes/:id', { params: { id } })

export const listRecipes = () => $fetch('/recipes/index')
export const listComponents = (framework: Framework) =>
  $fetch('/components/:framework/index', { params: { framework } })
