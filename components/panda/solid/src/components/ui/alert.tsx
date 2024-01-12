import { ark } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { alert } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(alert)

export const AlertRoot = withProvider(styled(ark.div), 'root')
export const AlertContent = withContext(styled(ark.div), 'content')
export const AlertDescription = withContext(styled(ark.p), 'description')
export const AlertIcon = withContext(styled(ark.svg), 'icon')
export const AlertTitle = withContext(styled(ark.h5), 'title')

export const Alert = Object.assign(AlertRoot, {
  Root: AlertRoot,
  Content: AlertContent,
  Description: AlertDescription,
  Icon: AlertIcon,
  Title: AlertTitle,
})

export type AlertProps = typeof AlertRoot
export type AlertContentProps = typeof AlertContent
export type AlertDescriptionProps = typeof AlertDescription
export type AlertIconProps = typeof AlertIcon
export type AlertTitleProps = typeof AlertTitle
