import { UploadIcon } from 'lucide-solid'
import { Button, FileUpload } from '@/components/ui'

export const App = () => {
  return (
    <FileUpload.Root>
      <FileUpload.HiddenInput />
      <FileUpload.Trigger
        asChild={(triggerProps) => (
          <Button variant="outline" size="sm" {...triggerProps()}>
            <UploadIcon /> Upload file
          </Button>
        )}
      />
      <FileUpload.List clearable showSize />
    </FileUpload.Root>
  )
}
