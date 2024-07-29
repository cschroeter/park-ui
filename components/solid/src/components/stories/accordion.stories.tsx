import { ChevronDownIcon } from 'lucide-solid'
import { Index } from 'solid-js'
import type { Meta } from 'storybook-solidjs'
import { Accordion } from '~/components/ui/accordion'

const meta: Meta = {
  title: 'Components/Accordion',
}

export default meta

export const Base = () => {
  return (
    <Accordion.Root value={['React']}>
      <Index each={['React', 'Solid', 'Svelte', 'Vue']}>
        {(item) => (
          <Accordion.Item value={item()} disabled={item() === 'Svelte'}>
            <Accordion.ItemTrigger>
              What is {item()}?
              <Accordion.ItemIndicator>
                <ChevronDownIcon />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              {item()} is a JavaScript library for building user interfaces.
            </Accordion.ItemContent>
          </Accordion.Item>
        )}
      </Index>
    </Accordion.Root>
  )
}
