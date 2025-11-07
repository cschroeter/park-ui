import { Portal } from '@ark-ui/react/portal'
import { ChevronDownIcon, ExternalLinkIcon } from 'lucide-react'
import { Button, ButtonGroup, Clipboard, IconButton, Menu } from '@/components/ui'
import { ChatGPTIcon, ClaudeIcon } from '../icons'

interface Props {
  slug: string
  content: string
}

export const CopyPageWidget = (props: Props) => {
  const { content } = props
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
      <ActionMenu {...props} />
    </ButtonGroup>
  )
}

const ActionMenu = (props: Props) => {
  const { slug } = props
  const pageUrl = `https://park-ui.com/docs/${slug}`
  const readUrl = encodeURIComponent(
    `Use web browsing to access links and information: ${pageUrl}\n\nI want to ask some questions`,
  )

  return (
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
              <a href={`/docs/${slug}.mdx`} target="_blank" rel="noreferrer">
                <ExternalLinkIcon />
                View as Markdown
              </a>
            </Menu.Item>
            <Menu.Item value="chatgpt" asChild>
              <a
                href={`https://chatgpt.com/?hints=search&q=${readUrl}`}
                target="_blank"
                rel="noreferrer"
              >
                <ChatGPTIcon />
                Open in ChatGPT
              </a>
            </Menu.Item>
            <Menu.Item value="claude" asChild>
              <a href={`https://claude.ai/new?q=${readUrl}`} target="_blank" rel="noreferrer">
                <ClaudeIcon />
                Open in Claude
              </a>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
