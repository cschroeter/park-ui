import path from 'node:path'
import { Schema } from '@effect/schema'
import { Console, Effect, pipe } from 'effect'
import { getTsconfig } from 'get-tsconfig'

const TsconfigJson = Schema.Struct({
  compilerOptions: Schema.Struct({
    baseUrl: Schema.String,
    paths: Schema.Record(Schema.String, Schema.Array(Schema.String)),
  }),
})

export const resolveBasePath = (outDir: string) =>
  pipe(
    Effect.fromNullable(getTsconfig()),
    Effect.tap(Console.log),
    Effect.flatMap(({ config }) => Schema.decodeUnknown(TsconfigJson)(config)),
    Effect.map((config) => {
      const [alias] = outDir.split('/')
      const key = path.join(alias, '*')
      const aliasPath = config.compilerOptions.paths[key][0].replace('/*', '')
      return path.resolve(aliasPath, outDir.replace(`${alias}/`, ''))
    }),
  )
