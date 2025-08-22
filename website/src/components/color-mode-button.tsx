'use client'
import { ClientOnly } from '@ark-ui/react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Box } from 'styled-system/jsx'

export const ColorModeButton = () => {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ClientOnly fallback={<Box h="9" minW="10" />}>
      {/* Fallback is needed to prevent hydration errors */}
      <button type="button" onClick={handleClick}>
        {theme === 'light' ? <SunIcon /> : <MoonIcon />}
      </button>
    </ClientOnly>
  )
}
