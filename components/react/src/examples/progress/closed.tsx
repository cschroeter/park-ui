import { forwardRef, type ReactNode } from 'react'
import { Progress as StyledProgress } from '@/components/ui'

interface ProgressProps extends StyledProgress.RootProps {
  showValueText?: boolean
  valueText?: ReactNode
  label?: ReactNode
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(function Progress(props, ref) {
  const { showValueText, valueText, label, ...rest } = props
  return (
    <StyledProgress.Root {...rest} ref={ref}>
      {label && <StyledProgress.Label>{label}</StyledProgress.Label>}
      <StyledProgress.Track>
        <StyledProgress.Range />
      </StyledProgress.Track>
      {showValueText && <StyledProgress.ValueText>{valueText}</StyledProgress.ValueText>}
    </StyledProgress.Root>
  )
})
