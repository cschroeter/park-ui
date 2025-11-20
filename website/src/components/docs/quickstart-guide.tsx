import { cva } from 'styled-system/css'
import { Center, Stack, Wrap } from 'styled-system/jsx'
import { Text } from '@/components/ui'
import { NextJsIcon, SolidStartIcon } from '../icons'

export const QuickstartGuide = () => {
  const frameworks = [
    { name: 'Next.js', icon: NextJsIcon, slug: 'park-ui-nextjs' },
    { name: 'Solid Start', icon: SolidStartIcon, slug: 'park-ui-solid-start' },
    // { name: 'Nuxt', icon: NuxtIcon, slug: 'templates/vue/nuxt' },
  ]
  return (
    <Wrap direction="row" gap={{ base: '3', md: '4' }} className="not-prose">
      {frameworks.map(({ name, icon: Icon, slug }) => (
        <a
          key={name}
          href={`https://stackblitz.com/~/github.com/cschroeter/${slug}`}
          target="_blank"
          rel="noreferrer"
          className={link}
        >
          <Center boxSize="20">
            <Stack>
              <Icon height="48" width="auto" />
              <Text textStyle="sm" textAlign="center">
                {name}
              </Text>
            </Stack>
          </Center>
        </a>
      ))}
    </Wrap>
  )
}

const link = cva({
  base: {
    background: 'gray.surface.bg',
    borderRadius: 'l3',
    borderWidth: '1px',
    color: 'fg.default',
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 'medium',
    gap: '3',
    p: '4',
    textDecoration: 'none',
    transitionDuration: 'normal',
    transitionProperty: 'border-color, box-shadow',
    transitionTimingFunction: 'default',
    _hover: {
      borderColor: 'colorPalette.solid.bg',
      shadowColor: 'colorPalette.solid.bg',
      boxShadow: '0 0 0 1px var(--shadow-color)',
    },
    _focusVisible: {
      outline: 'none',
      borderColor: 'colorPalette.solid.bg',
      shadowColor: 'colorPalette.solid.bg',
      boxShadow: '0 0 0 1px var(--shadow-color)',
    },
  },
})()
