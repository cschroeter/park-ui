'use client'
import { XIcon } from 'lucide-react'
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
        <Toast.Root key={toast.id}>
          <Toast.Title>{toast.title}</Toast.Title>
          <Toast.Description>{toast.description}</Toast.Description>
          <Toast.ActionTrigger asChild>
            <Button variant="link" size="sm">
              Action
            </Button>
          </Toast.ActionTrigger>
          <Toast.CloseTrigger asChild>
            <IconButton size="sm" variant="link">
              <XIcon />
            </IconButton>
          </Toast.CloseTrigger>
        </Toast.Root>
      )}
    </Toast.Toaster>
  </>
)
