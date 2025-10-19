import { Stack } from 'styled-system/jsx'
import { Heading } from '@/components/ui'

export const App = () => {
  return (
    <Stack>
      <Heading fontWeight="light">Sphinx of black quartz, judge my vow.</Heading>
      <Heading fontWeight="normal">Sphinx of black quartz, judge my vow.</Heading>
      <Heading fontWeight="medium">Sphinx of black quartz, judge my vow.</Heading>
      <Heading fontWeight="semibold">Sphinx of black quartz, judge my vow.</Heading>
      <Heading fontWeight="bold">Sphinx of black quartz, judge my vow.</Heading>
    </Stack>
  )
}
