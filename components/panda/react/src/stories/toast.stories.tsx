import { createToaster } from '@ark-ui/react/toast'
import type { Meta } from '@storybook/react'
import { XIcon } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { IconButton } from '~/components/ui/icon-button'
import { Toast } from '~/components/ui/toast'

const meta: Meta = {
  title: 'Components/Toast',
}

export default meta

export const Base = () => {
  return (
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
}

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
