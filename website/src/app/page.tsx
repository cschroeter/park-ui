import { Container } from 'styled-system/jsx'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/playground'

const Page = () => {
  return (
    <Container>
      <Accordion defaultValue={['React']} multiple>
        <AccordionItem value="react">
          <AccordionTrigger>Open</AccordionTrigger>
          <AccordionContent>
            <div>
              Pudding donut gummies chupa chups oat cake marzipan biscuit tart. Dessert macaroon ice
              cream bonbon jelly. Jelly topping tiramisu halvah lollipop.
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Container>
  )
}

export default Page
