import { cva } from 'styled-system/css'
import { Box } from 'styled-system/jsx'
import { Heading, Typography } from '~/components/typography'

export const article = cva({
  base: {
    '& em': {
      color: 'fg.default',
      fontWeight: 'semibold',
    },
    '& h1': {
      fontWeight: 'semibold',
      mt: { base: '8', md: '10' },
      mb: { base: '4', md: '5' },
      textStyle: { base: '2xl', md: '3xl' },
    },
    '& h2': {
      fontWeight: 'semibold',
      mt: { base: '8', md: '8' },
      mb: { base: '3', md: '4' },
      textStyle: { base: 'xl', md: '2xl' },
    },
    '& h3': {
      fontWeight: 'semibold',
      mt: { base: '5', md: '8' },
      mb: { base: '2', md: '3' },
      textStyle: { base: 'lg', md: 'xl' },
    },
    '& p': {
      color: 'fg.muted',
      my: '4',
      lineHeight: 'relaxed',
    },
    '& ul': {
      color: 'fg.muted',
      lineHeight: 'relaxed',
      my: '4',
    },
    '& li': {
      my: '1',
    },
    '& :first-child': {
      mt: '0',
    },
    '& :last-child': {
      mb: '0',
    },
    '& pre:not(.shiki )': {
      alignItems: 'center',
      background: 'bg.subtle',
      borderColor: 'border.default',
      borderWidth: '1px',
      borderRadius: 'xs',
      color: 'fg.emphasized',
      display: 'inline-flex',
      fontFamily: 'var(--font-code)',
      fontSize: 'sm',
      fontWeight: 'medium',
      height: '6',
      px: '1',
    },
  },
})

export const Introduction = () => {
  return (
    <Box className={article()}>
      <Typography>
        Park UI isn't a conventional component library. It's a valuable collection of re-usable
        components that you can effortlessly copy and paste into your applications.
      </Typography>
      <Heading textStyle={{ base: 'lg', md: 'xl' }}>What does that mean?</Heading>
      <Typography>
        When we say Park UI isn't a conventional component library, we mean its main function is not
        to serve as an installable package dependency that provides pre-made components for direct
        use. While Park UI does require the installation of Ark UI as a dependency and offers a
        Preset package for Panda, the primary purpose of Park UI is to provide code snippets for
        components that can be copied and integrated into your projects.
      </Typography>
      <Heading textStyle={{ base: 'lg', md: 'xl' }}>So how does it work?</Heading>
      <Typography>
        With Park UI, you're in the driver's seat. Simply browse through our comprehensive
        collection of components, select the ones that suit your needs, and then copy and paste the
        corresponding code snippets directly into your project. The beauty of this approach is
        twofold:
      </Typography>
      <ul>
        <li>
          <em>Customization: </em>
          Once you've copied the component code, it's completely yours to modify. You can tailor
          each component to perfectly match your specific needs.
        </li>
        <li>
          <em>Efficiency: </em>
          You only copy what you need. This means your project remains lean and clean, free of
          unnecessary dependencies.
        </li>
      </ul>
      <Typography>
        We encourage you to use Park UI as a starting point, or a reference, in building your own
        component libraries or enhancing your existing ones.
      </Typography>
      <Typography>
        Welcome to a new way of integrating high-quality components into your apps. Welcome to Park
        UI!
      </Typography>
    </Box>
  )
}
