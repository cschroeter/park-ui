import { Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  type CardProps,
} from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export const CardDemo = (props: CardProps) => {
  return (
    <Card width="sm" {...props}>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>Add new members to your organisation.</CardDescription>
      </CardHeader>
      <CardContent gap="4">
        <Stack gap="1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Name" />
        </Stack>
        <Stack gap="1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Email" />
        </Stack>
      </CardContent>
      <CardFooter gap="3">
        <Button variant="secondary">Cancel</Button>
        <Button>Invite</Button>
      </CardFooter>
    </Card>
  )
}
