import type { Component as ComponentType } from 'solid-js'
import { createContext, useContext } from 'solid-js'

type AnyProps = Record<string, unknown>
type AnyRecipe = {
  (props?: AnyProps): Record<string, string>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  splitVariantProps: (props: AnyProps) => any
}

export const createStyleContext = <R extends AnyRecipe>(recipe: R) => {
  const StyleContext = createContext<Record<string, string> | null>(null)

  const withProvider = <T extends object>(Component: ComponentType<T>, part?: string) => {
    const Comp = (props: T & Parameters<R>[0]) => {
      const [variantProps, rest] = recipe.splitVariantProps(props)
      const styles = recipe(variantProps)
      return (
        <StyleContext.Provider value={styles}>
          <Component class={styles?.[part ?? '']} {...rest} />
        </StyleContext.Provider>
      )
    }

    return Comp
  }

  const withContext = <T extends object>(Component: ComponentType<T>, part?: string) => {
    if (!part) return Component

    const Comp = (props: T) => {
      const styles = useContext(StyleContext)
      return <Component class={styles?.[part ?? '']} {...props} />
    }

    return Comp
  }

  return {
    withProvider,
    withContext,
  }
}
