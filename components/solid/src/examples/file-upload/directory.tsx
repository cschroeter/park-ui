import { FolderUpIcon } from 'lucide-solid'
import { Button, FileUpload } from '@/components/ui'

export const App = () => {
  return (
    <FileUpload.Root directory>
      <FileUpload.HiddenInput />
      <FileUpload.Trigger
        asChild={(triggerProps) => (
          <Button variant="outline" size="sm" {...triggerProps()}>
            <FolderUpIcon /> Upload directory
          </Button>
        )}
      />
      <FileUpload.List />
    </FileUpload.Root>
  )
}
