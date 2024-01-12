import { addons, types } from '@storybook/addons'
import { useGlobals } from '@storybook/api'
import { IconButton } from '@storybook/components'
import React, { useCallback } from 'react'

addons.register('CustomAddons', () => {
  addons.add('ThemeSwitcher', {
    type: types.TOOL,
    title: 'ThemeSwitcher',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: () => {
      const [{ isDarkMode }, updateGlobals] = useGlobals()

      const toggleColorMode = useCallback(
        () =>
          updateGlobals({
            isDarkMode: !isDarkMode,
          }),
        [isDarkMode],
      )

      return (
        <IconButton
          key="ColorModeToggle"
          active={isDarkMode}
          title="Toggle between dark and light mode"
          onClick={toggleColorMode}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z"></path>
          </svg>
        </IconButton>
      )
    },
  })
})
