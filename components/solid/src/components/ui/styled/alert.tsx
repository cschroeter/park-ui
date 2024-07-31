import { type Assign, type PolymorphicProps, ark } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { alert } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(alert)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<Assign<HTMLStyledProps<'div'>, PolymorphicProps<'div'>>>(
  ark.div,
  'root',
)

export const Content = withContext<Assign<HTMLStyledProps<'div'>, PolymorphicProps<'div'>>>(
  ark.div,
  'content',
)

export const Description = withContext<Assign<HTMLStyledProps<'div'>, PolymorphicProps<'div'>>>(
  ark.div,
  'description',
)

export const Icon = withContext<Assign<HTMLStyledProps<'svg'>, PolymorphicProps<'svg'>>>(
  ark.svg,
  'icon',
)

export const Title = withContext<Assign<HTMLStyledProps<'h5'>, PolymorphicProps<'h5'>>>(
  ark.h5,
  'title',
)
