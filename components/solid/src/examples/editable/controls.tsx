import { CheckIcon, EditIcon, XIcon } from 'lucide-solid'
import { ButtonGroup, Editable, IconButton } from '@/components/ui'

export const App = () => {
  return (
    <Editable.Root defaultValue="Click to edit" size="sm">
      <Editable.Preview />
      <Editable.Input />
      <Editable.Control>
        <Editable.EditTrigger
          asChild={(triggerProps) => (
            <IconButton variant="plain" size="sm" colorPalette="gray" {...triggerProps()}>
              <EditIcon />
            </IconButton>
          )}
        />
        <ButtonGroup variant="outline" size="sm">
          <Editable.CancelTrigger
            asChild={(triggerProps) => (
              <IconButton colorPalette="gray" {...triggerProps()}>
                <XIcon />
              </IconButton>
            )}
          />
          <Editable.SubmitTrigger
            asChild={(triggerProps) => (
              <IconButton colorPalette="gray" {...triggerProps()}>
                <CheckIcon />
              </IconButton>
            )}
          />
        </ButtonGroup>
      </Editable.Control>
    </Editable.Root>
  )
}
