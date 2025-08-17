import * as p from '@clack/prompts'
import { Effect } from 'effect'
import { client } from './client'
import { getParkUIConfig } from './park-ui'

const main = async () => {
  console.clear()

  const components = ['button', 'avatar']

  // p.log.info(`📋 Installing ${components.length} component(s): ${components.join(', ')}`)

  const programm = getParkUIConfig().pipe(
    Effect.flatMap((config) =>
      Effect.forEach(components, (component) =>
        client.getComponent({ framework: config.framework, id: component }).pipe(
          // Effect.tap((component) =>
          //   p.log.success(`Successfully installed ${component.id} component`),
          // ),
          Effect.catchTag('NotFound', () => {
            p.log.error(`Component "${component}" not found in the registry`)
            return Effect.succeed(undefined)
          }),
          Effect.catchTag('InternalServerError', () => {
            p.log.error(`Failed to fetch component "${component}" due to a server error`)
            return Effect.succeed(undefined)
          }),
        ),
      ),
    ),
    Effect.catchAll((error) => {
      p.log.error(`An unexpected error occurred: ${error}`)
      return Effect.succeed(undefined)
    }),
  )

  await Effect.runPromise(programm)

  p.outro('✨ Component installation complete! Happy coding with Park UI!')

  // const programm = updatePandaConfig(config).pipe(
  //   Effect.catchTag('PandaConfigInvalid', () => Effect.succeed(undefined)),
  //   Effect.catchTag('PandaConfigNotFound', () => Effect.succeed(undefined)),
  // )

  // spinner.stop()
}

// const installRegistryItem = (config: any) => (config: any) {

// }

main()
