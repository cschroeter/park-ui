import { Stack } from 'styled-system/jsx'
import { Link } from '@/components/ui'

export const App = () => {
  return (
    <Stack gap="3">
      <Link href="https://park-ui.com">Visit Park UI</Link>
      <Link href="https://github.com/cschroeter/park-ui" target="_blank">
        View on GitHub
      </Link>
    </Stack>
  )
}
