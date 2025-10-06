import { join } from 'node:path'
import { Effect, Match, Option, pipe } from 'effect'
import { outputFile } from 'fs-extra'
import type { RegistryFile, RegistryItem } from '../schema'
import { FileError } from './errors'
import { updateIndexFile } from './index-file'
import { updatePandaConfig } from './panda-config'
import { ParkUIConfig } from './park-ui-config'

export const install = ({ files, pandaConfig }: RegistryItem) =>
  Effect.all([
    saveFiles(files),
    Option.match(Option.fromNullable(pandaConfig), {
      onSome: (config) => updatePandaConfig(config),
      onNone: () => Effect.void,
    }),
  ])

const saveFiles = (files: RegistryFile[] = []) =>
  pipe(
    ParkUIConfig,
    Effect.flatMap((config) =>
      Effect.forEach(files, (file) =>
        Effect.all([
          Effect.tryPromise({
            try: () => {
              // Replace styled-system imports if configured
              let content = file.content
              if (config.imports?.['styled-system-base']) {
                content = content.replace(
                  /from ['"]styled-system\//g,
                  `from '${config.imports['styled-system-base']}/`,
                )
              }

              return outputFile(
                Match.value(file).pipe(
                  Match.when({ type: 'component' }, ({ fileName }) =>
                    join(config.paths.components, fileName),
                  ),
                  Match.when({ type: 'recipe' }, ({ fileName }) =>
                    join(config.paths.theme, 'recipes', fileName),
                  ),
                  Match.when({ type: 'theme' }, ({ fileName }) =>
                    join(config.paths.theme, fileName),
                  ),
                  Match.orElse(() => file.fileName),
                ),
                content,
              )
            },
            catch: () => FileError(file.fileName),
          }),

          Option.match(Option.fromNullable(file.indexFile), {
            onSome: (indexFile) =>
              Effect.succeed({
                exports: indexFile.exports,
                imports: indexFile.imports,
                path: Match.value(file).pipe(
                  Match.when({ type: 'component' }, () =>
                    join(config.paths.components, 'index.ts'),
                  ),
                  Match.when({ type: 'recipe' }, () =>
                    join(config.paths.theme, 'recipes', 'index.ts'),
                  ),
                  Match.orElse(() => 'index.ts'),
                ),
              }).pipe(Effect.map(updateIndexFile)),
            onNone: () => Effect.void,
          }),
        ]),
      ),
    ),
  )
