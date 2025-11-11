import { Button, toaster } from '@/components/ui'

export const App = () => {
  return (
    <Button
      size="sm"
      variant="outline"
      onClick={() => {
        const fileUploadTask = new Promise<void>((resolve) => {
          setTimeout(() => resolve(), 2000)
        })

        toaster.promise(fileUploadTask, {
          success: {
            title: 'Successfully uploaded!',
            description: 'Looks great',
          },
          error: {
            title: 'Upload failed',
            description: 'Something wrong with the upload',
          },
          loading: { title: 'Uploading...', description: 'Please wait' },
        })
      }}
    >
      Add Toast
    </Button>
  )
}
