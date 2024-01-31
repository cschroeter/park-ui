import type { Meta } from 'storybook-solidjs'
import { Progress } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Progress Circular',
}

export default meta

export const Base = () => {
  return <Progress type="circular" value={20} size="md" />
}

export const Size = () => {
  return (
    <div className="flex flex-col gap-2.5">
      <Progress type="circular" value={20} size="sm" />
      <Progress type="circular" value={20} size="md" />
      <Progress type="circular" value={20} size="lg" />
    </div>
  )
}
