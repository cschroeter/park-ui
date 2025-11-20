'use client'
import { Button, toaster } from '@/components/ui'

export const App = () => {
  return (
    <div>
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
    </div>
  )
}
