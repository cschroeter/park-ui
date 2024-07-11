import path from 'node:path'
import { Schema } from '@effect/schema'
import { Effect, pipe } from 'effect'
import { getTsconfig } from 'get-tsconfig'
import type { Config } from './get-config'

const TsconfigJson = Schema.Struct({
  compilerOptions: Schema.Struct({
    baseUrl: Schema.String,
    paths: Schema.Record(Schema.String, Schema.Array(Schema.String)),
  }),
})

export const getImportAliasPath = (config: Config) =>
  pipe(
    Effect.fromNullable(getTsconfig()),
    Effect.flatMap(({ config }) => Schema.decodeUnknown(TsconfigJson)(config)),
    Effect.flatMap((tsconfig) =>
      Effect.fromNullable(tsconfig.compilerOptions.paths[config.importAlias][0]),
    ),
    Effect.map((aliasPath) => path.resolve(aliasPath.replace('/*', ''))),
  )
