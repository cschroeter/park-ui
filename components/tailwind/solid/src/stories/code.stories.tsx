import type { Meta } from 'storybook-solidjs'
import { Code } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Code',
}

export default meta

export const Base = () => <Code>@park-ui/panda-preset</Code>
