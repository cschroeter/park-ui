import * as Ark from '@ark-ui/react/checkbox'
import { styled } from 'styled-system/jsx'
import { checkbox, type CheckboxVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/checkbox'

const { withProvider, withContext } = createStyleContext(checkbox)

export type CheckboxProps = Ark.CheckboxProps & CheckboxVariantProps

const CheckboxRoot = withProvider(styled(Ark.Checkbox.Root), 'root')
const CheckboxControl = withContext(styled(Ark.Checkbox.Control), 'control')
const CheckboxLabel = withContext(styled(Ark.Checkbox.Label), 'label')

const Checkbox = Object.assign(CheckboxRoot, {
  Root: CheckboxRoot,
  Control: CheckboxControl,
  Label: CheckboxLabel,
})

export { Checkbox, CheckboxControl, CheckboxLabel }
