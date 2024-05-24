import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const card = tv(
  {
    base: 'card',
    slots: {
      root: 'card__root',
      header: 'card__header',
      body: 'card__body',
      footer: 'card__footer',
      title: 'card__title',
      description: 'card__description',
    },
    variants: {},
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(card)

export interface RootProps extends HTMLArkProps<'div'>, VariantProps<typeof card> {}
export const Root = withProvider<HTMLDivElement, RootProps>(ark.div, 'root')

export const Body = withContext<HTMLDivElement, HTMLArkProps<'div'>>(ark.div, 'body')

export const Description = withContext<HTMLDivElement, HTMLArkProps<'div'>>(ark.div, 'description')

export const Footer = withContext<HTMLDivElement, HTMLArkProps<'div'>>(ark.div, 'footer')

export const Header = withContext<HTMLDivElement, HTMLArkProps<'div'>>(ark.div, 'header')

export const Title = withContext<HTMLHeadingElement, HTMLArkProps<'h3'>>(ark.h3, 'title')
