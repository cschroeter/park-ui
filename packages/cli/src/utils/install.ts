import { join } from 'node:path'
import { Effect, Match } from 'effect'
// @ts-expect-error
import { outputFile } from 'fs-extra/esm'
import type { RegistryItem } from '../schema'
import { Config } from './config'
import { FileError } from './errors'
import { updatePandaConfig } from './panda-config'

export const install = ({ panda, files = [] }: RegistryItem) =>
  Config.pipe(
    Effect.flatMap(({ resolvedPaths }) =>
      Effect.all([
        Effect.forEach(files, (file) =>
          Effect.tryPromise({
            try: () =>
              outputFile(
                Match.value(file).pipe(
                  Match.when({ type: 'registry:block' }, ({ path }) =>
                    join(resolvedPaths.components, path),
                  ),
                  Match.when({ type: 'registry:color' }, ({ path }) =>
                    join(resolvedPaths.theme, path),
                  ),
                  Match.when({ type: 'registry:component' }, ({ path }) =>
                    join(resolvedPaths.components, path),
                  ),
                  Match.when({ type: 'registry:recipe' }, ({ path }) =>
                    join(resolvedPaths.theme, path),
                  ),
                  Match.when({ type: 'registry:theme' }, ({ path }) =>
                    join(resolvedPaths.theme, path),
                  ),
                  Match.when({ type: 'registry:ui' }, ({ path }) => join(resolvedPaths.ui, path)),
                  Match.exhaustive,
                ),
                file.content,
              ),
            catch: () => FileError(file.path),
          }),
        ),
        updatePandaConfig(panda),
      ]),
    ),
  )
