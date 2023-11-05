import { mergeProps } from 'vue'

type AnyProps = Record<string, unknown>
type AnyRecipe = {
  (props?: AnyProps): Record<string, string>
  splitVariantProps: (props: AnyProps) => any
}

export const createStyleContext = <R extends AnyRecipe>(recipe: R) => {
  const withProvider = (Dynamic: Component, part?: string) => {
    return defineComponent({
      name: Dynamic.name || 'DynamicComponent',
      inheritAttrs: false,
      props: { as: { type: [String, Object], default: Dynamic } },
      setup(props, { slots, attrs }) {
        const splittedProps = computed(() => {
          return recipe.splitVariantProps(props)
        })
        const styles = computed(() => {
          const [variantProps] = splittedProps.value
          return recipe(variantProps)
        })

        provide('styles', styles)

        return () =>
          h(
            Dynamic,
            { ...mergeProps(attrs, props, { class: styles.value[part ?? ''] }) },
            {
              default: () => slots.default && slots.default(),
            },
          )
      },
    })
  }

  const withContext = (Dynamic: Component, part?: string) => {
    return defineComponent({
      name: Dynamic.name,
      inheritAttrs: false,
      props: { as: { type: [String, Object], default: Dynamic } },
      setup(props, { slots, attrs }) {
        const styles = inject<ComputedRef<Record<string, string>>>('styles')
        return () =>
          h(
            Dynamic,
            { ...mergeProps(attrs, props, { class: styles?.value[part ?? ''] }) },
            {
              default: () => slots.default && slots.default(),
            },
          )
      },
    })
  }

  return {
    withProvider,
    withContext,
  }
}
