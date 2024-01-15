import { ChevronDownIcon } from 'lucide-solid'
import type { Meta } from 'storybook-solidjs'
import * as Accordion from '~/components/ui/accordion'

const meta: Meta = {
  title: 'Components/Accordion',
}

export default meta

export const Base = () => {
  const items = ['React', 'Solid', 'Svelte', 'Vue']
  return (
    <Accordion.Root value={['React']}>
      {items.map((item) => (
        <Accordion.Item value={item} disabled={item === 'Svelte'}>
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
