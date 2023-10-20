export default {
  theme: {
    extend: {
      colors: {
        neutral: {
          25: '#fefefe',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        fg: {
          default: 'var(--fg-default)',
          emphasized: 'var(--fg-emphasized)',
          muted: 'var(--fg-muted)',
          subtle: 'var(--fg-subtle)',
          accent: 'var(--fg-accent)',
          disabled: 'var(--fg-disabled)',
        },
        bg: {
          canvas: 'var(--bg-canvas)',
          default: 'var(--bg-default)',
          subtle: 'var(--bg-subtle)',
          muted: 'var(--bg-muted)',
          emphasized: 'var(--bg-emphasized)',
          accent: 'var(--bg-accent)',
          disabled: 'var(--bg-disabled)',
        },
        border: {
          default: 'var(--border-default)',
          emphasized: 'var(--border-emphasized)',
          accent: 'var(--border-accent)',
          disabled: 'var(--border-disabled)',
        },
      },
    },
  },
}
