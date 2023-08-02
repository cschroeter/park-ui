import Link from 'next/link'
import { BsGoogle } from 'react-icons/bs'
import { FiCheck } from 'react-icons/fi'
import { HStack, Stack } from 'styled-system/jsx'
import { Button } from '~/components/button'
import { Checkbox, CheckboxControl, CheckboxInput, CheckboxLabel } from '~/components/checkbox'
import { Input } from '~/components/input'
import { Label } from '~/components/label'
import { Heading, Typography } from '~/components/typography'
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
                <CheckboxInput data-peer />
                <CheckboxControl>{state.isChecked && <FiCheck />}</CheckboxControl>
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
