import { Toast } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    base: 'toast',
    slots: {
      group: 'toast__group',
      root: 'toast__root',
      title: 'toast__title',
      description: 'toast__description',
      closeTrigger: 'toast__closeTrigger',
    },
    variants: {},
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(Toast.Root, 'root')
export const CloseTrigger = withContext(Toast.CloseTrigger, 'closeTrigger')
export const Description = withContext(Toast.Description, 'description')
export const Group = withContext(Toast.Group, 'group')
export const Title = withContext(Toast.Title, 'title')

export type RootProps = ComponentProps<typeof Root>
export interface CloseTriggerProps extends ComponentProps<typeof CloseTrigger> {}
export interface DescriptionProps extends ComponentProps<typeof Description> {}
export interface GroupProps extends ComponentProps<typeof Group> {}
export interface TitleProps extends ComponentProps<typeof Title> {}
