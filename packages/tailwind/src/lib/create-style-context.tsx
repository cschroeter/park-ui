'use client'
import { createContext, forwardRef, useContext, type ComponentProps, type ElementType } from 'react'
import { tv } from 'tailwind-variants'

type Recipe = ReturnType<typeof tv>

type VariantProps<R extends Recipe> = Parameters<R>[0]
type Assign<T, U> = Omit<T, keyof U> & U

export interface StyledContextProvider<T extends ElementType, R extends Recipe> {
  (props: ComponentProps<T> & VariantProps<R>): JSX.Element
  <P extends object>(props: Assign<ComponentProps<T>, P> & VariantProps<R>): JSX.Element
}

const cx = (...args: (string | undefined)[]) => args.filter(Boolean).join(' ')

export const createStyleContext = <ComponentStyles extends Recipe>(
  createStyles: (...args: any) => any,
) => {
  const StyleContext = createContext<ReturnType<typeof createStyles> | null>(null)

  const withProvider = <T extends ElementType>(Component: T, slot?: string) => {
    const Comp = forwardRef((props: ComponentProps<T> & VariantProps<ComponentStyles>, ref) => {
      const styles = createStyles(props)
      const localProps = props

      const variantClassNames = styles[slot ?? '']?.()
      return (
        <StyleContext.Provider value={styles}>
          <Component
            ref={ref}
            {...localProps}
            className={cx(variantClassNames, localProps.className)}
          />
        </StyleContext.Provider>
      )
    })
    // @ts-expect-error JSX.IntrinsicElements do not have a displayName but Function and Class components do
    Comp.displayName = Component.displayName || Component.name || 'Component'
    return Comp as unknown as StyledContextProvider<T, ComponentStyles>
  }

  const withContext = <T extends ElementType>(Component: T, slot?: string) => {
    const Comp = forwardRef((props: ComponentProps<T>, ref) => {
      const slotRecipe = useContext(StyleContext)
      const variantClassNames = slotRecipe?.[slot ?? '']()

      return (
        // @ts-expect-error
        <Component ref={ref} {...props} className={cx(variantClassNames, props.className)} />
      )
    })
    // @ts-expect-error JSX.IntrinsicElements do not have a displayName but Function and Class components do
    Comp.displayName = Component.displayName || Component.name || 'Component'

    return Comp as unknown as T
  }

  return {
    withProvider,
    withContext,
  }
}
