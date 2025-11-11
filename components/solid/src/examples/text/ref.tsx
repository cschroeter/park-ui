import { Text } from '@/components/ui'

export const App = () => {
  let ref: HTMLParagraphElement | undefined
  return <Text ref={ref}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
}
