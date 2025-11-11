import { Field } from '@ark-ui/solid/field'
import type { ComponentProps } from 'solid-js'
import { createStyleContext } from 'styled-system/jsx'
import { field } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(field)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(Field.Root, 'root')
export const RootProvider = withProvider(Field.RootProvider, 'root')
export const ErrorText = withContext(Field.ErrorText, 'errorText')
export const HelperText = withContext(Field.HelperText, 'helperText')
export const Label = withContext(Field.Label, 'label')
export const RequiredIndicator = withContext(Field.RequiredIndicator, 'requiredIndicator')

export { FieldContext as Context } from '@ark-ui/solid/field'
