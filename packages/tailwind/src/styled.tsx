import { mergeProps } from '@zag-js/react'
import { createContext, forwardRef, useContext, type ExoticComponent } from 'react'

type ProviderComponentProps<ComponentProps extends {}> =
  | ExoticComponent<ComponentProps>
  | ((prop: ComponentProps) => JSX.Element)

type StylesObject = Record<string, () => string>

const getClassName = <T extends string | StylesObject>(styles: T, partName: string | undefined) => {
  if (typeof styles === 'string') {
    return styles
  }
  return styles?.[partName]?.() ?? ''
}

export const createStyled = (createStyles: (...args: any) => any) => {
  const StyleContext = createContext<ReturnType<typeof createStyles> | null>(null)

  const styledRoot = <ComponentProps extends {}>(
    Component: ProviderComponentProps<ComponentProps>,
    partName?: string,
  ) => {
    const Comp = forwardRef<typeof Component, ComponentProps>((props, ref) => {
      const styles = createStyles(props)

      const componentProps = mergeProps(props, {
        className: getClassName(styles, partName),
      } as any)

      return (
        <StyleContext.Provider value={styles}>
          <Component {...componentProps} ref={ref} />
        </StyleContext.Provider>
      )
    })
    // @ts-expect-error - it exists
    Comp.displayName = Component.displayName || Component.name
    return Comp
  }

  // TODO: type part name
  const styled = <ComponentProps extends {}>(
    Component: ExoticComponent<ComponentProps>,
    partName?: string,
  ) => {
    console.log('CREATED styled', partName)
    const Comp = forwardRef<typeof Component, ComponentProps>((props, ref) => {
      console.log('render styled', partName)
      const styles = useContext(StyleContext)
      console.log(partName, styles['root']?.())

      const componentProps = mergeProps(props, {
        className: getClassName(styles, partName),
      } as any)

      return <Component {...componentProps} ref={ref} />
    })

    // @ts-expect-error - it exists
    Comp.displayName = Component.displayName || Component.name
    return Comp
  }

  return { styledRoot, styled }
}
