import { Title } from 'solid-start'
import { Container } from 'styled-system/jsx'
import { AuthenticationCard } from '~/components/examples/authentication-card'

export default function Home() {
  return (
    <main>
      <Title>Welcome to Park UI</Title>
      <Container py={{ base: '16', md: '24' }}>
        <AuthenticationCard />
      </Container>
    </main>
  )
}
