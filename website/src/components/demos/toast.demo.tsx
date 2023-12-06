import { createToaster } from '@ark-ui/react/toast'
import { XIcon } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { IconButton } from '~/components/ui/icon-button'
import * as Toast from '~/components/ui/toast'

const [Toaster, toast] = createToaster({
  placement: 'top-end',
  render(toast) {
    return (
      <Toast.Root>
        <Toast.Title>{toast.title}</Toast.Title>
        <Toast.Description>{toast.description}</Toast.Description>
        <Toast.CloseTrigger asChild>
          <IconButton size="sm" variant="link">
            <XIcon />
          </IconButton>
        </Toast.CloseTrigger>
      </Toast.Root>
    )
  },
})

export const Demo = () => (
  <>
    <Button
      variant="outline"
      onClick={() => toast.create({ title: 'Title', description: 'Description' })}
    >
      Create Toast
    </Button>
    <Toaster />
  </>
)
