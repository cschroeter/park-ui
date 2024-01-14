import type { Meta } from '@storybook/react'
import { ArrowRightIcon } from 'lucide-react'
import { Button } from '~/components/ui/button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
}
export default meta

export const Default = () => (
  <Button size="2xl" variant="subtle">
    Button <ArrowRightIcon />
  </Button>
)
