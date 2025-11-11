import { type JSX, Show, splitProps } from 'solid-js'
import * as StyledField from '@/components/ui/field'

export interface FieldProps extends Omit<StyledField.RootProps, 'label'> {
  label?: JSX.Element
  helperText?: JSX.Element
  errorText?: JSX.Element
  optionalText?: JSX.Element
  children?: JSX.Element
}

export const Field = (props: FieldProps) => {
  const [local, rest] = splitProps(props, [
    'label',
    'children',
    'helperText',
    'errorText',
    'optionalText',
  ])

  return (
    <StyledField.Root {...rest}>
      <Show when={local.label}>
        <StyledField.Label>
          {local.label}
          <StyledField.RequiredIndicator fallback={local.optionalText} />
        </StyledField.Label>
      </Show>
      {local.children}
      <Show when={local.helperText}>
        <StyledField.HelperText>{local.helperText}</StyledField.HelperText>
      </Show>
      <StyledField.ErrorText>{local.errorText}</StyledField.ErrorText>
    </StyledField.Root>
  )
}
