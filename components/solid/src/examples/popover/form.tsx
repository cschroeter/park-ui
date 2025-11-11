import { Portal } from 'solid-js/web'
import { Button, CloseButton, Field, Input, Popover, Textarea } from '@/components/ui'

export const App = () => {
  return (
    <Popover.Root>
      <Popover.Trigger
        asChild={(triggerProps) => (
          <Button variant="outline" {...triggerProps()}>
            Open Popover
          </Button>
        )}
      />
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
            <Popover.CloseTrigger asChild={(triggerProps) => <CloseButton {...triggerProps()} />} />
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
