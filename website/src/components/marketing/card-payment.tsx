'use client'
import { createListCollection } from '@ark-ui/react/collection'
import { SiApple, SiPaypal } from '@icons-pack/react-simple-icons'
import { CheckIcon, ChevronsUpDownIcon, CreditCardIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Button, Card, Field, Input, RadioCardGroup, Select } from '@/components/ui'

const months = createListCollection({
  items: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
})
const years = createListCollection({
  items: ['2025', '2026', '2027', '2028', '2029', '2030'],
})

export const CardPayment = () => {
  return (
    <Card.Root variant="elevated">
      <Card.Header>
        <Card.Title>Payment Method</Card.Title>
        <Card.Description>
          Add a payment method to your account to start your subscription.
        </Card.Description>
      </Card.Header>
      <Card.Body gap="4">
        <RadioCardGroup.Root
          defaultValue="card"
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          gap="3"
        >
          {[
            { value: 'card', label: 'Card', icon: CreditCardIcon },
            { value: 'paypal', label: 'Paypal', icon: SiPaypal },
            { value: 'apple', label: 'Apple', icon: SiApple },
          ].map((option, id) => (
            <RadioCardGroup.Item key={id} value={option.value} flexDir="column">
              <option.icon style={{ width: '1.5rem', height: '1.5rem' }} />
              <RadioCardGroup.ItemText fontWeight="semibold">
                {option.label}
              </RadioCardGroup.ItemText>
              <RadioCardGroup.ItemHiddenInput />
            </RadioCardGroup.Item>
          ))}
        </RadioCardGroup.Root>
        <Field.Root>
          <Field.Label>Owner</Field.Label>
          <Input />
        </Field.Root>
        <Field.Root>
          <Field.Label>Card Number</Field.Label>
          <Input />
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
            <Input />
          </Field.Root>
        </Stack>
      </Card.Body>
      <Card.Footer>
        <Button width="full">Continue</Button>
      </Card.Footer>
    </Card.Root>
  )
}
