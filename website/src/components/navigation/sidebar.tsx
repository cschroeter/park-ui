import { Box, type BoxProps, Stack } from 'styled-system/jsx'
import { ScrollArea } from '@/components/ui'
import { getSidebarGroups } from '~/lib/docs'
import { SidebarGroup } from './sidebar-group'

export const Sidebar = (props: BoxProps) => {
  const groups = getSidebarGroups()
  return (
    <Box
      ps={{ base: '4', md: '8' }}
      position="sticky"
      top="14"
      h="full"
      bg="gray.surface.bg"
      maxH="calc(100dvh - 64px)"
      borderRightWidth={{ base: '1px', lg: '0' }}
      {...props}
    >
      <ScrollArea.Root height="full" maxW="xs" size="sm" css={{ '--scrollbar-margin': '1px' }}>
        <ScrollArea.Viewport>
          <ScrollArea.Content py="8">
            <nav>
              <Stack gap="8">
                {groups.map((docs, index) => (
                  <SidebarGroup key={index} heading={docs[0].category} docs={docs} />
                ))}
              </Stack>
            </nav>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar />
        <ScrollArea.Corner />
      </ScrollArea.Root>
    </Box>
  )
}
