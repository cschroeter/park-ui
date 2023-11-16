import {
  createComponent,
  createContext,
  mergeProps,
  splitProps,
  useContext,
  type ComponentProps,
  type ValidComponent,
} from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { tv } from 'tailwind-variants'

type Recipe = ReturnType<typeof tv>

const cx = (...args: (string | undefined)[]) => args.filter(Boolean).join(' ')

export const createStyleContext = <R extends Recipe>(createStyles: (...args: any) => any) => {
  const StyleContext = createContext<Record<string, string> | null>(null)

  const withProvider = <T extends ValidComponent, P = ComponentProps<T>>(
    Component: T,
    slot?: string,
  ) => {
    const Comp = (props: P) => {
      const [styleProps, rest] = splitProps(props, ['class'])

      return (
        <StyleContext.Provider value={createStyles(styleProps)}>
          <Dynamic component={Component} {...rest} />
        </StyleContext.Provider>
      )
    }

    return Comp as T

    // return createComponent(
    //   Dynamic,
    //   mergeProps(props, {
    //     component: Component,
    //   }),
    // )

    // return Comp
  }

  // const withProvider = <T extends ValidComponent, P = ComponentProps<T>>(
  //   Component: T,
  //   slot?: string,
  // ) => {
  //   const Comp = (props: P & Parameters<R>[0]) => {
  //     const styles = createStyles(props)
  //     return (
  //       <StyleContext.Provider value={styles}>
  //         <Dynamic component={Component} {...props} />
  //       </StyleContext.Provider>
  //     )
  //   }
  //   return Comp as T
  // }

  // const withProvider = <T extends object>(Component: ComponentType<T>, part?: string) => {
  //   return Component
  //   const Comp = (props: T & Parameters<R>[0]) => {
  //     const styles = createStyles(props)
  //     return (
  //       <StyleContext.Provider value={styles}>
  //         <Dynamic
  //           component={Component}
  //           class={cx(styles[part ?? '']?.(), props.class)}
  //           {...props}
  //         />
  //         {/* <Component class={cx(styles[part ?? '']?.(), props.class)} {...props} /> */}
  //       </StyleContext.Provider>
  //     )
  //   }
  //   return Comp
  // }

  const withContext = <T extends ValidComponent, P = ComponentProps<T>>(
    Component: T,
    part?: string,
  ): T => {
    if (!part) return Component
    const Comp = (props: P) => {
      const styles = useContext(StyleContext)

      return createComponent(
        Dynamic,
        mergeProps(props, {
          component: Component,
          // @ts-expect-error
          class: cx(styles?.[part ?? '']?.(), props.class),
        }),
      )
    }
    return Comp as T
  }

  return {
    withProvider,
    withContext,
  }
}
