import { Grid, Stack } from 'styled-system/jsx'
import { Heading, Typography } from '~/components/typography'
import { getColorTokens } from '~/lib/get-color-tokens'
import { ColorTokenSwatch } from './color-token-swatch'

const data = {
  fg: {
    title: 'Foreground',
    description:
      'These colors are applied to foreground elements, such as text, icons, buttons, and other interactive components.',
  },
  bg: {
    title: 'Background',
    description:
      'These colors are applied to the background elements of a user interface, such as containers, sections, or entire screens.',
  },
  accent: {
    title: 'Accent',
    description:
      "These colors play a crucial role in guiding users' attention to specific actions, content, or interactive elements.",
  },
}

export const SemanticTokensShowcase = () => {
  const tokens = getColorTokens()
  return (
    <Stack gap="16" pt="4">
      {tokens.map((group, id) => (
        <Stack gap="8" key={id}>
          <Stack gap="4">
            <Heading textStyle={{ base: 'lg', md: 'xl' }}>{data[group.key].title}</Heading>
            <Typography color="fg.muted" lineHeight="relaxed">
              {data[group.key].description}
            </Typography>
          </Stack>
          <Grid gap={{ base: '4', md: '6' }} columns={{ base: 2, sm: 3 }}>
            {group.tokens.map((token, id) => (
              <ColorTokenSwatch key={id} {...token} />
            ))}
          </Grid>
        </Stack>
      ))}
    </Stack>
  )
}
