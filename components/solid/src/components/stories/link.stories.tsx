import type { Meta } from 'storybook-solidjs'
import { Link } from '~/components/ui/link'

const meta: Meta = {
  title: 'Components/Link',
}

export default meta

export const Base = () => <Link href="https://park-ui.com">Park UI</Link>
