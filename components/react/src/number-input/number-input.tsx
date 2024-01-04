import {
  NumberInput as ArkNumberInput,
  type NumberInputProps as ArkNumberInputProps,
} from '@ark-ui/react/number-input'
import { forwardRef, type ReactNode } from 'react'
import { numberInput, type NumberInputVariantProps } from 'styled-system/recipes'

export interface NumberInputProps extends ArkNumberInputProps, NumberInputVariantProps {
  children?: ReactNode
}

export const NumberInput = forwardRef<HTMLDivElement, NumberInputProps>((props, ref) => {
  const [variantProps, localProps] = numberInput.splitVariantProps(props)
  const { children, ...rootProps } = localProps
  const styles = numberInput(variantProps)

  return (
    <ArkNumberInput.Root ref={ref} className={styles.root} {...rootProps}>
      {children && <ArkNumberInput.Label className={styles.label}>{children}</ArkNumberInput.Label>}
      <ArkNumberInput.Control className={styles.control}>
        <ArkNumberInput.Input className={styles.input} />
        <ArkNumberInput.IncrementTrigger className={styles.incrementTrigger}>
          <ChevronUpIcon />
        </ArkNumberInput.IncrementTrigger>
        <ArkNumberInput.DecrementTrigger className={styles.decrementTrigger}>
          <ChevronDownIcon />
        </ArkNumberInput.DecrementTrigger>
      </ArkNumberInput.Control>
    </ArkNumberInput.Root>
  )
})

NumberInput.displayName = 'NumberInput'

const ChevronUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m18 15l-6-6l-6 6"
    />
  </svg>
)

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m6 9l6 6l6-6"
    />
  </svg>
)
