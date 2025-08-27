'use client'
import { Portal } from '@ark-ui/react/portal'
import { ChevronRightIcon, MenuIcon } from 'lucide-react'
import { useState } from 'react'
import { Box, HStack } from 'styled-system/jsx'
import { Button, Icon } from '@/components/ui'

interface Props {
  children: React.ReactNode
}

export const SidebarMobileContainer = (props: Props) => {
  const { children } = props
  const [open, setOpen] = useState(false)
  return (
    <Box
      px={{ base: '4', sm: '6', md: '8' }}
      borderBottomWidth="1px"
      height="14"
      position="fixed"
      insetX="0"
      top="14"
      hideFrom="lg"
      bg="bg.default"
      zIndex="sticky"
    >
      <HStack h="full" color="fg.muted">
        <Button
          variant="link"
          fontWeight="normal"
          gap="2"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
          textStyle="md"
        >
          <MenuIcon />
          <span>Components</span>
          <Icon size="sm">
            <ChevronRightIcon />
          </Icon>
          <span>Avatar</span>
        </Button>
      </HStack>
      {open && (
        <Portal>
          <Box position="fixed" inset="0" zIndex="sticky">
            <Box position="fixed" insetY="0" left="0" top="120px" width="full">
              {children}
            </Box>
          </Box>
        </Portal>
      )}
    </Box>
  )
}
