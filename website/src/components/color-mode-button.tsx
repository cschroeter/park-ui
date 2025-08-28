'use client'
import { ClientOnly } from '@ark-ui/react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Icon, IconButton } from '@/components/ui'

export const ColorModeButton = () => {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ClientOnly>
      <IconButton variant="ghost" onClick={handleClick}>
        <Icon size="md">{theme === 'light' ? <SunIcon /> : <MoonIcon />}</Icon>
      </IconButton>
    </ClientOnly>
  )
}
