import { FileUpIcon } from 'lucide-solid'
import { Button, FileUpload } from '@/components/ui'

export const App = () => {
  return (
    <FileUpload.Root maxFiles={3}>
      <FileUpload.HiddenInput />
      <FileUpload.Trigger
        asChild={(triggerProps) => (
          <Button variant="outline" size="sm" {...triggerProps()}>
            <FileUpIcon /> Upload file
          </Button>
        )}
      />
      <FileUpload.List clearable showSize />
    </FileUpload.Root>
  )
}
