'use client'
import { ark } from '@ark-ui/react/factory'
import { Fieldset } from '@ark-ui/react/fieldset'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { fieldset } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(fieldset)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(Fieldset.Root, 'root')
export const RootProvider = withProvider(Fieldset.RootProvider, 'root')
export const Legend = withContext(Fieldset.Legend, 'legend')
export const HelperText = withContext(Fieldset.HelperText, 'helperText')
export const ErrorText = withContext(Fieldset.ErrorText, 'errorText')
export const Content = withContext(ark.div, 'content')
export const Control = withContext(ark.div, 'control')

export { FieldsetContext as Context } from '@ark-ui/react/fieldset'
