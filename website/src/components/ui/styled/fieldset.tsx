'use client'
import type { Assign, PolymorphicProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import { Fieldset } from '@ark-ui/react/fieldset'
import { type FieldsetVariantProps, fieldset } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(fieldset)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLFieldSetElement,
  Assign<Assign<HTMLStyledProps<'fieldset'>, Fieldset.RootProviderBaseProps>, FieldsetVariantProps>
>(Fieldset.Root, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLFieldSetElement,
  Assign<Assign<HTMLStyledProps<'fieldset'>, Fieldset.RootBaseProps>, FieldsetVariantProps>
>(Fieldset.Root, 'root')

export const ErrorText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, Fieldset.ErrorTextBaseProps>
>(Fieldset.ErrorText, 'errorText')

export const HelperText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, Fieldset.HelperTextBaseProps>
>(Fieldset.HelperText, 'helperText')

export const Legend = withContext<
  HTMLLegendElement,
  Assign<HTMLStyledProps<'legend'>, Fieldset.LegendBaseProps>
>(Fieldset.Legend, 'legend')

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ark.div, 'control')

export { FieldsetContext as Context } from '@ark-ui/react/fieldset'
