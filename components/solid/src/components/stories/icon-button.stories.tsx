import { ArrowRightIcon } from 'lucide-solid'
import type { Meta } from 'storybook-solidjs'
import { IconButton } from '~/components/ui/icon-button'

const meta: Meta = {
  title: 'Components/Icon Button',
}

export default meta

export const Base = () => {
  return (
    <IconButton aria-label="Next Page">
      <ArrowRightIcon />
    </IconButton>
  )
}
