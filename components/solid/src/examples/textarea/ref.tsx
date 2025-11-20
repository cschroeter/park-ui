import { Textarea } from '@/components/ui'

export const App = () => {
  let ref: HTMLTextAreaElement | undefined
  return <Textarea ref={ref} />
}
