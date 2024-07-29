import { ChevronDownIcon } from 'lucide-solid'
import { For } from 'solid-js'
import { Accordion } from '~/components/ui/accordion'

export const Demo = (props: Accordion.RootProps) => {
  const items = ['React', 'Solid', 'Svelte', 'Vue']

  return (
    <Accordion.Root defaultValue={['React']} multiple {...props}>
      <For each={items}>
        {(item) => (
          <Accordion.Item value={item} disabled={item === 'Svelte'}>
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
        )}
      </For>
    </Accordion.Root>
  )
}
