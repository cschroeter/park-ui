import { Effect, pipe } from 'effect'
import { installRegistryItem } from './install'
import { getParkUIConfig } from './park-ui'
import { registry } from './registry'

interface Args {
  accentColor: string
  grayColor: string
}

export const createThemeConfig = ({ accentColor, grayColor }: Args) => {
  return Effect.all([
    registry.getAccentColor({ id: accentColor }),
    registry.getGrayColor({ id: grayColor }),
  ]).pipe(
    Effect.flatMap((colors) =>
      pipe(
        getParkUIConfig(),
        Effect.flatMap((config) =>
          Effect.forEach(colors, (item) => installRegistryItem({ item, config })),
        ),
      ),
    ),
  )
}
