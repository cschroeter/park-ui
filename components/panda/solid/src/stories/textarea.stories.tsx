import type { Meta } from 'storybook-solidjs'
import { Textarea } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Textarea',
}

export default meta

export const Base = () => {
  return <Textarea id="description" rows={4} />
}
