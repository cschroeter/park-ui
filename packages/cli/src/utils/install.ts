import { join } from 'node:path'
import { Effect, Match } from 'effect'
import { outputFile } from 'fs-extra'
import type { ParkUIConfig, RegistryFile, RegistryItem } from '../schema'
import { updateIndexFile } from './index-file'
import { updatePandaConfig } from './panda'

interface Args {
  item: RegistryItem
  ctx: ParkUIConfig
}

export const installRegistryItem = ({ item: { files, pandaConfig }, ctx }: Args) =>
  Effect.all([
    createFiles({
      files,
      ctx,
    }),
    updatePandaConfig(pandaConfig),
  ])

interface CreateFilesArgs {
  files?: RegistryFile[]
  ctx: ParkUIConfig
}

const createFiles = ({ files = [], ctx }: CreateFilesArgs) =>
  Effect.forEach(files, (file) =>
    Effect.all([
      Effect.tryPromise({
        try: () =>
          outputFile(
            Match.value(file).pipe(
              Match.when({ type: 'component' }, ({ fileName }) =>
                join(ctx.paths.components, fileName),
              ),
              Match.when({ type: 'recipe' }, ({ fileName }) =>
                join(ctx.paths.theme, 'recipes', fileName),
              ),
              Match.orElse(() => file.fileName),
            ),
            file.content,
          ),
        catch: () => new Error(`Failed to create file: ${file.fileName}`),
      }),

      Effect.fromNullable(file.indexFile).pipe(
        Effect.map((indexFile) => ({
          exports: indexFile.exports,
          imports: indexFile.imports,
          path: Match.value(file).pipe(
            Match.when({ type: 'component' }, () => join(ctx.paths.components, 'index.ts')),
            Match.when({ type: 'recipe' }, () => join(ctx.paths.theme, 'recipes', 'index.ts')),
            Match.orElse(() => 'index.ts'),
          ),
        })),
        Effect.map(updateIndexFile),
      ),
    ]),
  )
