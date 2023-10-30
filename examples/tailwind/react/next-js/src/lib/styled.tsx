import { forwardRef, type ExoticComponent } from 'react'

const mergeProps = <T extends Record<string, any>>(baseProps: T, propsToMerge: Partial<T>): T => ({
  ...baseProps,
  ...propsToMerge,
})

type ProviderComponentProps<ComponentProps extends {}> =
  | ExoticComponent<ComponentProps>
  | ((prop: ComponentProps) => JSX.Element)

export const styled = <ComponentProps extends {}>(
  Component: ProviderComponentProps<ComponentProps>,
  createStyles: (...args: any) => any,
) => {
  const Comp = forwardRef<typeof Component, ComponentProps>((props, ref) => {
    const classNames = createStyles(props)

    const componentProps = mergeProps(props, {
      className: classNames,
    } as any) // TODO remove variant props from component props

    return <Component {...componentProps} ref={ref} />
  })
  // @ts-expect-error - it exists
  Comp.displayName = Component.displayName || Component.name
  return Comp
}
