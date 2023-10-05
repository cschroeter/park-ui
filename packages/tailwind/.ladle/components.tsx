import '@fontsource/plus-jakarta-sans/200.css'
import '@fontsource/plus-jakarta-sans/300.css'
import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/500.css'
import '@fontsource/plus-jakarta-sans/600.css'
import '@fontsource/plus-jakarta-sans/700.css'
import '@fontsource/plus-jakarta-sans/800.css'
import '../src/plugin/css/preset.css'
import './styles.css'

import type { GlobalProvider } from '@ladle/react'
import { useEffect } from 'react'
import { useDarkMode } from './useDarkMode'

export const argTypes = {
  background: {
    control: { type: 'background' },
    defaultValue: 'unset',
  },
}

const useAddBackground = () => {
  useEffect(() => {
    const element = document.querySelector('.ladle-main')
    element?.classList.add('text-fg-default', 'bg-bg-default')
  }, [])
}

export const Provider: GlobalProvider = ({ children }) => {
  useDarkMode()
  useAddBackground()
  return <div className="text-fg-default bg-bg-default p-8">{children}</div>
}
