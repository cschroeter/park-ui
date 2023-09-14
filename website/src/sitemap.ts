export const sitemap = [
  {
    name: 'Overview',
    entries: [
      {
        title: 'Introduction',
        description:
          'Welcome to Park UI, your source for highly versatile components, all designed using Ark UI and Panda CSS.',
        href: '/docs/overview/introduction',
      },
      {
        title: 'Getting Started',
        description: 'A Step-by-step Guide to Using Park UI',
        href: '/docs/overview/getting-started',
      },
      {
        title: 'Figma Library',
        description: 'Contains all the components and styles used in Park UI.',
        href: '/docs/overview/figma-library',
      },
      {
        title: 'Changelog',
        description: 'All notable changes to this project will be documented in this file.',
        href: '/docs/overview/changelog',
      },
      {
        title: 'About',
        description: 'Driven by amazing open source projects.',
        href: '/docs/overview/about',
      },
    ],
  },
  {
    name: 'Foundations',
    entries: [
      {
        title: 'Semantic Tokens',
        description:
          'These tokens give elements a specific meaning, making it easier for users to understand what each part of the interface does.',
        href: '/docs/foundations/semantic-tokens',
      },
      {
        title: 'Text Styles',
        description: 'Explore different text styles to incorporate in your designs.',
        href: '/docs/foundations/text-styles',
      },
    ],
  },
  {
    name: 'Components',
    entries: [
      {
        title: 'Accordion',
        description: 'A collapsible component that displays content in a vertical stack.',
        href: '/docs/components/accordion',
        defaultProps: {},
      },
      {
        title: 'Alert',
        description: 'A component that displays a brief, important message to the user.',
        href: '/docs/components/alert',
        defaultProps: {},
        isPrimitive: true,
      },
      {
        title: 'Article',
        description: 'Effortlessly style Markdown or CMS-generated HTML',
        href: '/docs/components/article',
        defaultProps: {
          size: {
            options: ['sm', 'md', 'lg'],
            defaultValue: 'md',
          },
        },
        isPrimitive: true,
      },
      {
        title: 'Avatar',
        description: 'A graphical representation of the user, often used in profile sections.',
        href: '/docs/components/avatar',
        defaultProps: {
          size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
            defaultValue: '2xl',
          },
        },
      },
      {
        title: 'Badge',
        description: 'A small count and labeling component used to highlight an status.',
        href: '/docs/components/badge',
        isPrimitive: true,
        defaultProps: {
          variant: {
            options: ['solid', 'subtle', 'outline'],
            defaultValue: 'subtle',
          },
          size: {
            options: ['sm', 'md', 'lg'],
            defaultValue: 'md',
          },
        },
      },
      {
        title: 'Button',
        description: 'An interactive element used to trigger actions.',
        href: '/docs/components/button',
        isPrimitive: true,
        defaultProps: {
          variant: {
            options: ['primary', 'secondary', 'tertiary', 'link'],
            defaultValue: 'primary',
          },
          size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
            defaultValue: 'md',
          },
        },
      },
      {
        title: 'Card',
        description: 'A container component that displays content in a compact and organized way.',
        href: '/docs/components/card',
        isPrimitive: true,
        defaultProps: {},
      },
      {
        title: 'Carousel',
        description: 'A slideshow component that cycles through elements.',
        href: '/docs/components/carousel',
        defaultProps: {},
      },
      {
        title: 'Checkbox',
        description: 'A control element that allows for multiple selections within a set.',
        href: '/docs/components/checkbox',
        defaultProps: {
          size: {
            options: ['sm', 'md', 'lg'],
            defaultValue: 'md',
          },
        },
      },
      {
        title: 'Code',
        description: 'A component to display inline code snippets.',
        href: '/docs/components/code',
        isPrimitive: true,
        defaultProps: {
          size: {
            options: ['sm', 'md', 'lg'],
            defaultValue: 'md',
          },
        },
      },
      {
        title: 'Color Picker',
        description: 'A component that allows users to select a color from a predefined set.',
        href: '/docs/components/color-picker',
        defaultProps: {},
      },
      {
        title: 'Combobox',
        description: 'A single input field that combines the functionality of a select and input.',
        href: '/docs/components/combobox',
        label: 'Updated',
        defaultProps: {},
      },
      {
        title: 'Dialog',
        description: 'A modal window that appears on top of the main content.',
        href: '/docs/components/dialog',
        defaultProps: {},
      },
      {
        title: 'Date Picker',
        description: 'A component that allows users to select a date from a calendar.',
        href: '/docs/components/date-picker',
        defaultProps: {},
      },
      {
        title: 'Drawer',
        description: 'A panel that slides in from the edge of the screen.',
        href: '/docs/components/drawer',
        defaultProps: {
          placement: {
            options: ['right', 'left'],
            defaultValue: 'right',
          },
        },
      },
      {
        title: 'Editable',
        description: 'A component that allows users to edit text in place.',
        href: '/docs/components/editable',
        defaultProps: {},
      },
      {
        title: 'Hover Card',
        description: 'A card that appears when a user hovers over an element.',
        href: '/docs/components/hover-card',
        defaultProps: {},
      },
      {
        title: 'Icon Button',
        description:
          'A button component featuring an icon for a more visual and compact interface interaction.',
        href: '/docs/components/icon-button',
        isPrimitive: true,
        defaultProps: {
          variant: {
            options: ['primary', 'secondary', 'tertiary', 'link'],
            defaultValue: 'primary',
          },
          size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
            defaultValue: 'md',
          },
        },
      },
      {
        title: 'Input',
        description:
          'A field that allows user input, often used for forms or search functionality.',
        href: '/docs/components/input',
        isPrimitive: true,
        defaultProps: {
          size: {
            options: ['sm', 'md', 'lg', 'xl'],
            defaultValue: 'md',
          },
        },
      },
      {
        title: 'Label',
        description: 'A text component that provides information about another component.',
        href: '/docs/components/label',
        isPrimitive: true,
        defaultProps: {},
      },
      {
        title: 'Menu',
        description: 'A list of options that appears when a user interacts with a button.',
        href: '/docs/components/menu',
        defaultProps: {},
      },
      {
        title: 'Number Input',
        description: 'A field that allows user input of numeric values.',
        href: '/docs/components/number-input',
        defaultProps: {
          size: {
            options: ['md', 'lg', 'xl'],
            defaultValue: 'md',
          },
        },
      },
      {
        title: 'Pagination',
        description: 'A navigation component that allows users to browse through pages.',
        href: '/docs/components/pagination',
        defaultProps: {},
      },
      {
        title: 'Pin Input',
        description: 'For pin or verification codes with auto-focus transfer and masking options.',
        href: '/docs/components/pin-input',
        defaultProps: {},
      },
      {
        title: 'Popover',
        description: 'An overlay that displays additional information or options when triggered.',
        href: '/docs/components/popover',
        defaultProps: {},
      },
      {
        title: 'Radio Group',
        description: 'Allows single selection from multiple options.',
        href: '/docs/components/radio-group',
        defaultProps: {
          size: {
            options: ['sm', 'md', 'lg'],
            defaultValue: 'md',
          },
          orientation: {
            options: ['horizontal', 'vertical'],
            defaultValue: 'vertical',
          },
        },
      },
      {
        title: 'Radio Button Group',
        description: 'Allows single selection from multiple options.',
        href: '/docs/components/radio-button-group',
        defaultProps: {
          size: {
            options: ['sm', 'md', 'lg', 'xl'],
            defaultValue: 'md',
          },
          variant: {
            options: ['solid', 'outline'],
            defaultValue: 'solid',
          },
        },
      },
      {
        title: 'Range Slider',
        description: 'A slider with two handles to select a range of values.',
        href: '/docs/components/range-slider',
        defaultProps: {},
      },
      {
        title: 'Rating Group',
        description: 'Allows users to rate items using a set of icons.',
        href: '/docs/components/rating-group',
        defaultProps: {
          size: {
            options: ['sm', 'md', 'lg'],
            defaultValue: 'lg',
          },
        },
      },
      {
        title: 'Segment Group',
        description: 'Organizes and navigates between sections in a view.',
        href: '/docs/components/segment-group',
        defaultProps: {
          size: {
            options: ['sm', 'md'],
            defaultValue: 'md',
          },
          orientation: {
            options: ['horizontal', 'vertical'],
            defaultValue: 'vertical',
          },
        },
      },
      {
        title: 'Select',
        description: 'Displays a list of options for the user to pick from.',
        href: '/docs/components/select',
        label: 'Updated',
        defaultProps: {
          size: {
            options: ['sm', 'md', 'lg'],
            defaultValue: 'md',
          },
        },
      },
      {
        title: 'Slider',
        description: 'A control element that allows for a range of selections.',
        href: '/docs/components/slider',
        defaultProps: {},
      },
      {
        title: 'Splitter',
        description: 'A component that divides your interface into resizable sections',
        href: '/docs/components/splitter',
        defaultProps: {
          orientation: {
            options: ['horizontal', 'vertical'],
            defaultValue: 'vertical',
          },
        },
      },
      {
        title: 'Switch',
        description: 'A control element that allows for a binary selection.',
        href: '/docs/components/switch',
        defaultProps: {
          size: {
            options: ['sm', 'md', 'lg'],
            defaultValue: 'md',
          },
        },
      },
      {
        title: 'Tabs',
        description: 'Flexible navigation tool with various modes and features.',
        href: '/docs/components/tabs',
        defaultProps: {
          size: {
            options: ['sm', 'md'],
            defaultValue: 'md',
          },
          orientation: {
            options: ['horizontal', 'vertical'],
            defaultValue: 'horizontal',
          },
        },
      },
      {
        title: 'Tags Input',
        description: 'A component that allows users to add tags to an input field.',
        href: '/docs/components/tags-input',
        defaultProps: {},
      },
      {
        title: 'Textarea',
        description: 'A multiline input field often used for comments or messages.',
        href: '/docs/components/textarea',
        isPrimitive: true,
        defaultProps: {
          size: {
            options: ['sm', 'md', 'lg', 'xl'],
            defaultValue: 'md',
          },
        },
      },
      {
        title: 'Toast',
        description: 'A message that appears on the screen to provide feedback on an action.',
        href: '/docs/components/toast',
        defaultProps: {},
      },
      {
        title: 'Toggle Group',
        description: 'A set of two-state buttons that can be toggled on or off.',
        href: '/docs/components/toggle-group',
        label: 'New',
        defaultProps: {
          size: {
            options: ['sm', 'md', 'lg'],
            defaultValue: 'md',
          },
          variant: {
            options: ['outline', 'ghost'],
            defaultValue: 'outline',
          },
          orientation: {
            options: ['horizontal', 'vertical'],
            defaultValue: 'horizontal',
          },
        },
      },
      {
        title: 'Tooltip',
        description: 'A label that provides information on hover or focus.',
        href: '/docs/components/tooltip',
        defaultProps: {},
      },
    ],
  },
]
