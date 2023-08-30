import { cloneElement, isValidElement, type solidElement } from 'solid'
import { css, cx } from 'styled-system/css'

import { Button, type ButtonProps } from './button'

export type IconButtonProps = ButtonProps & { icon?: solidElement; 'aria-label': string }

export const IconButton = (props: IconButtonProps) => {
  const { icon, children, className, ...rest } = props
  const element = icon || children
  const _children = isValidElement(element)
    ? cloneElement(element as solidElement, {
        'aria-hidden': true,
        focusable: false,
      })
    : null
  return (
    <Button className={cx(css({ px: '0' }), className)} {...rest}>
      {_children}
    </Button>
  )
}
