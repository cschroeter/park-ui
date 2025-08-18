import { join } from 'node:path'
import { Effect, Match } from 'effect'
import { outputFile } from 'fs-extra'
import type { ParkUIConfig, RegistryFile, RegistryItem } from './schema'

interface Args {
  item: RegistryItem
  config: ParkUIConfig
}

export const installRegistryItem = ({ item, config }: Args) =>
  Effect.all([
    createFiles({
      files: item.files,
      config,
    }),
  ])

interface CreateFilesArgs {
  files?: RegistryFile[]
  config: ParkUIConfig
}

const createFiles = ({ files = [], config }: CreateFilesArgs) =>
  Effect.forEach(files, (file) =>
    Effect.tryPromise({
      try: () =>
        outputFile(
          Match.value(file).pipe(
            Match.when({ type: 'component' }, () => join(config.paths.components, file.path)),
            Match.when({ type: 'slotRecipe' }, () => join(config.paths.theme, file.path)),
            Match.when({ type: 'recipe' }, () => join(config.paths.theme, file.path)),
            Match.orElse(() => file.path),
          ),
          file.content,
        ),
      catch: () => new Error(`Failed to create file: ${file.path}`),
    }),
  )

// // const programm = updatePandaConfig(config).pipe(
// //   Effect.catchTag('PandaConfigInvalid', () => Effect.succeed(undefined)),
// //   Effect.catchTag('PandaConfigNotFound', () => Effect.succeed(undefined)),
// // )
