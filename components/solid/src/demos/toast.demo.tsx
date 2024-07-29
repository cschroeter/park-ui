import { XIcon } from 'lucide-solid'
import { Button } from '~/components/ui/button'
import { IconButton } from '~/components/ui/icon-button'
import { Toast } from '~/components/ui/toast'

const toaster = Toast.createToaster({
  placement: 'bottom-end',
  overlap: true,
  gap: 16,
})

export const Demo = () => (
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
            asChild={(actionProps) => (
              <Button {...actionProps()} variant="link" size="sm">
                Action
              </Button>
            )}
          />
          <Toast.CloseTrigger
            asChild={(closeProps) => (
              <IconButton {...closeProps()} size="sm" variant="link">
                <XIcon />
              </IconButton>
            )}
          />
        </Toast.Root>
      )}
    </Toast.Toaster>
  </>
)
