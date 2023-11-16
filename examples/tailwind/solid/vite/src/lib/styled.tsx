import { JSX, createSignal } from 'solid-js'

type ProviderComponentProps<ComponentProps extends {}> = (prop: ComponentProps) => JSX.Element

export const styled = <ComponentProps extends {}>(
  Component: ProviderComponentProps<ComponentProps>,
  createStyles: (...args: any) => any,
) => {
  return (props: ComponentProps) => {
    const classNames = createStyles(props)
    const [ref] = createSignal(null)

    const componentProps = {
      ...props,
      className: classNames,
      ref,
    } as any

    return <>{Component(componentProps)}</>
  }
}
