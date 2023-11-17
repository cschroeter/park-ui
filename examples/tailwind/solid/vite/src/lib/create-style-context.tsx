import {
  createComponent,
  createContext,
  mergeProps,
  splitProps,
  useContext,
  type ComponentProps,
  type ValidComponent,
} from 'solid-js'
import { Dynamic, DynamicProps } from 'solid-js/web'

type Recipe = {
  (props: Record<string, unknown>): Record<string, CallableFunction>
  variantKeys: string[]
}

type Slot<R extends Recipe> = keyof ReturnType<R>
type SlotRecipe<R extends Recipe> = Record<Slot<R>, CallableFunction>
type VariantProps<R extends Recipe> = Parameters<R>[0]

const cx = (...args: (string | undefined)[]) => args.filter(Boolean).join(' ')

export const createStyleContext = <R extends Recipe>(recipe: R) => {
  const StyleContext = createContext<SlotRecipe<R> | null>(null)

  const withProvider = <T extends ValidComponent, P = ComponentProps<T>>(
    Component: T,
    slot?: Slot<R>,
  ) => {
    const Comp = (props: Partial<DynamicProps<T, P>> & VariantProps<R>) => {
      const [variantProps, dynamicProps] = splitProps(props, [
        'class',
        'className',
        ...recipe.variantKeys,
      ])
      const styles = recipe(variantProps) as SlotRecipe<R>

      return (
        <StyleContext.Provider value={styles}>
          {createComponent(
            Dynamic,
            mergeProps(dynamicProps, {
              component: Component,
              class: styles?.[slot ?? '']?.(),
            }),
          )}
        </StyleContext.Provider>
      )
    }
    return Comp
  }

  const withContext = <T extends ValidComponent, P = ComponentProps<T>>(
    Component: T,
    slot?: Slot<R>,
  ): T => {
    if (!slot) return Component
    const Comp = (props: Partial<DynamicProps<T, P>> & { class?: string }) => {
      const styles = useContext(StyleContext)

      return createComponent(
        Dynamic,
        mergeProps(props, {
          component: Component,
          class: cx(styles?.[slot]?.(), props.class),
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
