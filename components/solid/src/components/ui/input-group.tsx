import { type JSX, children as resolveChildren, Show, splitProps } from 'solid-js'
import { css, cx } from 'styled-system/css'
import type { BoxProps } from 'styled-system/jsx'
import { Group } from './group'
import { InputAddon, type InputAddonProps } from './input-addon'
import { InputElement, type InputElementProps } from './input-element'

export interface InputGroupProps extends BoxProps {
  /**
   * The props to pass to the start element
   */
  startElementProps?: InputElementProps | undefined
  /**
   * The props to pass to the end element
   */
  endElementProps?: InputElementProps | undefined
  /**
   * The start element to render the inner left of the group
   */
  startElement?: JSX.Element | undefined
  /**
   * The end element to render the inner right of the group
   */
  endElement?: JSX.Element | undefined
  /**
   * The start addon to render the left of the group
   */
  startAddon?: JSX.Element | undefined
  /**
   * The props to pass to the start addon
   */
  startAddonProps?: InputAddonProps | undefined
  /**
   * The end addon to render the right of the group
   */
  endAddon?: JSX.Element | undefined
  /**
   * The props to pass to the end addon
   */
  endAddonProps?: InputAddonProps | undefined
  /**
   * The children to render inside the group
   */
  children: JSX.Element
  /**
   * The offset to apply to the start element
   */
  startOffset?: InputElementProps['paddingStart'] | undefined
  /**
   * The offset to apply to the end element
   */
  endOffset?: InputElementProps['paddingEnd'] | undefined
}

export const InputGroup = (props: InputGroupProps) => {
  const [local, rest] = splitProps(props, [
    'startElement',
    'startElementProps',
    'endElement',
    'endElementProps',
    'startAddon',
    'startAddonProps',
    'endAddon',
    'endAddonProps',
    'children',
    'startOffset',
    'endOffset',
  ])

  const startOffset = () => local.startOffset ?? '0px'
  const endOffset = () => local.endOffset ?? '0px'
  const attached = () => Boolean(local.startAddon || local.endAddon)

  const child = resolveChildren(() => local.children)

  const inputStyles = () =>
    css({
      ...(local.startElement && {
        ps: `calc(var(--input-height) - ${startOffset()})`,
      }),
      ...(local.endElement && { pe: `calc(var(--input-height) - ${endOffset()})` }),
    })

  return (
    <Group
      width="full"
      attached={attached()}
      skip={(el) => el.type === InputElement}
      _icon={{
        boxSize: '5',
      }}
      {...rest}
    >
      <Show when={local.startAddon}>
        <InputAddon {...local.startAddonProps}>{local.startAddon}</InputAddon>
      </Show>
      {local.startElement && (
        <InputElement pointerEvents="none" {...local.startElementProps}>
          {local.startElement}
        </InputElement>
      )}
      <div class={cx(child()?.props?.class, inputStyles())}>{child()}</div>
      {local.endElement && (
        <InputElement placement="end" {...local.endElementProps}>
          {local.endElement}
        </InputElement>
      )}
      <Show when={local.endAddon}>
        <InputAddon {...local.endAddonProps}>{local.endAddon}</InputAddon>
      </Show>
    </Group>
  )
}
