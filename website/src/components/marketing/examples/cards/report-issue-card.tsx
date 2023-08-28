import { Portal } from '@ark-ui/react'
import { BiExpandVertical } from 'react-icons/bi'
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
  Select,
  SelectContent,
  SelectLabel,
  SelectOption,
  SelectPositioner,
  SelectTrigger,
} from '~/components/ui/select'
import { Textarea } from '~/components/ui/textarea'

export const ReportIssueCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Report an issue</CardTitle>
        <CardDescription>Found a bug? Let us know so we can fix it.</CardDescription>
      </CardHeader>
      <CardContent gap="4">
        <Stack gap="1.5">
          <Label htmlFor="title">Title</Label>
          <Input id="title" />
        </Stack>
        <Select positioning={{ sameWidth: true }}>
          {({ selectedOption }) => (
            <>
              <Stack gap="1.5">
                <SelectLabel>Framework</SelectLabel>
                <SelectTrigger>
                  {selectedOption?.label ?? 'Select Framework'}
                  <BiExpandVertical />
                </SelectTrigger>
              </Stack>
              <Portal>
                <SelectPositioner>
                  <SelectContent>
                    <SelectOption value="react" label="React" />
                    <SelectOption value="solid" label="Solid">
                      Solid
                    </SelectOption>
                    <SelectOption value="vue" label="Vue">
                      Vue
                    </SelectOption>
                  </SelectContent>
                </SelectPositioner>
              </Portal>
            </>
          )}
        </Select>
        <Stack gap="1.5">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="A brief description of the issue" rows={3} />
        </Stack>
      </CardContent>
      <CardFooter gap="3">
        <Button variant="secondary">Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  )
}
