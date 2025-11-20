import { loremIpsum } from 'lorem-ipsum'
import { Stack } from 'styled-system/jsx'
import { Heading, ScrollArea } from '@/components/ui'

export const App = () => {
  const sizes = ['xs', 'sm', 'md', 'lg'] as const
  return (
    <Stack gap="6">
      {sizes.map((size) => (
        <Stack key={size}>
          <Heading as="h3">Size: {size}</Heading>
          <ScrollArea.Root height="36" size={size} scrollbar="visible">
            <ScrollArea.Viewport>
              <ScrollArea.Content
                spaceY="3"
                textStyle="sm"
                dangerouslySetInnerHTML={{
                  __html: loremIpsum({
                    count: 10,
                    format: 'html',
                    units: 'paragraphs',
                  }),
                }}
              />
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar />
            <ScrollArea.Corner />
          </ScrollArea.Root>
        </Stack>
      ))}
    </Stack>
  )
}
