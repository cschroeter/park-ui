'use client'
import { createContext, forwardRef, useContext, type ComponentType } from 'react'
import { styled } from 'styled-system/jsx'

type AnyRecipe = (args?: Record<string, unknown>) => Record<string, string>

export const createStyleContext = <R extends AnyRecipe>(createStyles: R) => {
  const StyleContext = createContext<Record<string, string> | null>(null)

  const withProvider = <T extends JSX.IntrinsicAttributes>(
    Component: ComponentType<T>,
    part?: string,
  ) => {
    const Comp = (props: T & Parameters<R>[0]) => {
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
    const Comp = forwardRef((props: T, ref) => {
      const styles = useContext(StyleContext)
      return <Component ref={ref} className={styles?.[part ?? '']} {...props} />
    })
    Comp.displayName = Component.displayName || Component.name
    return Comp
  }

  return {
    withProvider,
    withContext,
  }
}

import * as Ark from '@ark-ui/react/accordion'
import { accordion } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(accordion)

const AccordionRoot = withProvider(styled(Ark.Accordion.Root), 'root')
const AccordionItem = withContext(styled(Ark.Accordion.Item), 'item')
const AccordionContent = withContext(styled(Ark.Accordion.Content), 'content')
const AccordionTrigger = withContext(styled(Ark.Accordion.Trigger), 'trigger')

const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Item: AccordionItem,
  Content: AccordionContent,
  Trigger: AccordionTrigger,
})

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }

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
