import { XIcon } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { IconButton } from '~/components/ui/icon-button'
import * as TagsInput from '~/components/ui/tags-input'

export const Demo = (props: TagsInput.RootProps) => {
  return (
    <TagsInput.Root defaultValue={['React', 'Solid', 'Vue']} maxW="xs" {...props}>
      {(api) => (
        <>
          <TagsInput.Label>Frameworks</TagsInput.Label>
          <TagsInput.Control>
            {api.value.map((value, index) => (
              <TagsInput.Item key={index} index={index} value={value}>
                <TagsInput.ItemText>{value}</TagsInput.ItemText>
                <TagsInput.ItemDeleteTrigger asChild>
                  <IconButton variant="link" size="xs">
                    <XIcon />
                  </IconButton>
                </TagsInput.ItemDeleteTrigger>
                <TagsInput.ItemInput />
              </TagsInput.Item>
            ))}
            <TagsInput.Input placeholder="Add Framework" />
          </TagsInput.Control>
          <TagsInput.ClearTrigger asChild>
            <Button variant="outline">Clear</Button>
          </TagsInput.ClearTrigger>
        </>
      )}
    </TagsInput.Root>
  )
}
