import {
  SelectPositioner as ArkSelectPositioner,
  type SelectPositionerProps as ArkSelectPositionerProps,
} from '@ark-ui/react/select'
import { styled } from 'styled-system/jsx'
import { select } from 'styled-system/recipes'

export * from '@ark-ui/react/select'

export type SelectPositionerProps = ArkSelectPositionerProps & React.ComponentProps<'span'>
export const SelectPositioner = styled(ArkSelectPositioner, select)
