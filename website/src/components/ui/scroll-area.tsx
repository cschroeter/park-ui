import { forwardRef } from 'react'
import { ScrollArea as StyledScrollArea } from '@/components/ui'

export interface ScrollAreaProps extends StyledScrollArea.RootProps {
  /**
   * @default 'both'
   */
  scrollbars?: 'vertical' | 'horizontal' | 'both'
  contentProps?: StyledScrollArea.ContentProps
}

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  function ScrollArea(props, ref) {
    const { children, scrollbars = 'both', contentProps, ...rest } = props

    const showVertical = scrollbars === 'vertical' || scrollbars === 'both'
    const showHorizontal = scrollbars === 'horizontal' || scrollbars === 'both'

    return (
      <StyledScrollArea.Root {...rest}>
        <StyledScrollArea.Viewport ref={ref}>
          <StyledScrollArea.Content {...contentProps}>{children}</StyledScrollArea.Content>
        </StyledScrollArea.Viewport>
        {showVertical && <StyledScrollArea.Scrollbar orientation="vertical" />}
        {showHorizontal && <StyledScrollArea.Scrollbar orientation="horizontal" />}
        {showVertical && showHorizontal && <StyledScrollArea.Corner />}
      </StyledScrollArea.Root>
    )
  },
)
