import { ark } from '@ark-ui/solid/factory'
import { createContext, mergeProps } from '@ark-ui/solid/utils'
import { type ComponentProps, createMemo, type JSX, splitProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { type ButtonVariantProps, button } from 'styled-system/recipes'
import { Group, type GroupProps } from './group'
import { Loader } from './loader'

interface ButtonLoadingProps {
  /**
   * If `true`, the button will show a loading spinner.
   * @default false
   */
  loading?: boolean | undefined
  /**
   * The text to show while loading.
   */
  loadingText?: JSX.Element | undefined
  /**
   * The spinner to show while loading.
   */
  spinner?: JSX.Element | undefined
  /**
   * The placement of the spinner
   * @default "start"
   */
  spinnerPlacement?: 'start' | 'end' | undefined
}

type BaseButtonProps = ComponentProps<typeof BaseButton>
const BaseButton = styled(ark.button, button)

export interface ButtonProps extends BaseButtonProps, ButtonLoadingProps {}

export const Button = (props: ButtonProps) => {
  const propsContext = useButtonPropsContext()
  const buttonProps = createMemo(() => mergeProps<ButtonProps>(propsContext, props))

  const [local, rest] = splitProps(buttonProps(), [
    'loading',
    'loadingText',
    'children',
    'spinner',
    'spinnerPlacement',
    'asChild',
  ])

  return (
    <BaseButton
      type="button"
      {...rest}
      data-loading={local.loading ? '' : undefined}
      disabled={local.loading || rest.disabled}
    >
      {!props.asChild && local.loading ? (
        <Loader
          spinner={local.spinner}
          text={local.loadingText}
          spinnerPlacement={local.spinnerPlacement}
        >
          {local.children}
        </Loader>
      ) : (
        local.children
      )}
    </BaseButton>
  )
}

export interface ButtonGroupProps extends GroupProps, ButtonVariantProps {}

export const ButtonGroup = (props: ButtonGroupProps) => {
  const [variantProps, otherProps] = createMemo(() => button.splitVariantProps(props))
  return (
    <ButtonPropsProvider value={variantProps()}>
      <Group {...otherProps()} />
    </ButtonPropsProvider>
  )
}

const [ButtonPropsProvider, useButtonPropsContext] = createContext<ButtonVariantProps>({
  name: 'ButtonPropsContext',
  hookName: 'useButtonPropsContext',
  providerName: '<PropsProvider />',
  strict: false,
})
