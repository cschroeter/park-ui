import { Box } from 'styled-system/jsx'
import { AbsoluteCenter } from '@/components/ui'

export const App = () => {
  return (
    <Box position="relative" height="40">
      <AbsoluteCenter>
        <Box bg="gray.surface.bg" p="4" borderRadius="l2" boxShadow="md">
          Centered Content
        </Box>
      </AbsoluteCenter>
    </Box>
  )
}
