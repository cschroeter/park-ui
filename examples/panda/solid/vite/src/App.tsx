import { Index } from 'solid-js'
import { Center, Container, Stack } from 'styled-system/jsx'
import { RadioGroup } from './components/ui/radio-group'
import { AuthenticationCard } from './examples/authentication-card'

export const App = () => {
  return (
    <Container py={{ base: '16', md: '24' }}>
      <Center>
        <Stack>
          <AuthenticationCard />
          <RadioGroup.Root size="sm">
            <RadioGroup.Indicator />
            <Index each={['React', 'Solid', 'Vue']}>
              {(framework) => (
                <RadioGroup.Item value={framework()}>
                  <RadioGroup.ItemControl />
                  <RadioGroup.ItemText>{framework()}</RadioGroup.ItemText>
                </RadioGroup.Item>
              )}
            </Index>
          </RadioGroup.Root>
        </Stack>
      </Center>
    </Container>
  )
}
