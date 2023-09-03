type AnyProps = Record<string, unknown>
type AnyRecipe = {
  (props?: AnyProps): Record<string, string>
  splitVariantProps: (props: AnyProps) => any
}

export const createStyleContext = <R extends AnyRecipe>(recipe: R) => {
  const withProvider = (Dynamic: Component, part?: string) => {
    return defineComponent({
      name: Dynamic.name,
      inheritAttrs: false,
      props: { as: { type: [String, Object], default: Dynamic } },
      setup(props, { slots }) {
        const splittedProps = computed(() => {
          return recipe.splitVariantProps(props)
        })
        const styles = computed(() => {
          const [variantProps] = splittedProps.value
          return recipe(variantProps)
        })

        provide('styles', styles)

        return () => {
          const [_, elementProps] = splittedProps.value
          return h(
            props.as,
            {
              class: styles.value[part ?? ''],
              ...elementProps,
            },
            () => slots.default?.(),
          )
        }
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
            props.as,
            {
              class: styles?.value[part ?? ''],
              ...props,
            },
            () => slots.default && slots.default(),
          )
      },
    })
  }

  return {
    withProvider,
    withContext,
  }
}
