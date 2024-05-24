import { type Component, type JSX, createContext, splitProps, useContext } from 'solid-js'
import { Dynamic } from 'solid-js/web'

type Recipe = {
  (props: Record<string, unknown>): Record<string, CallableFunction>
  variantKeys: string[]
}
type Slot<R extends Recipe> = keyof ReturnType<R>
type ElementType<P = {}> = keyof JSX.IntrinsicElements | Component<P>

const cx = (...args: (string | undefined)[]) => args.filter(Boolean).join(' ')

export const createStyleContext = <R extends Recipe>(recipe: R) => {
  const StyleContext = createContext<Record<Slot<R>, () => string> | null>(null)

  const withRootProvider = <P extends {}>(
    Component: ElementType<P>,
  ): ((props: P) => JSX.Element) => {
    const StyledComponent = (props: P) => {
      const slotStyles = recipe(props) as Record<Slot<R>, () => string>

      return (
        <StyleContext.Provider value={slotStyles}>
          <Component {...props} />
        </StyleContext.Provider>
      )
    }
    return StyledComponent
  }

  const withProvider = <P extends { class?: string }>(
    Component: ElementType<P>,
    slot: Slot<R>,
  ): ((props: P) => JSX.Element) => {
    const StyledComponent = (props: P) => {
      const [variantProps, componentProps] = splitProps(props, [
        'class',
        ...(recipe.variantKeys as Array<keyof P>),
      ])
      const slotStyles = recipe(variantProps) as Record<Slot<R>, () => string>

      return (
        <StyleContext.Provider value={slotStyles}>
          <Dynamic
            component={Component}
            {...componentProps}
            class={cx(slotStyles?.[slot](), props.class)}
          />
        </StyleContext.Provider>
      )
    }
    return StyledComponent
  }

  const withContext = <P extends { class?: string }>(
    Component: ElementType<P>,
    slot: Slot<R>,
  ): ((props: P) => JSX.Element) => {
    const StyledComponent = (props: P) => {
      const slotStyles = useContext(StyleContext)
      return (
        <Dynamic component={Component} {...props} class={cx(slotStyles?.[slot](), props.class)} />
      )
    }
    return StyledComponent
  }

  return {
    withRootProvider,
    withProvider,
    withContext,
  }
}
