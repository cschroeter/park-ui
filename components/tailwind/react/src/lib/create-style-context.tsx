import {
  type ElementType,
  type ForwardRefExoticComponent,
  type PropsWithoutRef,
  type RefAttributes,
  createContext,
  forwardRef,
  useContext,
} from 'react'

type Recipe = (props: Record<string, unknown>) => Record<string, () => string>
type Slot<R extends Recipe> = keyof ReturnType<R>

const cx = (...args: (string | undefined)[]) => args.filter(Boolean).join(' ')

export const createStyleContext = <R extends Recipe>(recipe: R) => {
  const StyleContext = createContext<Record<Slot<R>, () => string> | null>(null)

  const withRootProvider = <P extends {}>(Component: ElementType) => {
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

  const withProvider = <T, P extends { className?: string }>(
    Component: ElementType,
    slot: Slot<R>,
  ) => {
    return forwardRef<T, P>((props, ref) => {
      const slotStyles = recipe(props) as Record<Slot<R>, () => string>
      return (
        <StyleContext.Provider value={slotStyles}>
          <Component {...props} ref={ref} className={cx(slotStyles?.[slot](), props.className)} />
        </StyleContext.Provider>
      )
    })
  }

  const withContext = <T, P extends { className?: string }>(
    Component: ElementType,
    slot: Slot<R>,
  ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> => {
    return forwardRef<T, P>((props, ref) => {
      const slotStyles = useContext(StyleContext)
      return (
        <Component {...props} ref={ref} className={cx(slotStyles?.[slot](), props.className)} />
      )
    })
  }

  return {
    withRootProvider,
    withProvider,
    withContext,
  }
}
