import { Box } from 'styled-system/jsx'
import { Heading, Typography } from '~/components/typography'
import { article } from './introduction'

export const Changelog = () => {
  return (
    <Box className={article()}>
      <Heading>August, 2023</Heading>
      <Typography>We are proud to present the initial release of Park UI. 🎉</Typography>
    </Box>
  )
}
