import { z } from 'zod'

const registryItemType = z.enum(['block', 'component', 'recipe', 'theme'])

const moduleDeclaration = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('named'),
    moduleSpecifier: z.string(),
    symbols: z.array(
      z.object({
        name: z.string(),
        isType: z.boolean().optional(),
      }),
    ),
  }),
  z.object({
    type: z.literal('namespace'),
    moduleSpecifier: z.string(),
    namespace: z.string(),
  }),
  z.object({
    type: z.literal('object-literal'),
    variableName: z.string(),
    properties: z.array(
      z.object({
        name: z.string(),
        value: z.string().optional(),
      }),
    ),
  }),
])
export type ModuleDeclaration = z.infer<typeof moduleDeclaration>

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

const indexFile = z.object({
  exports: z.array(moduleDeclaration).optional(),
  imports: z.array(moduleDeclaration).optional(),
})
export type IndexFile = z.infer<typeof indexFile>

const registryFile = z.object({
  type: registryItemType,
  fileName: z.string(),
  content: z.string(),
  indexFile: indexFile.optional(),
})
export type RegistryFile = z.infer<typeof registryFile>

const pandaConfig = z.object({
  extension: jsonValue.optional(),
  imports: z.array(moduleDeclaration).optional(),
})
export type PandaConfig = z.infer<typeof pandaConfig>

export const registryItem = z.object({
  id: z.string(),
  type: registryItemType,
  name: z.string().optional(),
  description: z.string().optional(),
  dependencies: z.array(z.string()).optional(),
  devDependencies: z.array(z.string()).optional(),
  registryDependencies: z.array(z.string()).optional(),
  files: z.array(registryFile).optional(),
  pandaConfig: pandaConfig.optional(),
  categories: z.array(z.string()).optional(),
})
export type RegistryItem = z.infer<typeof registryItem>

export const registryIndexList = z.array(z.object({ id: z.string() }))

const Framework = z.enum(['react', 'vue', 'solid', 'svelte'])
export type Framework = z.infer<typeof Framework>

const Context = z.object({
  framework: z.enum(['react', 'solid', 'svelte', 'vue']),
  paths: z.object({
    components: z.string(),
    theme: z.string(),
  }),
})
export type Context = z.infer<typeof Context>
