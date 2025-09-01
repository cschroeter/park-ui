import { forwardRef, type ReactNode } from 'react'
import { Input, Field as ParkField } from '@/components/ui'

export const App = () => {
  return (
    <Field
      label="Username"
      helperText="Enter your username"
      errorText="This field is required"
      required
    >
      <Input />
    </Field>
  )
}

interface FieldProps extends Omit<ParkField.RootProps, 'label'> {
  label?: ReactNode
  helperText?: ReactNode
  errorText?: ReactNode
  optionalText?: ReactNode
}

const Field = forwardRef<HTMLDivElement, FieldProps>(function Field(props, ref) {
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
