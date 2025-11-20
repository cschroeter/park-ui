import type { ReactNode } from 'react'
import { Box } from 'styled-system/jsx'
import { Alert, Badge } from '@/components/ui'

interface Props {
  children?: ReactNode
  /**
   * @default 'info'
   */
  type: 'info' | 'warning'
}

export const Callout = (props: Props) => {
  return (
    <Alert.Root className="not-prose" size="lg" status="neutral" mb="6" mt="8">
      <Box
        position="absolute"
        h="100%"
        w="0.5"
        top="2"
        maxHeight="calc(100% - 16px)"
        insetStart="2"
        bg="colorPalette.solid.bg"
      />
      <Box pos="absolute" top="-3" insetStart="2">
        <Badge variant="solid" borderBottomLeftRadius="0">
          <Alert.Indicator fontSize="xs" /> {props.type === 'info' ? 'Info' : 'Warning'}
        </Badge>
      </Box>
      <Alert.Content ps="2" css={{ '& p': { color: 'colorPalette.subtle.fg' } }}>
        {props.children}
      </Alert.Content>
    </Alert.Root>
  )
}
