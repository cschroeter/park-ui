// @refresh reload
import { Container } from 'styled-system/jsx'
import { AuthenticationCard } from './components/examples/authentication-card'
import './index.css'

export default function App() {
  return (
    <main>
      <Container py={{ base: '16', md: '24' }}>
        <AuthenticationCard />
      </Container>
    </main>
  )
}
