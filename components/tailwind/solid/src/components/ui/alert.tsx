import { ark } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    base: 'alert',
    slots: {
      root: 'alert__root',
      content: 'alert__content',
      description: 'alert__description',
      icon: 'alert__icon',
      title: 'alert__title',
    },
    variants: {},
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(ark.div, 'root')
export const Content = withContext(ark.div, 'content')
export const Description = withContext(ark.div, 'description')
export const Icon = withContext(ark.svg, 'icon')
export const Title = withContext(ark.h5, 'title')

export type RootProps = ComponentProps<typeof Root>
export interface ContentProps extends ComponentProps<typeof Content> {}
export interface DescriptionProps extends ComponentProps<typeof Description> {}
export interface IconProps extends ComponentProps<typeof Icon> {}
export interface TitleProps extends ComponentProps<typeof Title> {}
