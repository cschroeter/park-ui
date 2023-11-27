import { ark } from '@ark-ui/react'
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

export const Card = Object.assign(CardRoot, {
  Root: CardRoot,
  Body: CardBody,
  Description: CardDescription,
  Footer: CardFooter,
  Header: CardHeader,
  Title: CardTitle,
})

export type CardProps = typeof CardRoot
export type CardBodyProps = typeof CardBody
export type CardDescriptionProps = typeof CardDescription
export type CardFooterProps = typeof CardFooter
export type CardHeaderProps = typeof CardHeader
export type CardTitleProps = typeof CardTitle
