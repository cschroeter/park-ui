'use client'
import { Container } from 'styled-system/jsx'
import { Accordion } from '~/components/playground'

const Page = () => {
  return (
    <Container>
      <Accordion.Root defaultValue={['React']} multiple>
        <Accordion.Item value="react">
          <Accordion.Trigger>Open</Accordion.Trigger>
          <Accordion.Content>
            <div>
              Pudding donut gummies chupa chups oat cake marzipan biscuit tart. Dessert macaroon ice
              cream bonbon jelly. Jelly topping tiramisu halvah lollipop.
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </Container>
  )
}

export default Page
