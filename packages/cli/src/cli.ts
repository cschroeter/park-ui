import * as p from '@clack/prompts'
import { Effect } from 'effect'
import { installRegistryItem } from './install'
import { getParkUIConfig } from './park-ui'
import { registry } from './registry'

const main = async () => {
  console.clear()

  const components = ['button']

  const programm = getParkUIConfig().pipe(
    Effect.flatMap((config) =>
      Effect.forEach(components, (id) =>
        registry.getComponent({ framework: config.framework, id }).pipe(
          Effect.flatMap((item) => installRegistryItem({ item, config })),
          Effect.catchTag('NotFound', () => {
            p.log.error(`Component "${id}" not found in the registry`)
            return Effect.succeed(undefined)
          }),
          Effect.catchTag('HttpError', () => {
            p.log.error(`Failed to fetch component "${id}" due to a server error`)
            return Effect.succeed(undefined)
          }),
        ),
      ),
    ),
  )

  await Effect.runPromise(programm)

  p.outro('✨ Component installation complete! Happy coding with Park UI!')
}

main()

// // const programm = updatePandaConfig(config).pipe(
// //   Effect.catchTag('PandaConfigInvalid', () => Effect.succeed(undefined)),
// //   Effect.catchTag('PandaConfigNotFound', () => Effect.succeed(undefined)),
// // )
