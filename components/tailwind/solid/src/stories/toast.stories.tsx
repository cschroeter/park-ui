import { createToaster } from '@ark-ui/solid'
import { XIcon } from 'lucide-solid'
import type { Meta } from 'storybook-solidjs'
import { Button, IconButton, Toast } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Toast',
}

export default meta

const [Toaster, toast] = createToaster({
  placement: 'top-end',
  render(toast) {
    return (
      <Toast.Root>
        <Toast.Title>{toast().title}</Toast.Title>
        <Toast.Description>{toast().description}</Toast.Description>
        <Toast.CloseTrigger asChild>
          <IconButton size="sm" variant="link">
            <XIcon />
          </IconButton>
        </Toast.CloseTrigger>
      </Toast.Root>
    )
  },
})

export const Base = () => {
  return (
    <>
      <Button
        variant="outline"
        onClick={() => toast().create({ title: 'Title', description: 'Description' })}
      >
        Create Toast
      </Button>
      <Toaster />
    </>
  )
}
