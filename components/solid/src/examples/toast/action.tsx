import { Button, toaster } from '@/components/ui'

export const App = () => {
  return (
    <Button
      size="sm"
      variant="outline"
      onClick={() =>
        toaster.create({
          title: 'Title',
          description: 'Description',
          action: {
            label: 'Action',
            onClick: () =>
              toaster.success({
                title: 'Action',
                description: 'You clicked the action button',
              }),
          },
        })
      }
    >
      Add Toast
    </Button>
  )
}
