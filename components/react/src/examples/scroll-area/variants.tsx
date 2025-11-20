import { loremIpsum } from 'lorem-ipsum'
import { Stack } from 'styled-system/jsx'
import { Heading, ScrollArea } from '@/components/ui'

export const App = () => {
  const variants = ['auto', 'visible'] as const
  return (
    <Stack gap="6">
      {variants.map((variant) => (
        <Stack key={variant}>
          <Heading as="h3">Scrollbar: {variant}</Heading>
          <ScrollArea.Root height="36" scrollbar={variant}>
            <ScrollArea.Viewport>
              <ScrollArea.Content
                spaceY="3"
                textStyle="sm"
                dangerouslySetInnerHTML={{
                  __html: loremIpsum({ count: 10, format: 'html', units: 'paragraphs' }),
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
