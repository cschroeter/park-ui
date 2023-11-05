import type { Component as ComponentType } from 'solid-js'
import { createContext, useContext } from 'solid-js'
import { tv } from 'tailwind-variants'

type Recipe = ReturnType<typeof tv>

const cx = (...args: (string | undefined)[]) => args.filter(Boolean).join(' ')

export const createStyleContext = <ComponentStyles extends Recipe>(
  createStyles: (...args: any) => any,
) => {
  const StyleContext = createContext<ReturnType<typeof createStyles> | null>(null)

  const withProvider = <T extends object>(Component: ComponentType<T>, part?: string) => {
    console.log('with provider', part)
    const Comp = (props: T & Parameters<ComponentStyles>[0]) => {
      const styles = createStyles(props)
      console.log('styles', styles)
      const localProps = props

      const variantClassNames = styles[part ?? '']?.()
      return (
        <StyleContext.Provider value={styles}>
          <Component class={cx(variantClassNames, localProps.className)} {...localProps} />
        </StyleContext.Provider>
      )
    }
    return Comp
  }

  const withContext = <T extends object>(Component: ComponentType<T>, part?: string) => {
    console.log('with context', part)
    if (!part) return Component
    type PropsWithClass<T> = T & { class?: string }

    const Comp = (props: PropsWithClass<T>) => {
      const slotRecipe = useContext(StyleContext)
      const variantClassNames = slotRecipe?.[part ?? '']?.()

      console.log(slotRecipe)

      return <Component class={cx(variantClassNames, props.class)} {...props} />
    }
    return Comp
  }

  return {
    withProvider,
    withContext,
  }
}
