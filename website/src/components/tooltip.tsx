import {
  TooltipPositioner as ArkTooltipPositioner,
  type TooltipPositionerProps as ArkTooltipPositionerProps,
} from '@ark-ui/react/tooltip'
import { tooltip, type TooltipVariantProps } from 'styled-system/recipes'

export * from '@ark-ui/react/tooltip'

export type TooltipPositionerProps = TooltipVariantProps & ArkTooltipPositionerProps

export const TooltipPositioner = (props: TooltipPositionerProps) => {
  return <ArkTooltipPositioner className={tooltip()} {...props} />
}
