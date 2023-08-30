import * as Ark from '@ark-ui/solid/checkbox'
import { styled } from 'styled-system/jsx'
import { checkbox, type CheckboxVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(checkbox)

export * from '@ark-ui/solid/checkbox'
export type CheckboxProps = Ark.CheckboxProps & CheckboxVariantProps

const CheckboxRoot = withProvider(styled(Ark.Checkbox), 'root')
export const CheckboxControl = withContext(styled(Ark.CheckboxControl), 'control')
export const CheckboxLabel = withContext(styled(Ark.CheckboxLabel), 'label')

export const Checkbox = Object.assign(CheckboxRoot, {
  Root: CheckboxRoot,
  Control: CheckboxControl,
  Label: CheckboxLabel,
})
