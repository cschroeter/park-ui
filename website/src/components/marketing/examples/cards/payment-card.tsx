import { AiFillApple, AiOutlineCreditCard, AiOutlineGoogle } from 'react-icons/ai'
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
// import {
//   Select,
//   SelectContent,
//   SelectLabel,
//   SelectOption,
//   SelectPositioner,
//   SelectTrigger,
// } from '~/components/ui/select'

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
            { value: 'card', label: 'Card', icon: AiOutlineCreditCard },
            { value: 'apple', label: 'Apple', icon: AiFillApple },
            { value: 'google', label: 'Google', icon: AiOutlineGoogle },
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
          {/* <Select positioning={{ sameWidth: true }}>
            {({ selectedOption }) => (
              <>
                <Stack gap="1.5" width="full">
                  <SelectLabel>Month</SelectLabel>
                  <SelectTrigger>
                    {selectedOption?.label ?? 'Month'}
                    <BiExpandVertical />
                  </SelectTrigger>
                </Stack>
                <Portal>
                  <SelectPositioner>
                    <SelectContent>
                      {[
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                      ].map((month) => (
                        <SelectOption key={month} value={month} label={month} />
                      ))}
                    </SelectContent>
                  </SelectPositioner>
                </Portal>
              </>
            )}
          </Select>
          <Select positioning={{ sameWidth: true }}>
            {({ selectedOption }) => (
              <>
                <Stack gap="1.5" width="full">
                  <SelectLabel>Year</SelectLabel>
                  <SelectTrigger>
                    {selectedOption?.label ?? 'Year'}
                    <BiExpandVertical />
                  </SelectTrigger>
                </Stack>
                <Portal>
                  <SelectPositioner>
                    <SelectContent>
                      <SelectOption value="2023" label="2023" />
                      <SelectOption value="2024" label="2024" />
                      <SelectOption value="2025" label="2025" />
                    </SelectContent>
                  </SelectPositioner>
                </Portal>
              </>
            )}
          </Select> */}
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
