import {
  HoverCardPositioner as ArkHoverCardPositioner,
  type HoverCardPositionerProps as ArkHoverCardPositionerProps,
} from '@ark-ui/react/hover-card'
import { hoverCard, type HoverCardVariantProps } from 'styled-system/recipes'

export * from '@ark-ui/react/hover-card'

export type HoverCardPositionerProps = HoverCardVariantProps & ArkHoverCardPositionerProps

export const HoverCardPositioner = (props: HoverCardPositionerProps) => {
  return <ArkHoverCardPositioner className={hoverCard()} {...props} />
}
