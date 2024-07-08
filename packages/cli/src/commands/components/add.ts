import path from 'node:path'
import { Args, Command } from '@effect/cli'
import { Array, Effect, pipe } from 'effect'
import fs from 'fs-extra'
import { fetchComponentById, fetchComponentByUrl, fetchComponents, fetchHelpers } from '~/client'
import { resolveBasePath } from '~/utils'

const args = {
  component: Args.text({ name: 'component' }).pipe(Args.repeated),
  componentsDir: Args.text({ name: 'outDir' }).pipe(Args.withDefault('~/components/ui')),
  libDir: Args.text({ name: 'libDir' }).pipe(Args.withDefault('~/lib')),
}

export const add = Command.make('add', args, ({ component, componentsDir, libDir }) =>
  pipe(
    Effect.all([
      Array.match(component, {
        onEmpty: () =>
          pipe(
            fetchComponents(),
            Effect.flatMap((components) =>
              Effect.forEach(components, (component) => fetchComponentByUrl(component.href), {
                concurrency: 10,
              }),
            ),
          ),
        onNonEmpty: (components) =>
          Effect.forEach(components, (component) => fetchComponentById(component)),
      }),
      resolveBasePath(componentsDir),
    ]),
    Effect.flatMap(([components, basePath]) =>
      Effect.all([
        Effect.forEach(components, (component) =>
          Effect.tryPromise({
            try: () =>
              fs.outputFile(
                path.join(basePath, 'primitives', component.filename),
                component.variants.primitive,
              ),
            catch: () => new Error(`Failed to write file ${component}.tsx`),
          }),
        ),
        Effect.forEach(components, (component) =>
          Effect.if(component.variants.composition !== undefined, {
            onTrue: () =>
              Effect.tryPromise({
                try: () =>
                  fs.outputFile(
                    path.join(basePath, component.filename),
                    component.variants.composition ?? '',
                  ),
                catch: () => new Error(`Failed to write file ${component}.tsx`),
              }),
            onFalse: () => Effect.succeed(undefined),
          }),
        ),
        pipe(
          Effect.all([resolveBasePath(libDir), fetchHelpers()]),
          Effect.flatMap(([basePath, helpers]) =>
            Effect.forEach(helpers, (helper) =>
              Effect.tryPromise({
                try: () => fs.outputFile(path.join(basePath, helper.filename), helper.content),
                catch: () => new Error(`Failed to write file ${helper.filename}`),
              }),
            ),
          ),
        ),
      ]),
    ),
  ),
)
