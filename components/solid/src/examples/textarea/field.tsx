import { Field, Textarea } from '@/components/ui'

export const App = () => {
  return (
    <Field.Root>
      <Field.Label>Comment</Field.Label>
      <Textarea placeholder="Enter your comment" />
      <Field.HelperText>A short comment about your experience with our product.</Field.HelperText>
    </Field.Root>
  )
}
