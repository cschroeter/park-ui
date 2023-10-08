import { SiGithub, SiGoogle } from '@icons-pack/react-simple-icons'
import type { Meta } from '@storybook/react'
import { Divider, HStack, Stack } from 'styled-system/jsx'
import { Button, Input, Label, Text } from './components/ui'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card'

const meta: Meta = {
  title: 'Examples/Authentication Card',
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

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
            <Button variant="outline" width="full">
              <SiGoogle />
              Google
            </Button>
            <Button variant="outline" width="full">
              <SiGithub />
              GitHub
            </Button>
          </Stack>
          <HStack gap="2">
            <Divider />
            <Text color="fg.subtle" textStyle="sm" whiteSpace="nowrap">
              or sign up with
            </Text>
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
