import { useLocalStorage } from '@uidotdev/usehooks'
import { useEffect } from 'react'

type ColorMode = 'light' | 'dark'

export const colorModeLocalStorageKey = 'park-ui-color-mode'

export const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage<ColorMode>(colorModeLocalStorageKey, 'light')

  useEffect(() => {
    const handleEvent = (e: any) => {
      setColorMode(e.detail.colorMode)
    }
    window.addEventListener('color-mode', handleEvent)
    return () => {
      window.removeEventListener('color-mode', handleEvent)
    }
  }, [])

  return {
    colorMode,
  }
}
