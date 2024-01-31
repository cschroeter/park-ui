import type { Meta } from 'storybook-solidjs'
import { FormLabel } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Form Label',
}

export default meta

export const Base = () => {
  return <FormLabel>Form Label</FormLabel>
}
