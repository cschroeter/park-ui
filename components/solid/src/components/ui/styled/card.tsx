import { type Assign, type PolymorphicProps, ark } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { card } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(card)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<Assign<HTMLStyledProps<'div'>, PolymorphicProps<'div'>>>(
  ark.div,
  'root',
)

export const Body = withContext<Assign<HTMLStyledProps<'div'>, PolymorphicProps<'div'>>>(
  ark.div,
  'body',
)

export const Description = withContext<Assign<HTMLStyledProps<'div'>, PolymorphicProps<'div'>>>(
  ark.div,
  'description',
)

export const Footer = withContext<Assign<HTMLStyledProps<'div'>, PolymorphicProps<'div'>>>(
  ark.div,
  'footer',
)

export const Header = withContext<Assign<HTMLStyledProps<'div'>, PolymorphicProps<'div'>>>(
  ark.div,
  'header',
)

export const Title = withContext<Assign<HTMLStyledProps<'h3'>, PolymorphicProps<'h3'>>>(
  ark.h3,
  'title',
)
