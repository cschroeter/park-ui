import { Field, Textarea } from '@/components/ui'

export const App = () => {
  return (
    <Field.Root invalid>
      <Field.Label>Comment</Field.Label>
      <Textarea placeholder="Enter your comment" />
      <Field.ErrorText>There was an error with your submission</Field.ErrorText>
    </Field.Root>
  )
}
