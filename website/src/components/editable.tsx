import {
  Editable as ArkEditable,
  type EditableProps as ArkEditableProps,
} from '@ark-ui/react/editable'
import { editable, type HoverCardVariantProps } from 'styled-system/recipes'

export * from '@ark-ui/react/editable'

export type EditableProps = HoverCardVariantProps & ArkEditableProps

export const Editable = (props: EditableProps) => {
  return <ArkEditable className={editable()} {...props} />
}
