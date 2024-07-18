import { Code2Icon, EyeIcon } from 'lucide-react'
import dynamic from 'next/dynamic'
import { Box, HStack } from 'styled-system/jsx'
import { Heading, Tabs, Text } from '~/components/ui'
import { ResizableIFrame } from '../resizable-iframe'
import { BlockCodePreview } from './block-code-preview'
import type { Blocks } from '.velite'

interface Props {
  block: Blocks
  variant: {
    id: string
    name: string
  }
}

export const BlockPlayground = async (props: Props) => {
  const { block, variant } = props

  const Block = dynamic(() =>
    import(`~/components/blocks/${block.id}/${variant.id}/example`)
      .then((mod) => mod.Example)
      .catch(() => NotFound),
  )

  return (
    <Tabs.Root variant="enclosed" defaultValue="preview" size="sm" lazyMount>
      <HStack gap="3">
        <HStack justify="space-between" flex="1">
          <Heading textStyle={{ base: 'md', md: 'lg' }}>{variant.name}</Heading>
          <Tabs.List width="fit-content">
            <Tabs.Trigger value="preview">
              <EyeIcon />
              <Text display={{ base: 'none', md: 'flex' }}>Preview</Text>
            </Tabs.Trigger>
            <Tabs.Trigger value="code" disabled>
              <Code2Icon />
              <Text display={{ base: 'none', md: 'flex' }}>Code</Text>
            </Tabs.Trigger>
            {/* <Link
              href={`https://www.figma.com/design/wN70u2btZ6uKVxFJ8UPXvy/Park-UI-Design-System-Pro-Components-(Preview)?node-id=${figmaNodeId}&mode=design`}
              target="_blank"
              textStyle="sm"
              px="3"
              color="fg.muted"
              cursor="pinter"
              textDecoration="none"
              display={{ base: 'none', md: 'flex' }}
            >
              <FigmaIcon />
              <Text>Figma</Text>
            </Link> */}
            <Tabs.Indicator />
          </Tabs.List>
        </HStack>
      </HStack>
      <Tabs.Content value="preview" px="!0">
        <ResizableIFrame>
          <Block />
        </ResizableIFrame>
      </Tabs.Content>
      <Tabs.Content value="code" px="!0">
        <BlockCodePreview files={[]} />
      </Tabs.Content>
    </Tabs.Root>
  )
}

const NotFound = () => {
  return <Box>Component not found</Box>
}
