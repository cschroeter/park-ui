import { Container } from 'styled-system/jsx'
import { AuthenticationCard } from '~/components/authentication-card'

export default function Home() {
  return (
    <Container py={{ base: '12', md: '16' }} maxW="md">
      <AuthenticationCard />
    </Container>
  )
}
