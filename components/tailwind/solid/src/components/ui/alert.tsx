import { type HTMLArkProps, ark } from '@ark-ui/solid'
import { type VariantProps, tv } from 'tailwind-variants'
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

export interface RootProps extends HTMLArkProps<'div'>, VariantProps<typeof alert> {}

export const Root = withProvider<RootProps>(ark.div, 'root')

export const Content = withContext<HTMLArkProps<'div'>>(ark.div, 'content')

export const Description = withContext<HTMLArkProps<'div'>>(ark.div, 'description')

export const Icon = withContext<HTMLArkProps<'svg'>>(ark.svg, 'icon')

export const Title = withContext<HTMLArkProps<'h5'>>(ark.h5, 'title')
