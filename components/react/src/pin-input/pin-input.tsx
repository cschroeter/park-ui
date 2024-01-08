import { ark } from '@ark-ui/react/factory'
import {
  PinInput as ArkPinInput,
  type PinInputProps as ArkPinInputProps,
} from '@ark-ui/react/pin-input'
import { forwardRef, type ReactNode } from 'react'
import { styled } from 'styled-system/jsx'
import { input, pinInput, type PinInputVariantProps } from 'styled-system/recipes'

export interface PinInputProps extends ArkPinInputProps, PinInputVariantProps {
  children?: ReactNode
  length?: number
}

const Input = styled(ark.input, input)

export const PinInput = forwardRef<HTMLDivElement, PinInputProps>((props, ref) => {
  const [variantProps, localProps] = pinInput.splitVariantProps(props)
  const { children, length, ...rootProps } = localProps
  const arr = Array.from({ length: length ?? 4 }, (_, index) => index)
  const styles = pinInput(variantProps)

  return (
    <ArkPinInput.Root className={styles.root} {...rootProps}>
      {children && <ArkPinInput.Label className={styles.label}>{children}</ArkPinInput.Label>}
      <ArkPinInput.Control className={styles.control}>
        {arr.map((id, index) => (
          <ArkPinInput.Input className={styles.input} key={id} index={index} asChild>
            <Input size="lg" width="0" textAlign="center" />
          </ArkPinInput.Input>
        ))}
      </ArkPinInput.Control>
    </ArkPinInput.Root>
  )
})

PinInput.displayName = 'PinInput'
