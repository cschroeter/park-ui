import { CheckIcon } from 'lucide-react'
import Link from 'next/link'
import { BsGoogle } from 'react-icons/bs'
import { HStack, Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { Checkbox, CheckboxControl, CheckboxLabel } from '~/components/ui/checkbox'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Heading, Typography } from '~/components/ui/typography'
import { LogoIcon } from './logo'

export const SignInForm = () => {
  return (
    <Stack gap="8" width="full" maxW="md" px={{ base: '4', md: '8' }} py={{ base: '8', md: '24' }}>
      <Stack gap="6">
        <LogoIcon display={{ md: 'none' }} />
        <Stack gap={{ base: '2', md: '3' }} textAlign="center">
          <Heading textStyle={{ base: '2xl', md: '3xl' }}>Log in to your account</Heading>
          <Typography color="fg.muted">
            Don't have an account? <Link href="#">Sign up</Link>
          </Typography>
        </Stack>
      </Stack>
      <Stack gap="6">
        <Stack gap="5">
          <Stack gap="1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Your Email" type="email" />
          </Stack>
          <Stack gap="1.5">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="********" type="password" />
          </Stack>
        </Stack>
        <HStack justify="space-between">
          <Checkbox size="sm">
            {(state) => (
              <>
                <CheckboxControl>{state.isChecked && <CheckIcon />}</CheckboxControl>
                <CheckboxLabel>Remember me</CheckboxLabel>
              </>
            )}
          </Checkbox>
          <Button variant="link" size="sm">
            Forgot password
          </Button>
        </HStack>
        <Stack gap="4">
          <Button>Sign in</Button>
          <Button variant="secondary">
            <BsGoogle /> Sign in with Google
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
