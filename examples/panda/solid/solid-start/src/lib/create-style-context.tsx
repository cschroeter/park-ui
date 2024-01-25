import { createContext, useContext, type ComponentProps, type ValidComponent } from 'solid-js'
import { Dynamic } from 'solid-js/web'

type GenericProps = Record<string, unknown>
type StyleRecipe = {
  (props: GenericProps): Record<string, string>
  splitVariantProps: (props: GenericProps) => any
}

type PolymorphicProps<T extends ValidComponent, P = ComponentProps<T>> = {
  [K in keyof P]: P[K]
}

export const createStyleContext = <R extends StyleRecipe>(recipe: R) => {
  const StyleContext = createContext<Record<string, string> | null>(null)

  const withProvider = <T extends ValidComponent>(Component: T, slot?: string) => {
    const StyledComponent = (props: PolymorphicProps<T> & Parameters<R>[0]) => {
      const [variantProps, componentProps] = recipe.splitVariantProps(props)
      const styleProperties = recipe(variantProps)
      return (
        <StyleContext.Provider value={styleProperties}>
          <Dynamic
            component={Component}
            class={styleProperties?.[slot ?? '']}
            {...componentProps}
          />
        </StyleContext.Provider>
      )
    }
    return StyledComponent
  }

  const withContext = <T extends ValidComponent>(Component: T, slot?: string): T => {
    if (!slot) return Component
    const StyledComponent = (props: PolymorphicProps<T>) => {
      const styles = useContext(StyleContext)
      return <Dynamic component={Component} {...props} class={styles?.[slot ?? '']} />
    }
    return StyledComponent as T
  }

  return {
    withProvider,
    withContext,
  }
}
