import { Field, Input } from '@/components/ui'

export const App = () => {
  return (
    <Field.Root invalid>
      <Field.Label>Email</Field.Label>
      <Input placeholder="Enter your email" />
      <Field.ErrorText>Please enter a valid email address.</Field.ErrorText>
    </Field.Root>
  )
}
