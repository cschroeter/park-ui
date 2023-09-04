<script setup lang="ts">
import { Divider, HStack, Stack, styled } from 'styled-system/jsx'
import { container } from 'styled-system/patterns'
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
import { TabContent, TabIndicator, TabList, TabTrigger, Tabs } from '~/components/ui/tabs'

const Typography = styled('p')

const value = ref('react')
</script>

<template>
  <div :class="container({ py: '8', maxW: 'md', display: 'flex', flexDir: 'column', gap: '8' })">
    <Tabs v-model="value" size="sm">
      <TabList>
        <TabTrigger value="react"><button>React</button></TabTrigger>
        <TabTrigger value="vue"><button>Vue</button></TabTrigger>
        <TabIndicator />
      </TabList>
      <TabContent value="react">React Content</TabContent>
      <TabContent value="vue">Vue Content</TabContent>
    </Tabs>

    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          Create an account and discover the worlds' best UI component framework.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Stack gap="4">
          <Stack gap="3" direction="row">
            <Button variant="secondary" width="full">Google</Button>
            <Button variant="secondary" width="full">GitHub</Button>
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
  </div>
</template>
