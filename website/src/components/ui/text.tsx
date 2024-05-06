import React from 'react'
import type { TextVariantProps } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'

type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref']

type AsProp<C extends React.ElementType> = {
  as?: C
}

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P)

type PolymorphicComponentProp<C extends React.ElementType, Props = {}> = React.PropsWithChildren<
  Props & AsProp<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>

type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = {},
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> }

export type TextProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  HTMLStyledProps<C> & TextVariantProps
>

type PolymorphicComponent = <C extends React.ElementType = 'p'>(
  props: TextProps<C>,
) => React.ReactNode | null

export const Text: PolymorphicComponent = React.forwardRef(
  <C extends React.ElementType = 'p'>(props: TextProps<C>, ref?: PolymorphicRef<C>) => {
    const { as, ...textProps } = props
    const Component = as || 'p'

    return <Component ref={ref} {...textProps} />
  },
)
