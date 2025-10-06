import { Effect } from 'effect'
import { registry } from './registry'
import { install } from './registry-item'

interface Args {
  accentColor: string
  grayColor: string
}

export const initTheme = ({ accentColor, grayColor }: Args) => {
  return Effect.all([
    registry.getRegistryThemeItem('__init'),
    registry.getRegistryThemeItem(accentColor),
    registry.getRegistryThemeItem(grayColor),
  ]).pipe(Effect.flatMap((colors) => Effect.forEach(colors, (color) => install(color))))
}
