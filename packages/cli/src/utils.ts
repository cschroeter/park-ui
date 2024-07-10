import path from 'node:path'
import { Schema } from '@effect/schema'
import { Effect, pipe } from 'effect'
import { getTsconfig } from 'get-tsconfig'

const TsconfigJson = Schema.Struct({
  compilerOptions: Schema.Struct({
    baseUrl: Schema.String,
    paths: Schema.Record(Schema.String, Schema.Array(Schema.String)),
    jsxImportSource: Schema.optional(Schema.Literal('react', 'solid-js', 'vue'), {
      default: () => 'react',
    }),
  }),
})

export const getTsconfigPath = () =>
  pipe(
    Effect.fromNullable(getTsconfig()),
    Effect.flatMap(({ config }) => Schema.decodeUnknown(TsconfigJson)(config)),
  )

export const resolveBasePath = (outDir: string) =>
  getTsconfigPath().pipe(
    Effect.map((config) => {
      const [alias] = outDir.split('/')
      const key = path.join(alias, '*')
      const aliasPath = config.compilerOptions.paths[key][0].replace('/*', '')
      return path.resolve(aliasPath, outDir.replace(`${alias}/`, ''))
    }),
  )
