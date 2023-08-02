import Link from 'next/link'
import { Box } from 'styled-system/jsx'
import { link } from 'styled-system/recipes'
import { Heading, Typography } from '~/components/typography'
import { article } from './introduction'

export const FigmaLibrary = () => {
  return (
    <Box className={article()}>
      <Typography>
        The Figma UI Kit has been made open source by{' '}
        <Link className={link()} href="https://twitter.com/Brainsandpixels">
          Philipp Körner
        </Link>
      </Typography>
      <Box bg="bg.subtle" p={4} my="4" minH="64" borderRadius="lg">
        <Typography textStyle="sm">Coming soon...</Typography>
      </Box>
      <Heading>Download</Heading>
      <Typography>
        The Park UI Kit is available for download on{' '}
        <Link className={link()} href="https://www.figma.com/">
          Figma Community
        </Link>
        .
      </Typography>
    </Box>
  )
}
