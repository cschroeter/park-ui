import { createContext, forwardRef, useContext, type ComponentProps, type ElementType } from 'react'

type Props = Record<string, unknown>
type Recipe = {
  (props?: Props): Record<string, string>
  splitVariantProps: (props: Props) => any
}
type Slot<R extends Recipe> = keyof ReturnType<R>
type SlotRecipe<R extends Recipe> = Record<Slot<R>, string>
type VariantProps<R extends Recipe> = Parameters<R>[0]

const cx = (...args: (string | undefined)[]) => args.filter(Boolean).join(' ')

export const createStyleContext = <R extends Recipe>(recipe: R) => {
  const StyleContext = createContext<SlotRecipe<R> | null>(null)

  const withProvider = <C extends ElementType>(Component: C, slot?: Slot<R>): C => {
    const Comp = forwardRef((props: ComponentProps<C> & VariantProps<R>, ref) => {
      const [variantProps, localProps] = recipe.splitVariantProps(props)
      const slotRecipe = recipe(variantProps) as SlotRecipe<R>
      return (
        <StyleContext.Provider value={slotRecipe}>
          <Component
            ref={ref}
            {...(props as any)}
            className={cx(slotRecipe[slot ?? ''], localProps.className)}
          />
        </StyleContext.Provider>
      )
    })
    // @ts-expect-error JSX.IntrinsicElements do not have a displayName but Function and Class components do
    Comp.displayName = Component.displayName || Component.name || 'Component'
    return Comp as unknown as C
  }

  const withContext = <C extends ElementType>(Component: C, slot?: Slot<R>): C => {
    const Comp = forwardRef((props: ComponentProps<C>, ref) => {
      const recipe = useContext(StyleContext)
      return (
        <Component
          ref={ref}
          {...(props as any)}
          className={cx(recipe?.[slot ?? ''], props.className)}
        />
      )
    })

    // @ts-expect-error JSX.IntrinsicElements do not have a displayName but Function and Class components do
    Comp.displayName = Component.displayName || Component.name || 'Component'
    return Comp as unknown as C
  }

  return {
    withProvider,
    withContext,
  }
}
