import { Stack } from 'styled-system/jsx'
import { Text } from '@/components/ui'

export const App = () => {
  return (
    <Stack>
      <Text fontWeight="light">Sphinx of black quartz, judge my vow.</Text>
      <Text fontWeight="normal">Sphinx of black quartz, judge my vow.</Text>
      <Text fontWeight="medium">Sphinx of black quartz, judge my vow.</Text>
      <Text fontWeight="semibold">Sphinx of black quartz, judge my vow.</Text>
      <Text fontWeight="bold">Sphinx of black quartz, judge my vow.</Text>
    </Stack>
  )
}
