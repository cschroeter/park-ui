import { Code2Icon, EyeIcon, FigmaIcon } from 'lucide-react'
import { HStack } from 'styled-system/jsx'
import { Heading, Link, Tabs, Text } from '~/components/ui'
import { fetchSourceFiles } from '~/lib/blocks'
import { BlockCodePreview } from './block-code-preview'
import { BlockPreview } from './block-preview'

interface Props {
  categoryId: string
  figmaNodeId: string
  variantId: string
  name: string
}

export const Showcase = async (props: Props) => {
  const { variantId, categoryId, figmaNodeId, name } = props

  const files = await fetchSourceFiles({ categoryId, variantId })

  return (
    <Tabs.Root variant="enclosed" defaultValue="preview" size="sm" lazyMount>
      <HStack gap="3">
        <HStack justify="space-between" flex="1">
          <Heading textStyle={{ base: 'md', md: 'lg' }}>{name}</Heading>
          <Tabs.List width="fit-content">
            <Tabs.Trigger value="preview">
              <EyeIcon />
              <Text display={{ base: 'none', md: 'flex' }}>Preview</Text>
            </Tabs.Trigger>
            <Tabs.Trigger value="code">
              <Code2Icon />
              <Text display={{ base: 'none', md: 'flex' }}>Code</Text>
            </Tabs.Trigger>
            <Link
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
            </Link>
            <Tabs.Indicator />
          </Tabs.List>
        </HStack>
      </HStack>
      <Tabs.Content value="preview" px="!0">
        <BlockPreview variantId={variantId} categoryId={categoryId} />
      </Tabs.Content>
      <Tabs.Content value="code" px="!0">
        <BlockCodePreview files={files} />
      </Tabs.Content>
    </Tabs.Root>
  )
}
