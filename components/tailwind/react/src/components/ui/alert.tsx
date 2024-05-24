import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const alert = tv(
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
const { withProvider, withContext } = createStyleContext(alert)

export interface RootProps extends HTMLArkProps<'div'>, VariantProps<typeof alert> {}

export const Root = withProvider<HTMLDivElement, RootProps>(ark.div, 'root')

export const Content = withContext<HTMLDivElement, HTMLArkProps<'div'>>(ark.div, 'content')

export const Description = withContext<HTMLDivElement, HTMLArkProps<'div'>>(ark.div, 'description')

export const Icon = withContext<HTMLOrSVGElement, HTMLArkProps<'svg'>>(ark.svg, 'icon')

export const Title = withContext<HTMLHeadingElement, HTMLArkProps<'h5'>>(ark.h5, 'title')
