<script setup lang="ts">
import { Divider, HStack, Stack, styled } from 'styled-system/jsx'
import { container } from 'styled-system/patterns'
import { card } from 'styled-system/recipes'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

const { content, description, footer, header, root, title } = card()
const Typography = styled('p')
</script>

<template>
  <div :class="container({ py: '8', maxW: 'md' })">
    <div :class="root">
      <div :class="header">
        <h2 :class="title">Sign Up</h2>
        <p :class="description">
          Create an account and discover the worlds' best UI component framework.
        </p>
      </div>
      <div :class="content">
        <Stack gap="4">
          <Stack gap="3" direction="row">
            <Button variant="outline" width="full">Google</Button>
            <Button variant="outline" width="full">GitHub</Button>
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
      </div>
      <div :class="footer">
        <Button width="full">Create Account</Button>
      </div>
    </div>
  </div>
</template>
