import { Portal } from '@ark-ui/react/portal'
import { Button, CloseButton, Field, Input, Popover, Textarea } from '@/components/ui'

export const App = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outline">Open Popover</Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow />
            <Popover.Header>
              <Popover.Title>Report an issue</Popover.Title>
              <Popover.Description>Please fill out the form below.</Popover.Description>
            </Popover.Header>
            <Popover.Body gap="4">
              <Field.Root>
                <Field.Label>Title</Field.Label>
                <Input placeholder="A descriptive title " />
              </Field.Root>
              <Field.Root>
                <Field.Label>Description</Field.Label>
                <Textarea autoresize placeholder="Describe the issue" />
              </Field.Root>
            </Popover.Body>
            <Popover.Footer>
              <Button width="full">Save</Button>
            </Popover.Footer>
            <Popover.CloseTrigger asChild>
              <CloseButton />
            </Popover.CloseTrigger>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
