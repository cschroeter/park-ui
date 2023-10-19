import { Container, VStack } from 'styled-system/jsx'
import { AuthenticationCard } from './examples/authentication-card'

export const App = () => {
  return (
    <Container py={{ base: '16', md: '24' }}>
      <VStack>
        <AuthenticationCard />
      </VStack>
    </Container>
  )
}
