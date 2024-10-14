import type { JSX } from 'solid-js'
import { Show, splitProps } from 'solid-js'
import { Center, styled } from 'styled-system/jsx'
import { Spinner } from './spinner'
import { Button as StyledButton, type ButtonProps as StyledButtonProps } from './styled/button'

interface ButtonLoadingProps {
  loading?: boolean
  loadingText?: JSX.Element
}

export interface ButtonProps extends StyledButtonProps, ButtonLoadingProps {}

export const Button = (props: ButtonProps) => {
  const [localProps, rest] = splitProps(props, ['loading', 'disabled', 'loadingText', 'children'])
  const trulyDisabled = () => localProps.loading || localProps.disabled

  return (
    <StyledButton disabled={trulyDisabled()} {...rest}>
      <Show
        when={localProps.loading && !localProps.loadingText}
        fallback={localProps.loadingText || localProps.children}
      >
        <>
          <ButtonSpinner />
          <styled.span opacity={0}>{localProps.children}</styled.span>
        </>
      </Show>
    </StyledButton>
  )
}

const ButtonSpinner = () => (
  <Center inline position="absolute" transform="translate(-50%, -50%)" top="50%" insetStart="50%">
    <Spinner
      width="1.1em"
      height="1.1em"
      borderWidth="1.5px"
      borderTopColor="fg.disabled"
      borderRightColor="fg.disabled"
    />
  </Center>
)
