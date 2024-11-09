import { cva } from 'styled-system/css'
import { Grid } from 'styled-system/jsx'
import { Text } from '~/components/ui/text'
import { NextJsIcon, NuxtIcon, SolidStartIcon } from './icons'

const link = cva({
  base: {
    background: 'bg.default',
    borderRadius: 'lg',
    borderWidth: '1px',
    color: 'fg.default',
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 'medium',
    gap: '3',
    p: '4',
    transitionDuration: 'normal',
    transitionProperty: 'border-color, box-shadow',
    transitionTimingFunction: 'default',
    _hover: {
      borderColor: 'colorPalette.default',
      boxShadow: '0 0 0 1px var(--colors-accent-default)',
    },
    _focusVisible: {
      outline: 'none',
      borderColor: 'colorPalette.default',
      boxShadow: '0 0 0 1px var(--colors-color-palette-default)',
    },
  },
})()

export const Quickstart = () => {
  const frameworks = [
    { name: 'Next.js', icon: NextJsIcon, slug: 'templates/react/next-js' },
    { name: 'Solid Start', icon: SolidStartIcon, slug: 'templates/solid/solid-start' },
    { name: 'Nuxt', icon: NuxtIcon, slug: 'templates/vue/nuxt' },
  ]
  return (
    <Grid gap={{ base: '4', md: '6' }} columns={{ base: 2, sm: 3, xl: 5 }} className="not-prose">
      {frameworks.map(({ name, icon: Icon, slug }) => (
        <a
          key={name}
          href={`https://stackblitz.com/github/cschroeter/park-ui/tree/main/${slug}`}
          target="_blank"
          rel="noreferrer"
          className={link}
        >
          <Icon height="48" width="auto" />
          <Text textStyle="sm" textAlign="center">
            {name}
          </Text>
        </a>
      ))}
    </Grid>
  )
}
