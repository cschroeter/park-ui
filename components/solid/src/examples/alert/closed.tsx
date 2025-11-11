import { type JSX, splitProps } from 'solid-js'
import * as StyledAlert from '@/components/ui/alert'

export interface AlertProps extends Omit<StyledAlert.RootProps, 'title'> {
  startElement?: JSX.Element
  endElement?: JSX.Element
  title?: JSX.Element
  icon?: JSX.Element
  children?: JSX.Element
}

export const Alert = (props: AlertProps) => {
  const [local, rest] = splitProps(props, [
    'title',
    'children',
    'icon',
    'startElement',
    'endElement',
  ])

  return (
    <StyledAlert.Root {...rest}>
      {local.startElement || <StyledAlert.Indicator>{local.icon}</StyledAlert.Indicator>}
      {local.children ? (
        <StyledAlert.Content>
          <StyledAlert.Title>{local.title}</StyledAlert.Title>
          <StyledAlert.Description>{local.children}</StyledAlert.Description>
        </StyledAlert.Content>
      ) : (
        <StyledAlert.Title flex="1">{local.title}</StyledAlert.Title>
      )}
      {local.endElement}
    </StyledAlert.Root>
  )
}
