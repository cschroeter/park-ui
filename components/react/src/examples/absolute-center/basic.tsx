import { Box } from 'styled-system/jsx'
import { AbsoluteCenter } from '@/components/ui'

export const App = () => {
  return (
    <Box position="relative" height="200px" bg="gray.100" borderRadius="md">
      <AbsoluteCenter>
        <Box bg="white" p="4" borderRadius="md" shadow="md">
          Centered Content
        </Box>
      </AbsoluteCenter>
    </Box>
  )
}
