import {
  createContext,
  createElement,
  forwardRef,
  useContext,
  type ComponentProps,
  type ElementType,
  type JSX,
} from 'react'

type Props = Record<string, unknown>
type Recipe = {
  (props?: Props): Record<string, string>
  splitVariantProps: (props: Props) => any
}
type Slot<R extends Recipe> = keyof ReturnType<R>
type SlotRecipe<R extends Recipe> = Record<Slot<R>, string>
type VariantProps<R extends Recipe> = Parameters<R>[0]
type Assign<T, U> = Omit<T, keyof U> & U

const cx = (...args: (string | undefined)[]) => args.filter(Boolean).join(' ')

export interface StyledContextProvider<T extends ElementType, R extends Recipe> {
  (props: Assign<ComponentProps<T>, VariantProps<R>>): JSX.Element
}

export const createStyleContext = <R extends Recipe>(recipe: R) => {
  const SlotRecipeContext = createContext<SlotRecipe<R> | null>(null)

  const withProvider = <T extends ElementType>(Component: T, slot?: Slot<R>) => {
    const Comp = forwardRef((props: ComponentProps<T>, ref) => {
      const [variantProps, localProps] = recipe.splitVariantProps(props)
      const slotRecipe = recipe(variantProps) as SlotRecipe<R>
      return (
        <SlotRecipeContext.Provider value={slotRecipe}>
          <Component
            ref={ref}
            {...localProps}
            className={cx(slotRecipe[slot ?? ''], localProps.className)}
          />
        </SlotRecipeContext.Provider>
      )
    })
    return Comp as unknown as StyledContextProvider<T, R>
  }

  const withContext = <T extends ElementType>(Component: T, slot?: Slot<R>) => {
    if (!slot) return Component
    const Comp = forwardRef((props: ComponentProps<T>, ref) => {
      const recipe = useContext(SlotRecipeContext)
      return createElement(Component, {
        ...props,
        className: cx(recipe?.[slot ?? ''], props.className),
        ref,
      })
    })
    return Comp as unknown as T
  }

  return {
    withProvider,
    withContext,
  }
}
