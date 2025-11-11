import { Checkbox, useCheckboxContext } from '@ark-ui/solid/checkbox'
import type { ComponentProps } from 'solid-js'
import { createStyleContext, styled } from 'styled-system/jsx'
import { checkbox } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'

const { withProvider, withContext } = createStyleContext(checkbox)

export type RootProps = ComponentProps<typeof Root>
export type HiddenInputProps = ComponentProps<typeof HiddenInput>

export const Root = withProvider(Checkbox.Root, 'root')
export const RootProvider = withProvider(Checkbox.RootProvider, 'root')
export const Control = withContext(Checkbox.Control, 'control')
export const Group = withProvider(Checkbox.Group, 'group')
export const Label = withContext(Checkbox.Label, 'label')
export const HiddenInput = Checkbox.HiddenInput

export {
  type CheckboxCheckedState as CheckedState,
  CheckboxGroupProvider as GroupProvider,
} from '@ark-ui/solid/checkbox'

export const Indicator = (props: HTMLStyledProps<'svg'>) => {
  const checkbox = useCheckboxContext()

  return (
    <Checkbox.Indicator indeterminate={checkbox().indeterminate}>
      <styled.svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3px"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <title>Checkmark</title>
        {checkbox().indeterminate ? (
          <path d="M5 12h14" />
        ) : checkbox().checked ? (
          <path d="M20 6 9 17l-5-5" />
        ) : null}
      </styled.svg>
    </Checkbox.Indicator>
  )
}
