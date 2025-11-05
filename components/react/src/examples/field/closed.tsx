import { forwardRef, type ReactNode } from 'react'
import { Field as StyledField } from '@/components/ui'

export interface FieldProps extends Omit<StyledField.RootProps, 'label'> {
  label?: ReactNode
  helperText?: ReactNode
  errorText?: ReactNode
  optionalText?: ReactNode
}

export const Field = forwardRef<HTMLDivElement, FieldProps>(function Field(props, ref) {
  const { label, children, helperText, errorText, optionalText, ...rest } = props
  return (
    <StyledField.Root ref={ref} {...rest}>
      {label && (
        <StyledField.Label>
          {label}
          <StyledField.RequiredIndicator fallback={optionalText} />
        </StyledField.Label>
      )}
      {children}
      {helperText && <StyledField.HelperText>{helperText}</StyledField.HelperText>}
      <StyledField.ErrorText>{errorText}</StyledField.ErrorText>
    </StyledField.Root>
  )
})
