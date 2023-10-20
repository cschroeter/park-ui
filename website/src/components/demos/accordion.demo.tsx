import { ChevronDownIcon } from 'lucide-react'
import { Icon } from '~/components/ui'
import { Accordion, type AccordionProps } from '~/components/ui/accordion'

export const Demo = (props: AccordionProps) => {
  const items = ['React', 'Solid', 'Vue']
  return (
    <Accordion defaultValue={['React']} multiple {...props}>
      {items.map((item, id) => (
        <Accordion.Item key={id} value={item}>
          <Accordion.ItemTrigger>
            {item}
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <div>
              Pudding donut gummies chupa chups oat cake marzipan biscuit tart. Dessert macaroon ice
              cream bonbon jelly. Jelly topping tiramisu halvah lollipop.
            </div>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}

const AccordionIcon = (props: { isOpen: boolean }) => {
  const iconStyles = {
    transform: props.isOpen ? 'rotate(-180deg)' : undefined,
    transition: 'transform 0.2s',
    transformOrigin: 'center',
  }
  return (
    <Icon style={iconStyles}>
      <ChevronDownIcon />
    </Icon>
  )
}
