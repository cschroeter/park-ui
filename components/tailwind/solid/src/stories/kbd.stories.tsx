import type { Meta } from 'storybook-solidjs'
import { Kbd } from '~/components/ui/kbd'

const meta: Meta = {
  title: 'Components/Kbd',
}

export default meta

export const Base = () => <Kbd>Shift + Alt</Kbd>
