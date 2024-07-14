import { styled } from 'styled-system/jsx'
import type { ElementType } from 'styled-system/types'
import { type ComputedRef, computed, defineComponent, inject, provide } from 'vue'

type Props = Record<string, unknown>
type Recipe = {
  (props?: Props): Props
  splitVariantProps: (props: Props) => [Props, Props]
}
type Slot<R extends Recipe> = keyof ReturnType<R>
type StyleContext<R extends Recipe> = Record<Slot<R>, string>

export const createStyleContext = <R extends Recipe>(recipe: R) => {
  const withProvider = <P,>(Component: ElementType, slot: Slot<R>) => {
    const StyledComponent = styled(Component)

    return defineComponent<P>({
      setup(props, { slots }) {
        const splittedProps = computed(() => {
          return recipe.splitVariantProps(props)
        })

        const styles = computed(() => {
          const [variantProps] = splittedProps.value
          return recipe(variantProps) as StyleContext<R>
        })

        provide('styles', styles)
        return () => (
          <StyledComponent {...splittedProps.value[1]} class={styles.value[slot]}>
            {slots.default?.()}
          </StyledComponent>
        )
      },
    })
  }

  const withContext = <P,>(Component: ElementType, slot: Slot<R>) => {
    const StyledComponent = styled(Component)

    return defineComponent<P>({
      setup(props, { slots }) {
        const slotStyles = inject<ComputedRef<StyleContext<R>>>('styles')

        return () => (
          <StyledComponent {...props} class={slotStyles?.value?.[slot]}>
            {slots.default?.()}
          </StyledComponent>
        )
      },
    })
  }

  return { withProvider, withContext }
}
