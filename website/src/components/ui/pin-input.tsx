import {
  PinInput as ArkPinInput,
  type PinInputProps as ArkPinInputProps,
} from '@ark-ui/react/pin-input'
import { forwardRef, type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'
import { splitCssProps } from 'styled-system/jsx'
import { pinInput, type PinInputVariantProps } from 'styled-system/recipes'
import type { Assign, HTMLStyledProps } from 'styled-system/types'
import { Input } from '~/components/ui/input'

export interface PinInputProps
  extends Assign<ArkPinInputProps, HTMLStyledProps<'div'>>,
    PinInputVariantProps {
  children?: ReactNode
  /**
   * The number of inputs to render.
   * @default 4
   */
  length?: number
}

export const PinInput = forwardRef<HTMLDivElement, PinInputProps>((props, ref) => {
  const { children, length = 4, ...rest } = props
  const [variantProps] = pinInput.splitVariantProps(rest)
  const [cssProps, rooProps] = splitCssProps(rest)
  const styles = pinInput(variantProps)

  return (
    <ArkPinInput.Root ref={ref} className={cx(styles.root, css(cssProps))} {...rooProps}>
      {children && <ArkPinInput.Label className={styles.label}>{children}</ArkPinInput.Label>}
      <ArkPinInput.Control className={styles.control}>
        {Array.from({ length }, (_, index) => index).map((id, index) => (
          <ArkPinInput.Input className={styles.input} key={id} index={index} asChild>
            <Input size={variantProps.size} />
          </ArkPinInput.Input>
        ))}
      </ArkPinInput.Control>
    </ArkPinInput.Root>
  )
})

PinInput.displayName = 'PinInput'
