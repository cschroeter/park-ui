import Link from 'next/link'
import { Box, Flex } from 'styled-system/jsx'
import { link } from 'styled-system/recipes'
import { Heading, Typography } from '~/components/ui/typography'
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
      <Flex bg="bg.subtle" borderRadius="lg" borderWidth="1px" overflow="hidden">
        <iframe
          width="100%"
          height="352px"
          src="https://embed.figma.com/file/1268615283036362769/hf_embed?community_viewer=true&embed_host=parkui"
        />
      </Flex>
      <Heading>Download</Heading>
      <Typography>
        The Park UI Kit is available for download on{' '}
        <Link
          className={link()}
          href="https://www.figma.com/community/file/1268615283036362769"
          target="_blank"
        >
          Figma Community
        </Link>
        .
      </Typography>
    </Box>
  )
}
