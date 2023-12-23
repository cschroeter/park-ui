import { omitThemingProps, useMultiStyleConfig, type SystemStyleObject } from '@chakra-ui/system'
import {
  createContext,
  createElement,
  forwardRef,
  useContext,
  type ComponentProps,
  type ElementType,
  type JSX,
} from 'react'

export interface ComponentVariants<T extends ElementType> {
  (props: ComponentProps<T>): JSX.Element
}

export const createStyleContext = (themeKey: string) => {
  const StyleContext = createContext<Record<string, SystemStyleObject> | null>(null)

  const withProvider = <T extends ElementType>(
    Component: T,
    slot?: string,
  ): ComponentVariants<T> => {
    const StyledComponent = forwardRef((props: ComponentProps<T>, ref) => {
      const styles = useMultiStyleConfig(themeKey, props)
      const ownProps = omitThemingProps(props)

      return (
        <StyleContext.Provider value={styles}>
          {/* @ts-expect-error  fix later*/}
          <Component ref={ref} {...ownProps} __css={styles?.[slot ?? '']} />
        </StyleContext.Provider>
      )
    })
    return StyledComponent as unknown as ComponentVariants<T>
  }

  const withContext = <T extends ElementType>(Component: T, slot: string): T => {
    const StyledComponent = forwardRef((props: ComponentProps<T>, ref) => {
      const styles = useContext(StyleContext)
      return createElement(Component, {
        ...props,
        __css: styles?.[slot],
        ref,
      })
    })
    return StyledComponent as unknown as T
  }

  return {
    withProvider,
    withContext,
  }
}
