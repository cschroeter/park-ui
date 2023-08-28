import { FaGithub, FaGoogle } from 'react-icons/fa'
import { Divider, HStack, Stack } from 'styled-system/jsx'
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
import { Typography } from '~/components/ui/typography'

export const AuthenticationCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          Create an account and discover the worlds' best UI component framework.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Stack gap="4">
          <Stack direction="row" gap="3">
            <Button variant="secondary" width="full">
              <FaGoogle />
              Google
            </Button>
            <Button variant="secondary" width="full">
              <FaGithub />
              GitHub
            </Button>
          </Stack>
          <HStack gap="2">
            <Divider />
            <Typography color="fg.subtle" textStyle="sm" whiteSpace="nowrap">
              or sign up with
            </Typography>
            <Divider />
          </HStack>
          <Stack gap="1.5">
            <Label htmlFor="name">E-Mail</Label>
            <Input id="name" placeholder="Your E-Mail" />
          </Stack>
          <Stack gap="1.5">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Your Password" />
          </Stack>
        </Stack>
      </CardContent>
      <CardFooter>
        <Button width="full">Create Account</Button>
      </CardFooter>
    </Card>
  )
}
