'use client'
import { ClientOnly } from '@ark-ui/react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Box } from 'styled-system/jsx'
import { Icon, IconButton } from '@/components/ui'

export const ColorModeButton = () => {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <Box minW="57px" h="14">
      <ClientOnly>
        <IconButton variant="ghost" h="14" minW="14" onClick={handleClick}>
          <Icon size="md">{theme === 'light' ? <SunIcon /> : <MoonIcon />}</Icon>
        </IconButton>
      </ClientOnly>
    </Box>
  )
}
