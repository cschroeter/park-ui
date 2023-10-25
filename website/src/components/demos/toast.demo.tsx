import { createToaster } from '@ark-ui/react/toast'
import { Button, Toast } from '~/components/ui'

const [Toaster, toast] = createToaster({
  placement: 'top-end',
  render(toast) {
    return (
      <Toast.Root>
        <Toast.Title>{toast.title}</Toast.Title>
        <Toast.Description>{toast.description}</Toast.Description>
        <Toast.CloseTrigger>Close</Toast.CloseTrigger>
      </Toast.Root>
    )
  },
})

export const Demo = () => (
  <>
    <Button onClick={() => toast.create({ title: 'Title', description: 'Description' })}>
      Toast
    </Button>
    <Toaster />
  </>
)
