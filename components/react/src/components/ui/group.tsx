import { ark } from '@ark-ui/react'
import {
  Children,
  type ComponentProps,
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
  useMemo,
} from 'react'
import { styled } from 'styled-system/jsx'
import { group } from 'styled-system/recipes'

type StyledGroupProps = ComponentProps<typeof StyledGroup>
const StyledGroup = styled(ark.div, group)

export interface GroupProps extends StyledGroupProps {
  /**
   * The `alignItems` style property
   */
  align?: StyledGroupProps['alignItems'] | undefined
  /**
   * The `justifyContent` style property
   */
  justify?: StyledGroupProps['justifyContent'] | undefined
  /**
   * The `flexWrap` style property
   */
  wrap?: StyledGroupProps['flexWrap'] | undefined
  /**
   * A function that determines if a child should be skipped
   */
  skip?: (child: React.ReactElement) => boolean | undefined
}

export const Group = memo(
  forwardRef<HTMLDivElement, GroupProps>(function Group(props, ref) {
    const { align = 'center', justify = 'flex-start', children, wrap, skip, ...rest } = props

    const _children = useMemo(() => {
      const childArray = Children.toArray(children).filter(isValidElement)
      if (childArray.length === 1) return childArray

      const validChildArray = childArray.filter((child) => !skip?.(child))
      const validChildCount = validChildArray.length
      if (validChildArray.length === 1) return childArray

      return childArray.map((child) => {
        const childProps = child.props as any
        if (skip?.(child)) return child
        const index = validChildArray.indexOf(child)
        return cloneElement(child, {
          ...childProps,
          'data-group-item': '',
          'data-first': dataAttr(index === 0),
          'data-last': dataAttr(index === validChildCount - 1),
          'data-between': dataAttr(index > 0 && index < validChildCount - 1),
          style: {
            '--group-count': validChildCount,
            '--group-index': index,
            ...(childProps?.style ?? {}),
          },
        } as any)
      })
    }, [children, skip])

    return (
      <StyledGroup ref={ref} alignItems={align} justifyContent={justify} flexWrap={wrap} {...rest}>
        {_children}
      </StyledGroup>
    )
  }),
)

type Booleanish = boolean | 'true' | 'false'

export const dataAttr = (condition: boolean | undefined) =>
  (condition ? '' : undefined) as Booleanish
