import { XIcon } from 'lucide-react'
import { Fragment } from 'react'
import { IconButton } from '../icon-button/snippet'
import { Label } from '../label/snippet'
import {
  Tag,
  TagDeleteTrigger,
  TagInput,
  TagsInput,
  TagsInputControl,
  TagsInputInput,
  TagsInputLabel,
} from './snippet'

export const Demo = () => {
  return (
    <TagsInput defaultValue={['React', 'Solid', 'Vue']} maxW="xs">
      {({ value }) => (
        <>
          <TagsInputLabel asChild>
            <Label>Framework</Label>
          </TagsInputLabel>
          <TagsInputControl>
            {(value ?? []).map((value, index) => (
              <Fragment key={index}>
                <Tag index={index} value={value}>
                  {value}
                  <TagDeleteTrigger index={index} value={value} asChild>
                    <IconButton aria-label="Delete tag" variant="link" size="xs">
                      <XIcon />
                    </IconButton>
                  </TagDeleteTrigger>
                </Tag>
                <TagInput index={index} value={value} />
              </Fragment>
            ))}
            <TagsInputInput placeholder="Add tag" />
          </TagsInputControl>
        </>
      )}
    </TagsInput>
  )
}
