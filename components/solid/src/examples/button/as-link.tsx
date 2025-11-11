import { Button } from '@/components/ui'

export const App = () => {
  return (
    <Button
      asChild={(props) => (
        <a href="https://park-ui.com" target="_blank" rel="noopener" {...props()}>
          Park UI
        </a>
      )}
    />
  )
}
