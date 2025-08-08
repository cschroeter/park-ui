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

const Index = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
  }),
)

export const schema = createSchema({
  '/:framework/recipes/index': {
    output: Index,
  },
  '/:framework/recipes/:id': {
    output: Recipe,
  },
  '/:framework/components/index': {
    output: Index,
  },
  '/:framework/components/:id': {
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

export const getComponent = (params: Params) => $fetch('/:framework/components/:id', { params })
export const getRecipe = (params: Params) => $fetch('/:framework/recipes/:id', { params })

export const listRecipes = (framework: Framework) =>
  $fetch('/:framework/recipes/index', { params: { framework } })
export const listComponents = (framework: Framework) =>
  $fetch('/:framework/components/index', { params: { framework } })
