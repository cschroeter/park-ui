import { Button, Tooltip } from '@/components/ui'

export const App = () => {
  return (
    <Tooltip
      showArrow
      content="This is the tooltip content"
      contentProps={{
        style: {
          // @ts-expect-error TODO find a better way to update CSS variables
          '--tooltip-bg': 'tomato',
        },
      }}
    >
      <Button variant="outline" size="sm">
        Hover me
      </Button>
    </Tooltip>
  )
}
