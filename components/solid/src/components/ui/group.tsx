import { ark } from '@ark-ui/solid/factory'
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
  skip?: ((child: JSX.Element) => boolean) | undefined
  children?: JSX.Element
}

export const Group = (props: GroupProps) => {
  const [local, rest] = splitProps(props, ['align', 'justify', 'children', 'wrap', 'skip'])

  const resolved = resolveChildren(() => local.children)

  const enhancedChildren = createMemo(() => {
    const childArray = resolved.toArray()

    // If only one child, no need for group enhancements
    if (childArray.length === 1) {
      return childArray
    }

    // Filter out skipped children to get valid children for indexing
    const validChildren = childArray.filter((child) => !local.skip?.(child))

    // If only one valid child after filtering, return original array
    if (validChildren.length === 1) {
      return childArray
    }

    // Enhance each child with group data attributes by wrapping in a span
    return childArray.map((child) => {
      // Skip enhancement for children that should be skipped
      if (local.skip?.(child)) {
        return child
      }

      const indexInValidChildren = validChildren.indexOf(child)

      // Wrap child in a span with data attributes
      return (
        <span
          data-group-item=""
          data-first={dataAttr(indexInValidChildren === 0)}
          data-last={dataAttr(indexInValidChildren === validChildren.length - 1)}
          data-between={dataAttr(
            indexInValidChildren > 0 && indexInValidChildren < validChildren.length - 1,
          )}
          style={{
            '--group-count': validChildren.length,
            '--group-index': indexInValidChildren,
          }}
        >
          {child}
        </span>
      )
    })
  })

  return (
    <StyledGroup
      alignItems={local.align ?? 'center'}
      justifyContent={local.justify ?? 'flex-start'}
      flexWrap={local.wrap}
      {...rest}
    >
      {enhancedChildren()}
    </StyledGroup>
  )
}

type Booleanish = boolean | 'true' | 'false'

const dataAttr = (condition: boolean | undefined): Booleanish =>
  (condition ? '' : undefined) as Booleanish
