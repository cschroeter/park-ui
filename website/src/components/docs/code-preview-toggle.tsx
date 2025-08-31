'use client'
import { useTabsContext } from '@ark-ui/react/tabs'
import { Button, type ButtonProps } from '@/components/ui'

export const CodePreviewToggle = (props: ButtonProps) => {
  const tabs = useTabsContext()

  return (
    <Button
      size="xs"
      variant="outline"
      borderColor="gray.a4"
      fontSize="13px"
      onClick={() => (tabs.value ? tabs.clearValue() : tabs.setValue('react'))}
      {...props}
    >
      {tabs.value ? 'Hide code' : 'Show code'}
    </Button>
  )
}
