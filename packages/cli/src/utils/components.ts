import * as p from '@clack/prompts'
import { Effect, pipe } from 'effect'
import { ParkUIConfig } from './park-ui-config'
import { registry } from './registry'

interface Options {
  all?: boolean
}

export const fetchComponents = (components: string[], opts: Options) =>
  ParkUIConfig.pipe(
    Effect.flatMap(({ framework }) =>
      pipe(
        opts.all
          ? registry
              .getComponents(framework)
              .pipe(Effect.map((items) => items.map((item) => item.name)))
          : Effect.succeed(components),
        Effect.flatMap((ids) =>
          Effect.forEach(ids, (id) =>
            registry.getRegistryItem({ framework, id }).pipe(
              Effect.catchTag('RegistryItemNotFound', () => {
                p.log.error(`Component "${id}" not found in the registry`)
                return Effect.succeed(undefined)
              }),
            ),
          ),
        ),
        Effect.map((results) => results.filter((item) => item !== undefined)),
      ),
    ),
  )
