import { type HTMLArkProps, ark } from '@ark-ui/solid'
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
export const Root = withProvider<RootProps>(ark.div, 'root')

export const Body = withContext<HTMLArkProps<'div'>>(ark.div, 'body')

export const Description = withContext<HTMLArkProps<'div'>>(ark.div, 'description')

export const Footer = withContext<HTMLArkProps<'div'>>(ark.div, 'footer')

export const Header = withContext<HTMLArkProps<'div'>>(ark.div, 'header')

export const Title = withContext<HTMLArkProps<'h3'>>(ark.h3, 'title')
