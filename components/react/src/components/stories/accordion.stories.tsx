import type { Meta } from '@storybook/react'
import { ChevronDownIcon } from 'lucide-react'
import { Accordion } from '~/components/ui/accordion'

const meta: Meta = {
  title: 'Components/Accordion',
}

export default meta

export const Base = () => {
  const items = ['React', 'Solid', 'Svelte', 'Vue']
  return (
    <Accordion.Root defaultValue={['React']}>
      {items.map((item) => (
        <Accordion.Item key={item} value={item} disabled={item === 'Svelte'}>
          <Accordion.ItemTrigger>
            {item}
            <Accordion.ItemIndicator>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            Pudding donut gummies chupa chups oat cake marzipan biscuit tart. Dessert macaroon ice
            cream bonbon jelly. Jelly topping tiramisu halvah lollipop.
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
