import {
  createComponent,
  createContext,
  mergeProps,
  useContext,
  type ComponentProps,
  type ValidComponent,
} from 'solid-js'
import { Dynamic } from 'solid-js/web'

type AnyProps = Record<string, unknown>
type AnyRecipe = {
  (props?: AnyProps): Record<string, string>
  splitVariantProps: (props: any) => any
}

export const createStyleContext = <R extends AnyRecipe>(recipe: R) => {
  const StyleContext = createContext<Record<string, string> | null>(null)

  const withProvider = <T extends ValidComponent, P = ComponentProps<T>>(
    Component: T,
    slot?: string,
  ) => {
    const Comp = (props: P & Parameters<R>[0]) => {
      const [variantProps, componentProps] = recipe.splitVariantProps(props)
      const styles = recipe(variantProps)
      return (
        <StyleContext.Provider value={styles}>
          <Dynamic component={Component} class={styles?.[slot ?? '']} {...componentProps} />
        </StyleContext.Provider>
      )
    }
    return Comp
  }

  const withContext = <T extends ValidComponent, P = ComponentProps<T>>(
    Component: T,
    slot?: string,
  ) => {
    const Comp = (props: P) => {
      const styles = useContext(StyleContext)
      return createComponent(
        Dynamic,
        mergeProps(props, { component: Component, class: styles?.[slot ?? ''] }),
      )
    }
    return Comp as T
  }

  return {
    withProvider,
    withContext,
  }
}
