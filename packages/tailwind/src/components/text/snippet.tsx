import { HTMLArkProps, ark } from '@ark-ui/react'
import { styled } from '../../lib/styled'

type As = 'p' | 'span' | 'div' | 'label'

export type TextProps = HTMLArkProps<As> & {
  as?: As
  textStyle?: string
  fontWeight?: string
  color?: string
  children?: React.ReactNode
}

export const Text = (props: TextProps) => {
  const { as = 'p', ...rest } = props

  const classes = (props.className ?? '').split(' ')

  if (props.textStyle) {
    classes.push(`textStyle_${props.textStyle}`)
  }
  if (props.fontWeight) {
    classes.push(`font_${props.fontWeight}`)
  }
  if (props.color) {
    classes.push(`text-${props.color.replace('.', '-')}`)
  }

  const Component = styled(ark[as], (props) => classes.join(' '))
  return <Component className={classes.join(' ')}>{props.children}</Component>
}
