import { HStack } from 'styled-system/jsx'
import { Tabs } from '~/components/ui/tabs'
import { CodePreview } from '../code-preview'
import { DownloadButton } from './download-button'

interface Props {
  files: { filename: string; content: string; html: string }[]
}

export const BlockCodePreview = (props: Props) => {
  const { files } = props
  return (
    <Tabs.Root
      defaultValue={files[0]?.filename}
      borderRadius="l3"
      overflow="hidden"
      borderWidth="1px"
      size="sm"
    >
      <HStack
        justify="space-between"
        bg="gray.dark.1"
        boxShadow="0 -1px 0 0 inset var(--colors-gray-dark-4)"
        pe="1"
      >
        <Tabs.List pt="1.5" boxShadow="none" ps="4">
          {files.map(({ filename }) => (
            <Tabs.Trigger
              key={filename}
              value={filename}
              color="gray.dark.11"
              _selected={{ color: 'white' }}
              pb="2"
            >
              {filename}
            </Tabs.Trigger>
          ))}
          <Tabs.Indicator bg="colorPalette.default" />
        </Tabs.List>
        <DownloadButton name="File" files={files} />
      </HStack>
      {files.map(({ filename, content, html }) => (
        <Tabs.Content key={filename} value={filename} p="0!">
          <CodePreview code={content} html={html} />
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
