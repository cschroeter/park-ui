'use client'
import * as Ark from '@ark-ui/react/accordion'
import { createContext, useContext, type ComponentType } from 'react'
import { styled } from 'styled-system/jsx'
import { accordion, type AccordionVariantProps } from 'styled-system/recipes'

export const createStyleContext = (createStyles: (...args: any) => any) => {
  const StyleContext = createContext<ReturnType<typeof createStyles> | null>(null)

  const withProvider = <T extends JSX.IntrinsicAttributes>(
    Component: ComponentType<T>,
    part?: string,
  ) => {
    const Comp = (props: T & AccordionVariantProps) => {
      const styles = createStyles()
      return (
        <StyleContext.Provider value={styles}>
          <Component className={styles[part ?? '']} {...props} />
        </StyleContext.Provider>
      )
    }
    return Comp
  }

  const withContext = <T extends JSX.IntrinsicAttributes>(
    Component: ComponentType<T>,
    part?: string,
  ) => {
    const Comp = (props: T) => {
      const styles = useContext(StyleContext)
      return <Component className={styles[part ?? '']} {...props} />
    }
    return Comp
  }

  return {
    withProvider,
    withContext,
  }
}

const { withProvider, withContext } = createStyleContext(accordion)

export const Accordion = withProvider(styled(Ark.Accordion), 'root')
export const AccordionItem = withContext(styled(Ark.AccordionItem), 'item')
export const AccordionContent = withContext(styled(Ark.AccordionContent), 'content')
export const AccordionTrigger = withContext(styled(Ark.AccordionTrigger), 'trigger')

// const withProvider = <V, T = React.ElementType>(
//   Component: React.ElementType,
//   part?: string,
// ): T => {
//   const Comp = forwardRef<unknown, V>((props, ref) => {
//     const styles = createStyles()

//     return (
//       <StyleContext.Provider value={styles}>
//         <Component {...props} ref={ref} />
//       </StyleContext.Provider>
//     )
//   })
//   // @ts-expect-error
//   Comp.displayName = Component.displayName || Component.name
//   // @ts-expect-error
//   return Comp
// }

// const withContext = <T extends React.ElementType>(Component: T, part: string): T => {
//   const Comp = forwardRef<unknown, any>((props, ref) => {
//     const styles = useContext(StyleContext)
//     return <Component {...props} ref={ref} />
//   })
//   // @ts-expect-error
//   Comp.displayName = Component.displayName || Component.name
//   // @ts-expect-error
//   return Comp
// }
