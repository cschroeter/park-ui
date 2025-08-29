import { Wrap } from 'styled-system/jsx'
import { Spinner } from '@/components/ui'

export const App = () => {
  const colorPalettes = ['red', 'green', 'blue', 'amber'] as const

  return (
    <Wrap gap="4">
      {colorPalettes.map((colorPalette) => (
        <Spinner key={colorPalette} color="colorPalette.default" colorPalette={colorPalette} />
      ))}
    </Wrap>
  )
}
