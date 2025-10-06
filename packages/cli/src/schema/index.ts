import { z } from 'zod'

const registryItemType = z.enum([
  'registry:block',
  'registry:component',
  'registry:recipe',
  'registry:ui',
])

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue }

const jsonValue: z.ZodType<JsonValue> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.null(),
    z.array(jsonValue),
    z.record(z.string(), jsonValue),
  ]),
)

const registryFile = z.object({
  type: registryItemType,
  path: z.string(),
  content: z.string(),
})
export type RegistryFile = z.infer<typeof registryFile>

const registry = z.object({
  $schema: z.url(),
  name: z.string(),
  homepage: z.url(),
  items: z.array(z.lazy(() => registryItem)),
})
export type Registry = z.infer<typeof registry>

export const registryItem = z.object({
  $schema: z.url().optional(),
  name: z.string(),
  type: registryItemType,
  categories: z.array(z.string()).optional(),
  dependencies: z.array(z.string()).optional(),
  description: z.string().optional(),
  devDependencies: z.array(z.string()).optional(),
  files: z.array(registryFile).optional(),
  panda: z
    .object({
      extension: jsonValue.optional(),
    })
    .optional(),
  registryDependencies: z.array(z.string()).optional(),
})
export type RegistryItem = z.infer<typeof registryItem>

export const registryIndexList = z.array(z.object({ id: z.string() }))

const Framework = z.enum(['react', 'vue', 'solid', 'svelte'])
export type Framework = z.infer<typeof Framework>

const parkUIConfig = z.object({
  framework: z.enum(['react', 'solid', 'svelte', 'vue']),
  paths: z.object({
    components: z.string(),
    theme: z.string(),
  }),
})
export type ParkUIConfig = z.infer<typeof parkUIConfig>
