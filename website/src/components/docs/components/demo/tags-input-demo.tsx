import { Fragment } from 'react'
import { FiX } from 'react-icons/fi'
import { IconButton } from '~/components/ui/icon-button'
import { Label } from '~/components/ui/label'
import {
  Tag,
  TagDeleteTrigger,
  TagInput,
  TagsInput,
  TagsInputControl,
  TagsInputInput,
  TagsInputLabel,
  type TagsInputProps,
} from '~/components/ui/tags-input'

export const TagsInputDemo = (props: TagsInputProps) => {
  return (
    <TagsInput defaultValue={['React', 'Solid', 'Vue']} {...props}>
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
                      <FiX />
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
