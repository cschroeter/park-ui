'use client'
import { ClientOnly } from '@ark-ui/react/client-only'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Box } from 'styled-system/jsx'
import { Icon, IconButton } from '@/components/ui'

export const ColorModeButton = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Box minW="57px" h="14">
      <ClientOnly>
        <IconButton
          colorPalette="gray"
          variant="plain"
          h="14"
          minW="14"
          borderRadius="0"
          onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
        >
          <Icon size="md">{theme === 'light' ? <SunIcon /> : <MoonIcon />}</Icon>
        </IconButton>
      </ClientOnly>
    </Box>
  )
}
