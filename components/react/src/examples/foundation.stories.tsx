'use client'
import type { Meta } from '@storybook/react'
import { Box, Stack } from 'styled-system/jsx'

const meta: Meta = {
  title: 'Foundation',
}

export default meta

export const Sizing = () => {
  const sizes = [
    { label: 'xs', height: '8', boxSize: '4' },
    { label: 'sm', height: '9', boxSize: '4.5' },
    { label: 'md', height: '10', boxSize: '5' },
    { label: 'lg', height: '11', boxSize: '5.5' },
    { label: 'xl', height: '12', boxSize: '6' },
    { label: '2xl', height: '16', boxSize: '8' },
  ]

  return (
    <Stack gap="8">
      {sizes.map(({ label, height, boxSize }) => (
        <Stack key={label} direction="row" gap="0.5" width="80">
          <Ruler height={height} />
          <Box
            h={height}
            bg="blue.9"
            color="blue.contrast"
            textStyle="sm"
            display="flex"
            alignItems="flex-end"
            px="2"
            pb="1"
            flex="1"
          >
            {label}
          </Box>
          <Stack gap="0">
            <Box h={boxSize} width={boxSize} bg="blue.8" />
            <Box h={boxSize} width={boxSize} bg="blue.7" />
          </Stack>
          <Ruler2 height={height} />
        </Stack>
      ))}
    </Stack>
  )
}

const Ruler = ({ height }: { height: string }) => {
  // Convert height token to pixels for measurement display
  const heightMap: Record<string, number> = {
    '8': 32,
    '9': 36,
    '10': 40,
    '11': 44,
    '12': 48,
    '16': 64,
  }

  const pixelHeight = heightMap[height] || 0

  return (
    <Box position="relative" h={height} width="8" mr="1">
      {/* Vertical line */}
      <Box position="absolute" right="1.5" top="0" bottom="0" width="1px" bg="red.9" />
      {/* Top tick */}
      <Box position="absolute" right="0" top="0" width="3" height="1px" bg="red.9" />
      {/* Bottom tick */}
      <Box position="absolute" right="0" bottom="0" width="3" height="1px" bg="red.9" />
      {/* Height label */}
      <Box
        position="absolute"
        right="4"
        top="50%"
        transform="translateY(-50%)"
        fontSize="xs"
        whiteSpace="nowrap"
      >
        {pixelHeight}
      </Box>
    </Box>
  )
}

const Ruler2 = ({ height }: { height: string }) => {
  // Convert height token to pixels for measurement display
  const heightMap: Record<string, number> = {
    '8': 32,
    '9': 36,
    '10': 40,
    '11': 44,
    '12': 48,
    '16': 64,
  }

  const pixelHeight = heightMap[height] || 0
  const halfHeight = pixelHeight / 2

  return (
    <Box position="relative" h={height} width="12" ml="1">
      {/* Vertical line */}
      <Box position="absolute" left="1.5" top="0" bottom="0" width="1px" bg="red.9" />
      {/* Top tick */}
      <Box position="absolute" left="0" top="0" width="3" height="1px" bg="red.9" />
      {/* Middle tick */}
      <Box
        position="absolute"
        left="0.5"
        top="50%"
        width="2"
        height="1px"
        bg="red.9"
        transform="translateY(-50%)"
      />
      {/* Bottom tick */}
      <Box position="absolute" left="0" bottom="0" width="3" height="1px" bg="red.9" />

      {/* Top half label */}
      <Box
        position="absolute"
        left="4"
        top="25%"
        transform="translateY(-50%)"
        fontSize="xs"
        whiteSpace="nowrap"
      >
        {halfHeight}
      </Box>

      {/* Bottom half label */}
      <Box
        position="absolute"
        left="4"
        top="75%"
        transform="translateY(-50%)"
        fontSize="xs"
        whiteSpace="nowrap"
      >
        {halfHeight}
      </Box>
    </Box>
  )
}
