import type { Doc } from '.velite'
import { Portal } from '@ark-ui/react/portal'
import { ChevronDownIcon, ExternalLinkIcon } from 'lucide-react'
import { Button, ButtonGroup, Clipboard, IconButton, Menu } from '@/components/ui'
import { getFramework } from '~/lib/get-framework'
import { transformMdxContent } from '~/lib/mdx'
import { ChatGPTIcon, ClaudeIcon } from '../icons'

interface Props {
  doc: Doc
}

export const CopyPageWidget = async (props: Props) => {
  const { doc } = props

  const framework = await getFramework()
  const content = await transformMdxContent(doc, framework)

  const pageUrl = `https://park-ui.com/api/${framework}/docs/${doc.slug}`
  const prompt = encodeURIComponent(
    `Use web browsing to access links and information: ${pageUrl}\n\nI want to ask some questions`,
  )

  return (
    <ButtonGroup variant="subtle" size="sm" attached colorPalette="gray">
      <Clipboard.Root value={content}>
        <Clipboard.Trigger asChild>
          <Button borderEndRadius="0">
            <Clipboard.Indicator />
            Copy Page
          </Button>
        </Clipboard.Trigger>
      </Clipboard.Root>
      <Menu.Root positioning={{ placement: 'bottom-end' }}>
        <Menu.Trigger asChild>
          <IconButton borderStartRadius="0" borderStartWidth="0px">
            <ChevronDownIcon />
          </IconButton>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="markdown" asChild>
                <a href={pageUrl} target="_blank" rel="noreferrer">
                  <ExternalLinkIcon />
                  View as Markdown
                </a>
              </Menu.Item>
              <Menu.Item value="chatgpt" asChild>
                <a
                  href={`https://chatgpt.com/?hints=search&q=${prompt}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ChatGPTIcon />
                  Open in ChatGPT
                </a>
              </Menu.Item>
              <Menu.Item value="claude" asChild>
                <a href={`https://claude.ai/new?q=${prompt}`} target="_blank" rel="noreferrer">
                  <ClaudeIcon />
                  Open in Claude
                </a>
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </ButtonGroup>
  )
}
