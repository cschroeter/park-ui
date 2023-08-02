import {
  Checkbox as ArkCheckbox,
  type CheckboxProps as ArkCheckboxProps,
} from '@ark-ui/react/checkbox'
import { styled } from 'styled-system/jsx'
import { checkbox, type CheckboxVariantProps } from 'styled-system/recipes'

export * from '@ark-ui/react/checkbox'

export type CheckboxProps = CheckboxVariantProps & ArkCheckboxProps
export const Checkbox = styled(ArkCheckbox, checkbox)
