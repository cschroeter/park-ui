import { Box, Stack } from 'styled-system/jsx'
import { getSidebarGroups } from '~/lib/docs'
import { SidebarGroup } from './sidebar-group'
import { SidebarLink } from './sidebar-link'

export const Sidebar = () => {
  const groups = getSidebarGroups()
  return (
    <Box position="absolute" inset="0">
      <Box
        px={{ base: '4', md: '8' }}
        position="sticky"
        top="14"
        left="0"
        bottom="0"
        overflowY="auto"
        h="full"
        maxW="xs"
        bg="bg.default"
        maxH="calc(100dvh - 64px)"
        py="8"
        borderRightWidth={{ base: '1px', lg: '0' }}
      >
        <nav>
          <Stack gap="8">
            <Stack gap="2">
              <SidebarLink>Documentation</SidebarLink>
            </Stack>

            {groups.map((docs, index) => (
              <SidebarGroup key={index} heading={docs[0].category} docs={docs} />
            ))}
          </Stack>
        </nav>
      </Box>
    </Box>
  )
}
