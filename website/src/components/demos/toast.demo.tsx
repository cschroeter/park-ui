import { Button } from '~/components/ui/button'
import { Toast, createToaster } from '~/components/ui/toast'

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
