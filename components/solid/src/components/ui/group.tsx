import { ark } from '@ark-ui/solid'
import {
  type ComponentProps,
  createMemo,
  type JSX,
  children as resolveChildren,
  splitProps,
} from 'solid-js'
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
  skip?: (child: any) => boolean | undefined
}

export const Group = (props: GroupProps) => {
  const [local, rest] = splitProps(props, ['align', 'justify', 'children', 'wrap', 'skip'])

  const align = () => local.align ?? 'center'
  const justify = () => local.justify ?? 'flex-start'

  const enhancedChildren = createMemo(() => {
    const resolved = resolveChildren(() => local.children)
    const childArray = Array.isArray(resolved()) ? resolved() : [resolved()]

    // Filter out null/undefined/false
    const validChildArray = childArray.filter(Boolean)

    // If only one child, no need for group enhancements
    if (validChildArray.length === 1) {
      return validChildArray
    }

    // Filter out skipped children to get valid children for indexing
    const validChildren = validChildArray.filter((child) => !local.skip?.(child))

    // If only one valid child after filtering, return original array
    if (validChildren.length === 1) {
      return validChildArray
    }

    // Enhance each child with group data attributes
    return validChildArray.map((child: any) => {
      // Skip enhancement for children that should be skipped
      if (local.skip?.(child)) {
        return child
      }

      const indexInValidChildren = validChildren.indexOf(child)

      // Clone the element with enhanced props
      if (typeof child === 'object' && child !== null) {
        return {
          ...child,
          props: {
            ...child.props,
            'data-group-item': '',
            'data-first': dataAttr(indexInValidChildren === 0),
            'data-last': dataAttr(indexInValidChildren === validChildren.length - 1),
            'data-between': dataAttr(
              indexInValidChildren > 0 && indexInValidChildren < validChildren.length - 1,
            ),
            style: {
              '--group-count': validChildren.length,
              '--group-index': indexInValidChildren,
              ...(child.props?.style ?? {}),
            },
          },
        }
      }

      return child
    })
  })

  return (
    <StyledGroup alignItems={align()} justifyContent={justify()} flexWrap={local.wrap} {...rest}>
      {enhancedChildren()}
    </StyledGroup>
  )
}

type Booleanish = boolean | 'true' | 'false'

const dataAttr = (condition: boolean | undefined): Booleanish =>
  (condition ? '' : undefined) as Booleanish
