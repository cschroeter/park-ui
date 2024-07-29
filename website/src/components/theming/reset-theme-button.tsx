'use client'
import { Undo2Icon } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { useThemeGenerator } from '~/lib/use-theme-generator'

export const ResetThemeButton = () => {
  const { reset } = useThemeGenerator()
  return (
    <Button variant="outline" onClick={reset}>
      <Undo2Icon />
      Reset
    </Button>
  )
}
