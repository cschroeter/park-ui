import { Wrap } from 'styled-system/jsx'
import { Spinner } from '@/components/ui'

export const App = () => {
  return (
    <Wrap gap="4">
      <Spinner color="colorPalette.solid" colorPalette="red" />
      <Spinner color="colorPalette.solid" colorPalette="green" />
      <Spinner color="colorPalette.solid" colorPalette="blue" />
      <Spinner color="colorPalette.solid" colorPalette="amber" />
    </Wrap>
  )
}
