import { Code2Icon, EyeIcon, FigmaIcon, LockIcon } from 'lucide-react'
import dynamic from 'next/dynamic'
import NextLink from 'next/link'
import { Box, HStack } from 'styled-system/jsx'
import { hasUserPermission } from '~/app/actions'
import { Button } from '~/components/ui/button'
import { Heading } from '~/components/ui/heading'
import { IconButton } from '~/components/ui/icon-button'
import { Tabs } from '~/components/ui/tabs'
import { Text } from '~/components/ui/text'
import { Tooltip } from '~/components/ui/tooltip'
import { findSourceFiles } from '~/lib/blocks'
import { getFramework } from '~/lib/framework'
import { ResizableIFrame } from '../resizable-iframe'
import { BlockCodePreview } from './block-code-preview'
import type { Blocks } from '.velite'

interface Props {
  block: Blocks
  variant: {
    id: string
    name: string
    accessLevel: string
  }
}

export const BlockPlayground = async (props: Props) => {
  const { block, variant } = props
  const framework = await getFramework()

  const Block = dynamic(() =>
    import(`~/components/blocks/${block.id}/${variant.id}/example`)
      .then((mod) => ({
        default: mod.Example,
      }))
      .catch(() => ({
        default: NotFound,
      })),
  )

  const hasAccessToSourceCode = variant.accessLevel === 'free' || (await hasUserPermission())
  const sourceFiles = hasAccessToSourceCode
    ? await findSourceFiles({ blockId: block.id, variantId: variant.id, framework })
    : []

  return (
    <Tabs.Root variant="enclosed" defaultValue="preview" size="sm" lazyMount>
      <HStack gap="3">
        <HStack justify="space-between" flex="1">
          <Heading textStyle={{ base: 'md', md: 'lg' }}>{variant.name}</Heading>
          <HStack gap="3">
            <Tooltip.Root positioning={{ placement: 'top' }} openDelay={0}>
              <Tooltip.Trigger asChild>
                <IconButton variant="outline" asChild>
                  <a
                    href={`https://www.figma.com/design/wN70u2btZ6uKVxFJ8UPXvy/Park-UI-Design-System-Pro-Components-(Preview)?node-id=${block.figmaNodeId}&mode=design`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FigmaIcon />
                  </a>
                </IconButton>
              </Tooltip.Trigger>
              <Tooltip.Positioner>
                <Tooltip.Content>Preview in Figma</Tooltip.Content>
              </Tooltip.Positioner>
            </Tooltip.Root>
            {hasAccessToSourceCode ? (
              <Tabs.List width="fit-content">
                <Tabs.Trigger value="preview">
                  <EyeIcon />
                  <Text display={{ base: 'none', md: 'flex' }}>Preview</Text>
                </Tabs.Trigger>
                <Tabs.Trigger value="code">
                  <Code2Icon />
                  <Text display={{ base: 'none', md: 'flex' }}>Code</Text>
                </Tabs.Trigger>
                <Tabs.Indicator />
              </Tabs.List>
            ) : (
              <Button variant="outline" asChild>
                <NextLink href="/plus">
                  <LockIcon />
                  Unlock Park UI Plus
                </NextLink>
              </Button>
            )}
          </HStack>
        </HStack>
      </HStack>
      <Tabs.Content value="preview" px="!0">
        <ResizableIFrame>
          <Block />
        </ResizableIFrame>
      </Tabs.Content>
      <Tabs.Content value="code" px="!0">
        <BlockCodePreview files={sourceFiles} />
      </Tabs.Content>
    </Tabs.Root>
  )
}

const NotFound = () => {
  return <Box>Component not found</Box>
}
