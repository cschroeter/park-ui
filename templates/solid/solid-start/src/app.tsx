// @refresh reload
import { Container } from 'styled-system/jsx'
import { AuthenticationCard } from '~/components/authentication-card'
import './index.css'

export default function App() {
  return (
    <Container py={{ base: '12', md: '16' }} maxW="md">
      <AuthenticationCard />
    </Container>
  )
}
