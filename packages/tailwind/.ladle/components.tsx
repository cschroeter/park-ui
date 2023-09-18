import '../src/plugin/css/preset.css'

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
