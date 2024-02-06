import { ark } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
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
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(ark.div, 'root')
export const Body = withContext(ark.div, 'body')
export const Description = withContext(ark.div, 'description')
export const Footer = withContext(ark.div, 'footer')
export const Header = withContext(ark.div, 'header')
export const Title = withContext(ark.h3, 'title')

export type RootProps = ComponentProps<typeof Root>
export interface BodyProps extends ComponentProps<typeof Body> {}
export interface DescriptionProps extends ComponentProps<typeof Description> {}
export interface FooterProps extends ComponentProps<typeof Footer> {}
export interface HeaderProps extends ComponentProps<typeof Header> {}
export interface TitleProps extends ComponentProps<typeof Title> {}
