/**
 * list of multi part components that are verified in stories with tailwind
 */
export const supportedMultiPartComponents = [
  'accordion',
  'alert',
  'avatar',
  'card',
  'carousel',
  'checkbox',
  // 'color-picker', // wait
  'combobox',
  // 'date-picker', // wait
  'dialog',
  'drawer',
  'editable',
  'hover-card',
  'menu',
  'number-input',
  'pagination',
  'pin-input',
  'popover',
  'radio-button-group',
  'radio-group',
  // 'range-slider', // wait
  'rating-group',
  // 'segment-group', // TODO
  'select',
  'slider',
  // 'splitter', // TODO trigger missing
  'switch',
  'table',
  'tabs',
  'tags-input',
  // 'toast', // wait
  'toggle-group',
  // 'tooltip',
]

/**
 * list of primitive components that are verified in stories with tailwind
 */
export const supportedPrimitiveComponents: {
  componentName: string
  className: string
  elementName: string
}[] = [
  {
    componentName: 'Badge',
    className: 'badge',
    elementName: 'div',
  },
  {
    componentName: 'Button',
    className: 'button',
    elementName: 'button',
  },
  {
    componentName: 'Code',
    className: 'code',
    elementName: 'code',
  },
  {
    componentName: 'Icon',
    className: 'icon',
    elementName: 'svg',
  },
  {
    componentName: 'Input',
    className: 'input',
    elementName: 'input',
  },
  {
    componentName: 'Label',
    className: 'label',
    elementName: 'label',
  },
  // {
  //   componentName: 'Text',
  //   className: 'text',
  //   elementName: 'p',
  // },
  {
    componentName: 'Textarea',
    className: 'textarea',
    elementName: 'textarea',
  },
]

export const supportedClassNames = [
  ...supportedMultiPartComponents,
  ...supportedPrimitiveComponents.map(({ className }) => className),
]
