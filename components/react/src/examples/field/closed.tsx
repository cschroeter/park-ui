import { forwardRef, type ReactNode } from 'react'
import { Field as ParkField } from '@/components/ui'

export interface FieldProps extends Omit<ParkField.RootProps, 'label'> {
  label?: ReactNode
  helperText?: ReactNode
  errorText?: ReactNode
  optionalText?: ReactNode
}

export const Field = forwardRef<HTMLDivElement, FieldProps>(function Field(props, ref) {
  const { label, children, helperText, errorText, optionalText, ...rest } = props
  return (
    <ParkField.Root ref={ref} {...rest}>
      {label && (
        <ParkField.Label>
          {label}
          <ParkField.RequiredIndicator fallback={optionalText} />
        </ParkField.Label>
      )}
      {children}
      {helperText && <ParkField.HelperText>{helperText}</ParkField.HelperText>}
      {errorText && <ParkField.ErrorText>{errorText}</ParkField.ErrorText>}
    </ParkField.Root>
  )
})
