import type { Meta } from '@storybook/react'
import { ArrowRightIcon } from 'lucide-react'
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
