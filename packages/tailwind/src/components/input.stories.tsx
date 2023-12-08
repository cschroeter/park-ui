import { Input, type InputProps } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export const Demo = (props: InputProps) => {
  return (
    <div className="flex flex-col gap-1.5 w-8/12">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Your Name" {...props} />
    </div>
  )
}
