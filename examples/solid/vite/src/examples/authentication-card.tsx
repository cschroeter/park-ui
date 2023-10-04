import { HStack, Stack, styled } from 'styled-system/jsx'
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

export const AuthenticationCard = () => {
  return (
    <Card maxW="sm">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          Create an account and discover the worlds' best UI component framework.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Stack gap="4">
          <Stack direction="row" gap="3">
            <Button variant="outline" width="full">
              Google
            </Button>
            <Button variant="outline" width="full">
              GitHub
            </Button>
          </Stack>
          <HStack gap="2">
            <hr style={{ width: '100%' }} />
            <styled.p color="fg.subtle" textStyle="sm" whiteSpace="nowrap">
              or sign up with
            </styled.p>
            <hr style={{ width: '100%' }} />
          </HStack>
          <Stack gap="1.5">
            <Label for="name">E-Mail</Label>
            <Input id="name" placeholder="Your E-Mail" />
          </Stack>
          <Stack gap="1.5">
            <Label for="password">Password</Label>
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
