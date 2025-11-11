import { Button } from '@/components/ui'

export const App = () => {
  let ref: HTMLButtonElement | undefined
  return <Button ref={ref}>Click me</Button>
}
