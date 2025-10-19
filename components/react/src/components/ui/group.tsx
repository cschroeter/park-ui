import { ark } from '@ark-ui/react'
import {
  Children,
  type ComponentProps,
  type CSSProperties,
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
  type ReactElement,
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
  skip?: (child: ReactElement) => boolean | undefined
}

export const Group = memo(
  forwardRef<HTMLDivElement, GroupProps>(function Group(props, ref) {
    const { align = 'center', justify = 'flex-start', children, wrap, skip, ...rest } = props

    const enhancedChildren = useMemo(() => {
      // Convert children to array and filter out invalid elements
      const childArray = Children.toArray(children).filter(isValidElement)

      // If only one child, no need for group enhancements
      if (childArray.length === 1) {
        return childArray
      }

      // Filter out skipped children to get valid children for indexing
      const validChildren = childArray.filter((child) => !skip?.(child))

      // If only one valid child after filtering, return original array
      if (validChildren.length === 1) {
        return childArray
      }

      // Enhance each child with group data attributes
      return childArray.map((child) => {
        // Skip enhancement for children that should be skipped
        if (skip?.(child)) {
          return child
        }

        const childProps = child.props as Record<string, unknown> & {
          style?: CSSProperties
        }

        const indexInValidChildren = validChildren.indexOf(child)

        const enhancedProps: Record<string, unknown> = {
          ...childProps,
          'data-group-item': '',
          'data-first': dataAttr(indexInValidChildren === 0),
          'data-last': dataAttr(indexInValidChildren === validChildren.length - 1),
          'data-between': dataAttr(
            indexInValidChildren > 0 && indexInValidChildren < validChildren.length - 1,
          ),
          style: {
            '--group-count': validChildren.length,
            '--group-index': indexInValidChildren,
            ...(childProps?.style ?? {}),
          } as CSSProperties & {
            '--group-count': number
            '--group-index': number
          },
        }

        return cloneElement(child, enhancedProps)
      })
    }, [children, skip])

    return (
      <StyledGroup ref={ref} alignItems={align} justifyContent={justify} flexWrap={wrap} {...rest}>
        {enhancedChildren}
      </StyledGroup>
    )
  }),
)

type Booleanish = boolean | 'true' | 'false'

const dataAttr = (condition: boolean | undefined): Booleanish =>
  (condition ? '' : undefined) as Booleanish
