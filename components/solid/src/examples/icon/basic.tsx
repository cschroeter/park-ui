import { HeartIcon } from 'lucide-solid'
import { Icon } from '@/components/ui'

export const App = () => {
  return (
    <Icon size="lg" color="colorPalette.solid.bg" asChild={(props) => <HeartIcon {...props()} />} />
  )
}
