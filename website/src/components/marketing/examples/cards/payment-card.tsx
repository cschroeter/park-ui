import { Portal } from '@ark-ui/react'
import { SiApple, SiPaypal } from '@icons-pack/react-simple-icons'
import { CheckIcon, ChevronsUpDownIcon, CreditCardIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import {
  Radio,
  RadioButtonGroup,
  RadioControl,
  RadioLabel,
} from '~/components/ui/radio-button-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const years = ['2023', '2024', '2025']

export const PaymentCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
        <CardDescription>
          Add a payment method to your account to start your subscription.
        </CardDescription>
      </CardHeader>
      <CardContent gap="4">
        <RadioButtonGroup
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
            <Radio key={id} value={option.value} height="unset" py="4">
              <RadioControl />
              <RadioLabel flexDirection="column">
                <option.icon style={{ width: '1.5rem', height: '1.5rem' }} />
                {option.label}
              </RadioLabel>
            </Radio>
          ))}
        </RadioButtonGroup>
        <Stack gap="1.5">
          <Label htmlFor="owner">Owner</Label>
          <Input id="owner" />
        </Stack>
        <Stack gap="1.5">
          <Label htmlFor="Name">Card Number</Label>
          <Input id="card" />
        </Stack>
        <Stack direction="row" gap="3">
          <Select items={months} positioning={{ sameWidth: true }}>
            <SelectLabel>Month</SelectLabel>
            <SelectTrigger>
              <SelectValue placeholder="Month" />
              <ChevronsUpDownIcon />
            </SelectTrigger>

            <Portal>
              <SelectPositioner>
                <SelectContent>
                  {months.map((month) => (
                    <SelectItem key={month} item={month}>
                      <SelectItemText>{month}</SelectItemText>
                      <SelectItemIndicator>
                        <CheckIcon />
                      </SelectItemIndicator>
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectPositioner>
            </Portal>
          </Select>
          <Select items={years} positioning={{ sameWidth: true }}>
            <SelectLabel>Year</SelectLabel>
            <SelectTrigger>
              <SelectValue placeholder="Year" />
              <ChevronsUpDownIcon />
            </SelectTrigger>
            <Portal>
              <SelectPositioner>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} item={year}>
                      <SelectItemText>{year}</SelectItemText>
                      <SelectItemIndicator>
                        <CheckIcon />
                      </SelectItemIndicator>
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectPositioner>
            </Portal>
          </Select>
          <Stack gap="1.5">
            <Label htmlFor="cvc">CVC</Label>
            <Input id="cvc" />
          </Stack>
        </Stack>
      </CardContent>
      <CardFooter>
        <Button width="full">Continue</Button>
      </CardFooter>
    </Card>
  )
}
