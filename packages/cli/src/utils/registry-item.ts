import { join } from 'node:path'
import { Effect, Match, Option, pipe } from 'effect'
import { outputFile } from 'fs-extra'
import type { Framework, RegistryFile, RegistryItem } from '../schema'
import { FileError } from './errors'
import { updatePandaConfig } from './panda-config'
import { ParkUIConfig } from './park-ui-config'
import { registry } from './registry'

const installItem = (item: RegistryItem): Effect.Effect<unknown, unknown, unknown> =>
  Effect.all([
    saveFiles(item.files),
    Option.match(Option.fromNullable(item.panda), {
      onSome: (config) => updatePandaConfig(config),
      onNone: () => Effect.void,
    }),
  ])

const installWithDependencies = (
  item: RegistryItem,
  framework: Framework,
  installed: Set<string> = new Set(),
): Effect.Effect<unknown, unknown, unknown> => {
  const deps = item.registryDependencies ?? []

  const depsEffect = Effect.forEach(
    deps.filter((depId) => !installed.has(depId)),
    (depId) => {
      installed.add(depId)
      return registry.getRegistryItem({ framework, id: depId }).pipe(
        Effect.flatMap((depItem) => installWithDependencies(depItem, framework, installed)),
        Effect.catchAll(() => Effect.void), // Continue if dependency not found
      )
    },
  )

  return depsEffect.pipe(Effect.flatMap(() => installItem(item)))
}

export const install = (item: RegistryItem) =>
  ParkUIConfig.pipe(Effect.flatMap(({ framework }) => installWithDependencies(item, framework)))

const saveFiles = (files: RegistryFile[] = []) =>
  pipe(
    ParkUIConfig,
    Effect.flatMap((config) =>
      Effect.forEach(files, (file) =>
        Effect.all([
          Effect.tryPromise({
            try: () =>
              outputFile(
                Match.value(file).pipe(
                  Match.when({ type: 'registry:ui' }, ({ path }) =>
                    join(config.paths.components, path),
                  ),
                  Match.when({ type: 'registry:recipe' }, ({ path }) =>
                    join(config.paths.theme, path),
                  ),
                  Match.when({ type: 'registry:color' }, ({ path }) =>
                    join(config.paths.theme, path),
                  ),
                  Match.when({ type: 'registry:theme' }, ({ path }) =>
                    join(config.paths.theme, path),
                  ),
                  Match.orElse(() => file.path),
                ),
                file.content,
              ),
            catch: () => FileError(file.path),
          }),

          // Option.match(Option.fromNullable(file.indexFile), {
          //   onSome: (indexFile) =>
          //     Effect.succeed({
          //       exports: indexFile.exports,
          //       imports: indexFile.imports,
          //       path: Match.value(file).pipe(
          //         Match.when({ type: 'component' }, () =>
          //           join(config.paths.components, 'index.ts'),
          //         ),
          //         Match.when({ type: 'recipe' }, () =>
          //           join(config.paths.theme, 'recipes', 'index.ts'),
          //         ),
          //         Match.orElse(() => 'index.ts'),
          //       ),
          //     }).pipe(Effect.map(updateIndexFile)),
          //   onNone: () => Effect.void,
          // }),
        ]),
      ),
    ),
  )
