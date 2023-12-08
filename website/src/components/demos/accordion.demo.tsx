import { ChevronDownIcon } from 'lucide-react'
import type { AccordionProps } from '~/components/ui/accordion'
import * as Accordion from '~/components/ui/accordion'

export const Demo = (props: AccordionProps) => {
  const items = ['React', 'Solid', 'Svelte', 'Vue']
  return (
    <Accordion.Root defaultValue={['React']} multiple {...props}>
      {items.map((item, id) => (
        <Accordion.Item key={id} value={item} disabled={item === 'Svelte'}>
          <Accordion.ItemTrigger>
            {item}
            <Accordion.ItemIndicator>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <div>
              Pudding donut gummies chupa chups oat cake marzipan biscuit tart. Dessert macaroon ice
              cream bonbon jelly. Jelly topping tiramisu halvah lollipop.
            </div>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
