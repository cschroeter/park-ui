import { Button } from '../button/snippet'
import { Input } from '../input/snippet'
import { Label } from '../label/snippet'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  type CardProps,
} from './snippet'

export const Demo = (props: CardProps) => {
  return (
    <Card width="sm" {...props}>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>Add new members to your organisation.</CardDescription>
      </CardHeader>
      <CardContent gap="4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Name" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Email" />
        </div>
      </CardContent>
      <CardFooter gap="3">
        <Button variant="outline">Cancel</Button>
        <Button>Invite</Button>
      </CardFooter>
    </Card>
  )
}
