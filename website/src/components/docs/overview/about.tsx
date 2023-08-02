import Link from 'next/link'
import { Box } from 'styled-system/jsx'
import { link } from 'styled-system/recipes'
import { Heading, Typography } from '~/components/typography'
import { article } from './introduction'

export const About = () => {
  return (
    <Box className={article()}>
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
    </Box>
  )
}
