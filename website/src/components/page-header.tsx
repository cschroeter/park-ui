import type React from 'react'
import { Stack } from 'styled-system/jsx'
import { Heading, Text } from '@/components/ui'

interface Props {
  title: string
  subtitle?: string
  description?: React.ReactNode
  children?: React.ReactNode
}

export const PageHeader = (props: Props) => {
  const { title, subtitle, description } = props
  return (
    <Stack gap={{ base: '8', md: '12' }} alignItems="start">
      <Stack gap={{ base: '5', md: '6' }}>
        <Stack gap={{ base: '3', md: '4' }}>
          <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium" color="colorPalette.text">
            {subtitle}
          </Text>
          <Heading as="h1" textStyle={{ base: '4xl', md: '3xl' }}>
            {title}
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
