import { ImageUpIcon } from 'lucide-react'
import { Button, FileUpload } from '@/components/ui'

export const App = () => {
  return (
    <FileUpload.Root accept={['image/png']}>
      <FileUpload.HiddenInput />
      <FileUpload.Trigger asChild>
        <Button variant="outline" size="sm">
          <ImageUpIcon /> Upload image
        </Button>
      </FileUpload.Trigger>
      <FileUpload.List clearable showSize />
    </FileUpload.Root>
  )
}
