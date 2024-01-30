import { ark } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { card } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(card)

export const CardRoot = withProvider(styled(ark.div), 'root')
export const CardBody = withContext(styled(ark.div), 'body')
export const CardDescription = withContext(styled(ark.p), 'description')
export const CardFooter = withContext(styled(ark.div), 'footer')
export const CardHeader = withContext(styled(ark.div), 'header')
export const CardTitle = withContext(styled(ark.h3), 'title')

export const Card = {
  Root: CardRoot,
  Body: CardBody,
  Description: CardDescription,
  Footer: CardFooter,
  Header: CardHeader,
  Title: CardTitle,
}

export interface CardRootProps extends ComponentProps<typeof CardRoot> {}
export interface CardBodyProps extends ComponentProps<typeof CardBody> {}
export interface CardDescriptionProps extends ComponentProps<typeof CardDescription> {}
export interface CardFooterProps extends ComponentProps<typeof CardFooter> {}
export interface CardHeaderProps extends ComponentProps<typeof CardHeader> {}
export interface CardTitleProps extends ComponentProps<typeof CardTitle> {}
