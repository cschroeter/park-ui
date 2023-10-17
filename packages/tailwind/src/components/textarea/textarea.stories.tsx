import { Label } from '../label/snippet'
import { Textarea, type TextareaProps } from './snippet'

export const Demo = (props: TextareaProps) => {
  return (
    <div className="flex flex-col gap-1.5 w-8/12">
      <Label htmlFor="description">Description</Label>
      <Textarea id="description" rows={4} {...props} />
    </div>
  )
}
