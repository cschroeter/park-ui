'use client'
import { createListCollection } from '@ark-ui/react/collection'
import { Button, Card, Field, Input, Select, Textarea } from '@/components/ui'

export const CardIssue = () => {
  return (
    <Card.Root variant="elevated">
      <Card.Header>
        <Card.Title>Report an issue</Card.Title>
        <Card.Description>Found a bug? Let us know so we can fix it.</Card.Description>
      </Card.Header>
      <Card.Body gap="4">
        <Field.Root>
          <Field.Label>Title</Field.Label>
          <Input placeholder="A short, descriptive title" />
        </Field.Root>
        <Select.Root collection={collection} positioning={{ sameWidth: true }} multiple>
          <Select.Label>Frameworks</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Select a framework" />
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Trigger>
          </Select.Control>
          <Select.Positioner>
            <Select.Content>
              {collection.items.map((framework) => (
                <Select.Item key={framework} item={framework}>
                  <Select.ItemText>{framework}</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Select.Root>
        <Field.Root>
          <Field.Label>Description</Field.Label>
          <Textarea autoresize />
          <Field.HelperText>
            A short comment about your experience with our product.
          </Field.HelperText>
        </Field.Root>
      </Card.Body>
      <Card.Footer>
        <Button variant="outline" colorPalette="gray">
          Cancel
        </Button>
        <Button>Submit</Button>
      </Card.Footer>
    </Card.Root>
  )
}

const collection = createListCollection({ items: ['React', 'Solid', 'Vue'] })
