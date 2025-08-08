import { betterFetch } from '@better-fetch/fetch'
import { z } from 'zod'

const componentFileSchema = z.object({
  type: z.literal('component'),
  path: z.string(),
  content: z.string(),
  export: z.string(),
})

const recipeFileSchema = z.object({
  type: z.literal('recipe'),
  path: z.string(),
  content: z.string(),
  isSlotRecipe: z.boolean(),
})

const fileSchema = z.discriminatedUnion('type', [componentFileSchema, recipeFileSchema])

const schema = z.object({
  id: z.string(),
  name: z.string(),
  files: z.array(fileSchema),
})

const { data, error } = await betterFetch('https://jsonplaceholder.typicode.com/todos/1', {
  output: schema,
})

if (error) {
  console.error('Error fetching data:', error)
} else {
  console.log('Fetched data:', data)
}
