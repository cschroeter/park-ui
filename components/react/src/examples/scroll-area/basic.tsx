import { loremIpsum } from 'lorem-ipsum'
import { ScrollArea } from '@/components/ui/'

export const App = () => {
  return (
    <ScrollArea.Root height="36">
      <ScrollArea.Viewport>
        <ScrollArea.Content
          spaceY="3"
          textStyle="sm"
          pe="3"
          dangerouslySetInnerHTML={{
            __html: loremIpsum({ count: 10, format: 'html', units: 'paragraphs' }),
          }}
        />
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar>
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  )
}
