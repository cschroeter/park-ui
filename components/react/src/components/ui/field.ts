'use client'
import { Field } from '@ark-ui/react/field'
import { createStyleContext } from '@park-ui/styled-system/jsx'
import { field } from '@park-ui/styled-system/recipes'
import type { ComponentProps } from '@park-ui/styled-system/types'

const { withProvider, withContext } = createStyleContext(field)

export type RootProps = ComponentProps<typeof Root>

export const Root = withProvider(Field.Root, 'root')
export const RootProvider = withProvider(Field.RootProvider, 'root')
export const ErrorText = withContext(Field.ErrorText, 'errorText')
export const HelperText = withContext(Field.HelperText, 'helperText')
export const Label = withContext(Field.Label, 'label')

export const Context = Field.Context
