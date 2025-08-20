import { Effect } from 'effect'
import { registry } from './registry'
import { install } from './registry-item'

interface Args {
  accentColor: string
  grayColor: string
}

export const initTheme = ({ accentColor, grayColor }: Args) => {
  return Effect.all([
    registry.getAccentColor({ id: accentColor }),
    registry.getGrayColor({ id: grayColor }),
  ]).pipe(Effect.flatMap((colors) => Effect.forEach(colors, (color) => install(color))))
}
