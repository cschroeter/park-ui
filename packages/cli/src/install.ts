import { Effect, pipe } from 'effect'
import type { ParkUIConfig, RegistryItem } from './schema'

interface Args {
  item: RegistryItem
  config: ParkUIConfig
}

export const installRegistryItem = ({ item }: Args) => pipe(Effect.succeed(item))

// const programm = updatePandaConfig(config).pipe(
//   Effect.catchTag('PandaConfigInvalid', () => Effect.succeed(undefined)),
//   Effect.catchTag('PandaConfigNotFound', () => Effect.succeed(undefined)),
// )
