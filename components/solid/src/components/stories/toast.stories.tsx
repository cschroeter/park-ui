import { XIcon } from 'lucide-solid'
import type { Meta } from 'storybook-solidjs'
import { Button } from '~/components/ui/button'
import { IconButton } from '~/components/ui/icon-button'
import { Toast } from '~/components/ui/toast'

const meta: Meta = {
  title: 'Components / Toast',
}

export default meta

const toaster = Toast.createToaster({
  placement: 'bottom-end',
  overlap: true,
  gap: 16,
})

export const Basic = () => {
  return (
    <>
      <Button
        variant="outline"
        onClick={() =>
          toaster.create({
            title: 'Toast Title',
            description: 'Toast Description',
            type: 'info',
          })
        }
      >
        Add Toast
      </Button>
      <Toast.Toaster toaster={toaster}>
        {(toast) => (
          <Toast.Root>
            <Toast.Title>{toast().title}</Toast.Title>
            <Toast.Description>{toast().description}</Toast.Description>
            <Toast.ActionTrigger
              asChild={(props) => <Button {...props()} variant="link" size="sm" />}
            >
              Action
            </Toast.ActionTrigger>
            <Toast.CloseTrigger
              asChild={(props) => <IconButton {...props()} size="sm" variant="link" />}
            >
              <XIcon />
            </Toast.CloseTrigger>
          </Toast.Root>
        )}
      </Toast.Toaster>
    </>
  )
}
