import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Button, Card, FormLabel, Input, Select, Textarea } from '~/components/ui'

export const ReportIssueCard = () => {
  const frameworks = ['React', 'Solid', 'Vue']
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Report an issue</Card.Title>
        <Card.Description>Found a bug? Let us know so we can fix it.</Card.Description>
      </Card.Header>
      <Card.Body gap="4">
        <Stack gap="1.5">
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input id="title" />
        </Stack>
        <Select.Root items={frameworks} positioning={{ sameWidth: true }} multiple>
          <Select.Label>Frameworks</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText />
              <ChevronsUpDownIcon />
            </Select.Trigger>
          </Select.Control>
          <Select.Positioner>
            <Select.Content>
              {frameworks.map((framework) => (
                <Select.Item key={framework} item={framework}>
                  <Select.ItemText>{framework}</Select.ItemText>
                  <Select.ItemIndicator>
                    <CheckIcon />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Select.Root>
        <Stack gap="1.5">
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea id="description" placeholder="A brief description of the issue" rows={3} />
        </Stack>
      </Card.Body>
      <Card.Footer gap="3">
        <Button variant="outline">Cancel</Button>
        <Button>Submit</Button>
      </Card.Footer>
    </Card.Root>
  )
}
