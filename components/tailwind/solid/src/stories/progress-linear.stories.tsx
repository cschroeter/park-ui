import type { Meta } from 'storybook-solidjs'
import { Progress } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Progress Linear',
}

export default meta

export const Base = () => {
  return <Progress value={20} />
}

export const Size = () => {
  return (
    <div className="flex flex-col gap-2.5">
      <Progress value={20} size="sm" />
      <Progress value={20} size="md" />
      <Progress value={20} size="lg" />
    </div>
  )
}
