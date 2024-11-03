'use client'
import { SiApple, SiPaypal } from '@icons-pack/react-simple-icons'
import { CheckIcon, ChevronsUpDownIcon, CreditCardIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Field } from '~/components/ui/field'
import { RadioButtonGroup } from '~/components/ui/radio-button-group'
import { Select, createListCollection } from '~/components/ui/select'

const months = createListCollection({
  items: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
})
const years = createListCollection({
  items: ['2023', '2024', '2025'],
})

export const PaymentCard = () => {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Payment Method</Card.Title>
        <Card.Description>
          Add a payment method to your account to start your subscription.
        </Card.Description>
      </Card.Header>
      <Card.Body gap="4">
        <RadioButtonGroup.Root
          defaultValue="card"
          variant="outline"
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
        >
          {[
            { value: 'card', label: 'Card', icon: CreditCardIcon },
            { value: 'paypal', label: 'Paypal', icon: SiPaypal },
            { value: 'apple', label: 'Apple', icon: SiApple },
          ].map((option, id) => (
            <RadioButtonGroup.Item key={id} value={option.value} height="unset" py="4">
              <RadioButtonGroup.ItemControl />
              <RadioButtonGroup.ItemText flexDirection="column">
                <option.icon style={{ width: '1.5rem', height: '1.5rem' }} />
                {option.label}
              </RadioButtonGroup.ItemText>
              <RadioButtonGroup.ItemHiddenInput />
            </RadioButtonGroup.Item>
          ))}
        </RadioButtonGroup.Root>
        <Field.Root>
          <Field.Label>Owner</Field.Label>
          <Field.Input />
        </Field.Root>
        <Field.Root>
          <Field.Label>Card Number</Field.Label>
          <Field.Input />
        </Field.Root>

        <Stack direction="row" gap="3">
          <Select.Root collection={months} positioning={{ sameWidth: true }}>
            <Select.Label>Month</Select.Label>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Month" />
                <ChevronsUpDownIcon />
              </Select.Trigger>
            </Select.Control>
            <Select.Positioner>
              <Select.Content>
                {months.items.map((month) => (
                  <Select.Item key={month} item={month}>
                    <Select.ItemText>{month}</Select.ItemText>
                    <Select.ItemIndicator>
                      <CheckIcon />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Select.Root>
          <Select.Root collection={years} positioning={{ sameWidth: true }}>
            <Select.Label>Year</Select.Label>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Year" />
                <ChevronsUpDownIcon />
              </Select.Trigger>
            </Select.Control>
            <Select.Positioner>
              <Select.Content>
                {years.items.map((year) => (
                  <Select.Item key={year} item={year}>
                    <Select.ItemText>{year}</Select.ItemText>
                    <Select.ItemIndicator>
                      <CheckIcon />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Select.Root>
          <Field.Root>
            <Field.Label>CVV</Field.Label>
            <Field.Input type="nubmer" />
          </Field.Root>
        </Stack>
      </Card.Body>
      <Card.Footer>
        <Button width="full">Continue</Button>
      </Card.Footer>
    </Card.Root>
  )
}
