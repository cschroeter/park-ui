import { defineComponent, type DefineComponent } from 'vue'

const mergeProps = <T extends Record<string, any>>(baseProps: T, propsToMerge: Partial<T>): T => ({
  ...baseProps,
  ...propsToMerge,
})

type ProviderComponentProps = DefineComponent<{}, {}, any>

export const styled = <ComponentProps extends {}>(
  Component: ProviderComponentProps,
  createStyles: (...args: any) => any,
) => {
  return defineComponent({
    name: 'StyledComponent',
    props: Component.props,
    setup(props, { slots }) {
      const classNames = createStyles(props)

      const componentProps = mergeProps(props, {
        className: classNames,
      } as any) // TODO remove variant props from component props

      return () => {
        return (
          <Component {...componentProps} class={classNames}>
            {slots}
          </Component>
        )
      }
    },
  })
}
