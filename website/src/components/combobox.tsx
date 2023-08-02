import {
  Combobox as ArkCombobox,
  ComboboxPositioner as ArkComboboxPositioner,
  type ComboboxPositionerProps as ArkComboboxPositionerProps,
  type ComboboxProps as ArkComboboxProps,
} from '@ark-ui/react/combobox'
import { styled } from 'styled-system/jsx'
import { combobox } from 'styled-system/recipes'

export * from '@ark-ui/react/combobox'

export type ComboboxProps = ArkComboboxProps & React.ComponentProps<'span'>
export const Combobox = styled(ArkCombobox, combobox)

export type ComboboxPositionerProps = ArkComboboxPositionerProps & React.ComponentProps<'span'>
export const ComboboxPositioner = styled(ArkComboboxPositioner, combobox)
