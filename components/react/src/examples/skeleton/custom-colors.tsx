import { Skeleton } from '@/components/ui'

export const App = () => {
  return (
    <Skeleton
      variant="shine"
      width="full"
      height="5"
      css={{
        '--start-color': 'colors.pink.5',
        '--end-color': 'colors.blue.5',
      }}
    />
  )
}
