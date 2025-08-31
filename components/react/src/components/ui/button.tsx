'use client'

import { ark } from '@ark-ui/react/factory'
import { type ComponentProps, forwardRef } from 'react'
import { styled } from 'styled-system/jsx'
import { button } from 'styled-system/recipes'
import { Loader } from './loader'

export interface ButtonLoadingProps {
  /**
   * If `true`, the button will show a loading spinner.
   * @default false
   */
  loading?: boolean | undefined
  /**
   * The text to show while loading.
   */
  loadingText?: React.ReactNode | undefined
  /**
   * The spinner to show while loading.
   */
  spinner?: React.ReactNode | undefined
  /**
   * The placement of the spinner
   * @default "start"
   */
  spinnerPlacement?: 'start' | 'end' | undefined
}

type BaseButtonProps = ComponentProps<typeof BaseButton>
const BaseButton = styled(ark.button, button)

export interface ButtonProps extends BaseButtonProps, ButtonLoadingProps {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const { loading, loadingText, children, spinner, spinnerPlacement, ...rest } = props
  return (
    <BaseButton
      type="button"
      ref={ref}
      {...rest}
      data-loading={loading ? '' : undefined}
      disabled={loading || rest.disabled}
    >
      {!props.asChild && loading ? (
        <Loader spinner={spinner} text={loadingText} spinnerPlacement={spinnerPlacement}>
          {children}
        </Loader>
      ) : (
        children
      )}
    </BaseButton>
  )
})
