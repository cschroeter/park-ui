import { Box, Center, Stack } from 'styled-system/jsx'
import { Text } from '@/components/ui'

export const ComponentSizing = () => {
  return (
    <Stack gap="6" className="not-prose" my="8" fontFamily="code">
      {sizes.map(({ label, height, boxSize }) => (
        <Stack key={label} direction="row" gap="1">
          <Center textStyle="xs">{HEIGHT_MAP[height]}px</Center>
          <Center width="2.5" borderYWidth="1px" borderColor="gray.9" me="1">
            <Box width="1px" bg="gray.9" h="full" />
          </Center>
          <Box
            h={height}
            bg="colorPalette.solid.bg"
            color="colorPalette.solid.fg"
            textStyle="xs"
            display="flex"
            alignItems="flex-end"
            px="2.5"
            pb="1"
            width="64"
          >
            {label}
          </Box>
          <Stack gap="0" width="8">
            <Box h={boxSize} width={boxSize} bg="colorPalette.8" />
            <Box h={boxSize} width={boxSize} bg="colorPalette.7" />
          </Stack>
          <Center width="2.5" borderYWidth="1px" borderColor="gray.9" position="relative" ms="1">
            <Box width="1px" bg="gray.9" h="full" />
            <Box width="2" h="1px" bg="gray.9" position="absolute" transform="translateY(-50%)" />
          </Center>
          <Stack gap="0" justify="space-around" lineHeight="1">
            <Text fontSize="xs">{HEIGHT_MAP[height] / 2}px</Text>
            <Text fontSize="xs">{HEIGHT_MAP[height] / 2}px</Text>
          </Stack>
        </Stack>
      ))}
    </Stack>
  )
}

const HEIGHT_MAP: Record<string, number> = {
  '8': 32,
  '9': 36,
  '10': 40,
  '11': 44,
  '12': 48,
  '16': 64,
}

const sizes = [
  { label: 'xs', height: '8', boxSize: '4' },
  { label: 'sm', height: '9', boxSize: '4.5' },
  { label: 'md', height: '10', boxSize: '5' },
  { label: 'lg', height: '11', boxSize: '5.5' },
  { label: 'xl', height: '12', boxSize: '6' },
  { label: '2xl', height: '16', boxSize: '8' },
] as const
