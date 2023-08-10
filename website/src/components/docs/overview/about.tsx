import Link from 'next/link'
import { Box, Stack } from 'styled-system/jsx'
import { link } from 'styled-system/recipes'
import { Heading, Typography } from '~/components/ui/typography'
import { article } from './introduction'

export const About = () => {
  return (
    <Box className={article()}>
      <Heading>Creator</Heading>
      <Typography>
        <Link className={link()} href="https://park-ui.com" target="_blank">
          https://park-ui.com
        </Link>{' '}
        is a project by{' '}
        <Link className={link()} href="https://twitter.com/grizzly_codes" target="_blank">
          grizzly_codes
        </Link>
      </Typography>
      <Stack align="start" mt="6">
        <a href="https://www.buymeacoffee.com/grizzlycodes" target="_blank">
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
            style={{ height: '44px' }}
          />
        </a>
      </Stack>

      <Heading>Credits</Heading>

      <Typography>
        The development of Park UI was only possible due to the inspiration and ideas from these
        amazing projects and people.
      </Typography>

      <ul>
        <li>
          <Link className={link()} href="https://ark-ui.com" target="_blank">
            Ark UI
          </Link>{' '}
          - For the foundation of this design system
        </li>
        <li>
          <Link className={link()} href="https://panda-css.com" target="_blank">
            Panda CSS
          </Link>{' '}
          - For the foundation of the design system
        </li>
        <li>
          <Link className={link()} href="https://twitter.com/shadcn" target="_blank">
            shadcn
          </Link>{' '}
          - For the inspiration of this project
        </li>
        <li>
          <Link className={link()} href="https://twitter.com/thesegunadebayo" target="_blank">
            Segun Adebayo
          </Link>{' '}
          - The most talented developer I have ever had the pleasure to work with.
        </li>
      </ul>

      <Heading>License</Heading>
      <Typography>
        MIT ©{' '}
        <Link className={link()} href="https://twitter.com/grizzly_codes" target="_blank">
          grizzly_codes
        </Link>
      </Typography>
    </Box>
  )
}
