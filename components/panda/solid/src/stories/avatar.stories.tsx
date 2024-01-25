import type { Meta } from 'storybook-solidjs'
import { Avatar } from '~/components/ui/avatar'

const meta: Meta = {
  title: 'Components/Avatar',
}

export default meta

export const Base = () => (
  <Avatar name="Christian Schröter" src="https://avatars.githubusercontent.com/u/1846056?v=4" />
)
export const NameOnly = () => <Avatar name="Christian Schröter" />
export const NoData = () => <Avatar />
