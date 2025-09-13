import { Editable } from '@/components/ui'

export const App = () => {
  return (
    <Editable.Root textAlign="start" defaultValue="Click to edit">
      <Editable.Preview />
      <Editable.Input />
    </Editable.Root>
  )
}
