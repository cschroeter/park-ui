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
import {
  RangeSlider,
  RangeSliderControl,
  RangeSliderTrack,
  RangeSliderMarker,
  RangeSliderMarkerGroup,
  RangeSliderRange,
  RangeSliderThumb,
} from '~/components/ui/range-slider'

const Typography = styled('p')

const valuesRef = ref([-20, 20])
</script>

<template>
  <div :class="container({ py: '8', maxW: 'md', display: 'flex', flexDir: 'column', gap: '8' })">
    <!-- <RangeSlider :min="50" :max="50" v-model="valuesRef">
      <RangeSliderControl>
        <RangeSliderTrack>
          <RangeSliderRange />
        </RangeSliderTrack>
        <RangeSliderThumb v-for="(_, idx) in valuesRef" :key="idx" :index="idx" />
      </RangeSliderControl>
      <RangeSliderMarkerGroup>
        <RangeSliderMarker value="{25}">25</RangeSliderMarker>
        <RangeSliderMarker value="{50}">50</RangeSliderMarker>
        <RangeSliderMarker value="{75}">75</RangeSliderMarker>
      </RangeSliderMarkerGroup>
    </RangeSlider> -->
    <Card foo="3">
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
