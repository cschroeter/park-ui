import { Portal } from '@ark-ui/react'
import { BiCheck, BiExpandVertical } from 'react-icons/bi'
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
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'

import { Textarea } from '~/components/ui/textarea'

export const ReportIssueCard = () => {
  const frameworks = ['React', 'Solid', 'Vue']
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
        <Select items={frameworks} positioning={{ sameWidth: true }} multiple>
          <SelectLabel>Frameworks</SelectLabel>
          <SelectTrigger>
            <SelectValue placeholder="Select a Framework" />
            <BiExpandVertical />
          </SelectTrigger>
          <Portal>
            <SelectPositioner>
              <SelectContent>
                {frameworks.map((framework) => (
                  <SelectItem key={framework} item={framework}>
                    <SelectItemText>{framework}</SelectItemText>
                    <SelectItemIndicator>
                      <BiCheck />
                    </SelectItemIndicator>
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectPositioner>
          </Portal>
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
