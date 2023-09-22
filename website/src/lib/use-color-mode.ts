import { useEffectOnce, useLocalStorage, useUpdateEffect } from 'usehooks-ts'

export type ColorMode = 'light' | 'dark' | 'system'

export const colorModeLocalStorageKey = 'park-ui-color-mode'

export const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage<ColorMode>(colorModeLocalStorageKey, 'light')

  const syncColorMode = () =>
    colorMode === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')

  useEffectOnce(syncColorMode)
  useUpdateEffect(syncColorMode, [colorMode])

  return {
    colorMode,
    toggle: () => setColorMode((prev) => (prev === 'dark' ? 'light' : 'dark')),
  }
}
