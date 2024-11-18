import type React from 'react'
import { Stack } from 'styled-system/jsx'
import { Heading } from '~/components/ui/heading'
import { Text } from '~/components/ui/text'

interface Props {
  subHeading: string
  heading: string
  description: React.ReactNode
  children?: React.ReactNode
}

export const PageHeader = (props: Props) => {
  const { subHeading, heading, description } = props
  return (
    <Stack gap={{ base: '8', md: '12' }} align="center" textAlign="center">
      <Stack gap={{ base: '4', md: '6' }}>
        <Stack gap="3">
          <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium" color="colorPalette.text">
            {subHeading}
          </Text>
          <Heading as="h1" textStyle={{ base: '4xl', md: '5xl' }}>
            {heading}
          </Heading>
        </Stack>
        <Text color="fg.muted" fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl">
          {description}
        </Text>
      </Stack>
      {props.children}
    </Stack>
  )
}
