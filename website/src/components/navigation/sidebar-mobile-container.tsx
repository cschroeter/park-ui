'use client'
import { Portal } from '@ark-ui/react/portal'
import { useState } from 'react'
import { Box, HStack } from 'styled-system/jsx'

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
      <HStack h="full" textStyle="sm" color="fg.muted">
        <button type="button" onClick={() => setOpen(!open)}>
          Open {open.toString()}
        </button>
        <span>Components</span>
        <span>Avatar</span>
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
