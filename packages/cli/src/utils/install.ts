import { join } from 'node:path'
import { Effect, Match } from 'effect'
import { outputFile } from 'fs-extra/esm'
import type { RegistryItem } from '../schema'
import { FileError } from './errors'
import { ParkUIConfig } from './park-ui-config'

export const install = (item: RegistryItem) =>
  ParkUIConfig.pipe(
    Effect.flatMap(({ aliases }) =>
      Effect.forEach(item.files ?? [], (file) =>
        Effect.tryPromise({
          try: () =>
            outputFile(
              Match.value(file).pipe(
                Match.when({ type: 'registry:ui' }, ({ path }) => join(aliases.components, path)),
                Match.when({ type: 'registry:recipe' }, ({ path }) => join(aliases.theme, path)),
                Match.when({ type: 'registry:color' }, ({ path }) => join(aliases.theme, path)),
                Match.when({ type: 'registry:theme' }, ({ path }) => join(aliases.theme, path)),
                Match.orElse(() => file.path),
              ),
              file.content,
            ),
          catch: () => FileError(file.path),
        }),
      ),
    ),
  )
