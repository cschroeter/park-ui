export default {
  theme: {
    extend: {
      colors: {
        /** css vars are defined in park-ui color vars */
        bg: {
          canvas: 'var(--colors-bg-canvas)',
          default: 'var(--colors-bg-default)',
          subtle: 'var(--colors-bg-subtle)',
          muted: 'var(--colors-bg-muted)',
          emphasized: 'var(--colors-bg-emphasized)',
          disabled: 'var(--colors-bg-disabled)',
        },
        fg: {
          default: 'var(--colors-fg-default)',
          muted: 'var(--colors-fg-muted)',
          subtle: 'var(--colors-fg-subtle)',
          disabled: 'var(--colors-fg-disabled)',
        },
        accent: {
          default: 'var(--colors-accent-default)',
          emphasized: 'var(--colors-accent-emphasized)',
          fg: 'var(--colors-accent-fg)',
          text: 'var(--colors-accent-text)',
        },
        border: {
          default: 'var(--colors-border-default)',
          muted: 'var(--colors-border-muted)',
          subtle: 'var(--colors-border-subtle)',
          disabled: 'var(--colors-border-disabled)',

          outline: 'var(--colors-border-outline)',
        },
      },
      borderRadius: {
        l1: 'var(--radii-l1)',
        l2: 'var(--radii-l2)',
        l3: 'var(--radii-l3)',
      },
    },
  },
}
