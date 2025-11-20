import { forwardRef, type ReactElement, type ReactNode } from 'react'
import { Alert as StyledAlert } from '@/components/ui'

export interface AlertProps extends Omit<StyledAlert.RootProps, 'title'> {
  startElement?: ReactNode
  endElement?: ReactNode
  title?: ReactNode
  icon?: ReactElement
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  const { title, children, icon, startElement, endElement, ...rest } = props
  return (
    <StyledAlert.Root ref={ref} {...rest}>
      {startElement || <StyledAlert.Indicator>{icon}</StyledAlert.Indicator>}
      {children ? (
        <StyledAlert.Content>
          <StyledAlert.Title>{title}</StyledAlert.Title>
          <StyledAlert.Description>{children}</StyledAlert.Description>
        </StyledAlert.Content>
      ) : (
        <StyledAlert.Title flex="1">{title}</StyledAlert.Title>
      )}
      {endElement}
    </StyledAlert.Root>
  )
})
