import {
  createContext,
  splitProps,
  useContext,
  type ComponentProps,
  type ValidComponent,
} from 'solid-js'
import { Dynamic } from 'solid-js/web'

type Recipe = {
  (props: Record<string, unknown>): Record<string, CallableFunction>
  variantKeys: string[]
}

type PolymorphicProps<T extends ValidComponent, P = ComponentProps<T>> = {
  [K in keyof P]: P[K]
}

type Slot<R extends Recipe> = keyof ReturnType<R>
type SlotRecipe<R extends Recipe> = Record<Slot<R>, CallableFunction>
type VariantProps<R extends Recipe> = Parameters<R>[0]

const cx = (...args: (string | undefined)[]) => args.filter(Boolean).join(' ')

export const createStyleContext = <R extends Recipe>(recipe: R) => {
  const StyleContext = createContext<SlotRecipe<R> | null>(null)

  const withProvider = <T extends ValidComponent>(Component: T, slot?: string) => {
    const StyledComponent = (props: PolymorphicProps<T> & VariantProps<R>) => {
      const [variantProps, componentProps] = splitProps(props, [
        'class',
        ...recipe.variantKeys,
      ]) as unknown as [VariantProps<R>, PolymorphicProps<T>]
      const styles = recipe(variantProps) as SlotRecipe<R>

      return (
        <StyleContext.Provider value={styles}>
          <Dynamic
            component={Component}
            {...componentProps}
            class={cx(styles?.[slot ?? '']?.(), props.class)}
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
      return (
        <Dynamic component={Component} {...props} class={cx(styles?.[slot]?.(), props.class)} />
      )
    }
    return StyledComponent as T
  }

  return {
    withProvider,
    withContext,
  }
}
