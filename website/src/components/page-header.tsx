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
    <Stack gap="6" alignItems="start">
      <Stack gap={{ base: '5', md: '6' }}>
        <Stack gap={{ base: '3', md: '4' }}>
          {subtitle && (
            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium" color="colorPalette.a11">
              {subtitle}
            </Text>
          )}
          <Heading as="h1" textStyle="3xl">
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
