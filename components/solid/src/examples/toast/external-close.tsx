import { Wrap } from 'styled-system/jsx'
import { Button, toaster } from '@/components/ui'

export const App = () => {
  return (
    <Wrap gap="4">
      <Button
        variant="outline"
        onClick={() =>
          toaster.create({
            title: 'Title',
            description: 'Description',
          })
        }
      >
        Add Toast
      </Button>
      <Button variant="outline" onClick={() => toaster.dismiss()}>
        Close Toasts
      </Button>
    </Wrap>
  )
}
