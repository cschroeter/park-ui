import {
  MenuPositioner as ArkMenuPositioner,
  type MenuPositionerProps as ArkMenuPositionerProps,
} from '@ark-ui/react/menu'
import { styled } from 'styled-system/jsx'
import { menu } from 'styled-system/recipes'

export * from '@ark-ui/react/menu'

export type MenuPositionerProps = ArkMenuPositionerProps & React.ComponentProps<'span'>
export const MenuPositioner = styled(ArkMenuPositioner, menu)
