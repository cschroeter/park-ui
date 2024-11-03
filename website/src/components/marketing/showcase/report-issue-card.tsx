'use client'
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Field } from '~/components/ui/field'
import { FormLabel } from '~/components/ui/form-label'
import { Select, createListCollection } from '~/components/ui/select'
import { Textarea } from '~/components/ui/textarea'

export const ReportIssueCard = () => {
  const collection = createListCollection({ items: ['React', 'Solid', 'Vue'] })
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Report an issue</Card.Title>
        <Card.Description>Found a bug? Let us know so we can fix it.</Card.Description>
      </Card.Header>
      <Card.Body gap="4">
        <Field.Root>
          <Field.Label>Title</Field.Label>
          <Field.Input />
        </Field.Root>
        <Select.Root collection={collection} positioning={{ sameWidth: true }} multiple>
          <Select.Label>Frameworks</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText />
              <ChevronsUpDownIcon />
            </Select.Trigger>
          </Select.Control>
          <Select.Positioner>
            <Select.Content>
              {collection.items.map((framework) => (
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
