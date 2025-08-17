import { z } from 'zod'

const registryItemType = z.enum(['block', 'component', 'recipe', 'slotRecipe', 'theme'])

const exportEntry = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('named'),
    symbols: z.array(
      z.object({
        name: z.string(),
        isType: z.boolean().optional(),
      }),
    ),
  }),
  z.object({
    type: z.literal('namespace'),
    as: z.string(),
  }),
])

type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue }

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
  exports: z.array(exportEntry).optional(),
})

const pandaConfig = z.object({
  theme: jsonValue.optional(),
})

const pandaConfiguration = z.object({
  config: pandaConfig.optional(),
})

export const registryItem = z.object({
  id: z.string(),
  type: registryItemType,
  name: z.string().optional(),
  description: z.string().optional(),
  dependencies: z.array(z.string()).optional(),
  devDependencies: z.array(z.string()).optional(),
  registryDependencies: z.array(z.string()).optional(),
  files: z.array(registryFile).optional(),
  panda: pandaConfiguration.optional(),
  categories: z.array(z.string()).optional(),
})

export type RegistryItem = z.infer<typeof registryItem>
