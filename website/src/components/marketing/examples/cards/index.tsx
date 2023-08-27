import { Grid, GridItem } from 'styled-system/jsx'
import { AuthenticationCard } from './authentication-card'
import { NotificationCard } from './notification-card'

export const Cards = () => {
  return (
    <Grid columns={{ base: 1, md: 2, xl: 3 }} gap="8">
      <GridItem>
        <AuthenticationCard />
      </GridItem>
      <GridItem>
        <NotificationCard />
      </GridItem>
      <GridItem></GridItem>
    </Grid>
  )
}
