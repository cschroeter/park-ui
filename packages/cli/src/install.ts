import { join } from 'node:path'
import { Effect, Match } from 'effect'
import { outputFile } from 'fs-extra'
import { updateIndexFile } from './index-file'
import { updatePandaConfig } from './panda'
import type { ParkUIConfig, RegistryFile, RegistryItem } from './schema'

interface Args {
  item: RegistryItem
  config: ParkUIConfig
}

export const installRegistryItem = ({ item: { files, pandaConfig }, config }: Args) =>
  Effect.all([
    createFiles({
      files,
      config,
    }),
    updatePandaConfig(pandaConfig),
  ])

interface CreateFilesArgs {
  files?: RegistryFile[]
  config: ParkUIConfig
}

const createFiles = ({ files = [], config }: CreateFilesArgs) =>
  Effect.forEach(files, (file) =>
    Effect.all([
      Effect.tryPromise({
        try: () =>
          outputFile(
            Match.value(file).pipe(
              Match.when({ type: 'component' }, ({ fileName }) =>
                join(config.paths.components, fileName),
              ),
              Match.when({ type: 'recipe' }, ({ fileName }) =>
                join(config.paths.theme, 'recipes', fileName),
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
            Match.when({ type: 'component' }, () => join(config.paths.components, 'index.ts')),
            Match.when({ type: 'recipe' }, () => join(config.paths.theme, 'recipes', 'index.ts')),
            Match.orElse(() => 'index.ts'),
          ),
        })),
        Effect.map(updateIndexFile),
      ),
    ]),
  )
