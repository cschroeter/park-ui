import { z } from 'zod'

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

const registryItemType = z.enum([
  'registry:block',
  'registry:color',
  'registry:component',
  'registry:recipe',
  'registry:theme',
  'registry:ui',
])

export type RegistryItemType = z.infer<typeof registryItemType>

const registryFile = z.object({
  type: registryItemType,
  path: z.string(),
  content: z.string(),
  exports: z.string().optional(),
  imports: z.string().optional(),
})

export type RegistryFile = z.infer<typeof registryFile>

const registryItemImport = z.object({
  type: registryItemType,
  name: z.string(),
  from: z.string(),
})

export type RegistryItemImport = z.infer<typeof registryItemImport>

export const registryItem = z.object({
  $schema: z.url().optional(),
  name: z.string(),
  type: registryItemType,
  categories: z.array(z.string()).optional(),
  dependencies: z.array(z.string()).optional(),
  description: z.string().optional(),
  devDependencies: z.array(z.string()).optional(),
  files: z.array(registryFile).optional(),
  registryDependencies: z.array(z.string()).optional(),
  panda: z
    .object({
      extension: jsonValue.optional(),
      imports: z.array(registryItemImport).optional(),
    })
    .optional(),
})

export type RegistryItem = z.infer<typeof registryItem>

export const registryIndexList = z.object({ name: z.string(), type: registryItemType }).array()

const Framework = z.enum(['react', 'vue', 'solid', 'svelte'])
export type Framework = z.infer<typeof Framework>
