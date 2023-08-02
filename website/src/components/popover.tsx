import {
  PopoverPositioner as ArkPopoverPositioner,
  type PopoverPositionerProps as ArkPopoverPositionerProps,
} from '@ark-ui/react/popover'
import { popover, type PopoverVariantProps } from 'styled-system/recipes'

export * from '@ark-ui/react/popover'

export type PopoverPositionerProps = PopoverVariantProps & ArkPopoverPositionerProps

export const PopoverPositioner = (props: PopoverPositionerProps) => {
  return <ArkPopoverPositioner className={popover()} {...props} />
}
