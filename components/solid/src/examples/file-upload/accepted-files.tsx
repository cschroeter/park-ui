import { ImageUpIcon } from 'lucide-solid'
import { Button, FileUpload } from '@/components/ui'

export const App = () => {
  return (
    <FileUpload.Root accept={['image/png']}>
      <FileUpload.HiddenInput />
      <FileUpload.Trigger
        asChild={(triggerProps) => (
          <Button variant="outline" size="sm" {...triggerProps()}>
            <ImageUpIcon /> Upload image
          </Button>
        )}
      />
      <FileUpload.List clearable showSize />
    </FileUpload.Root>
  )
}
