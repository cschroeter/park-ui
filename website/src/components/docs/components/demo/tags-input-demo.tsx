import { Fragment } from 'react'
import { FiX } from 'react-icons/fi'
import { IconButton } from '~/components/icon-button'
import { Label } from '~/components/label'
import {
  Tag,
  TagDeleteTrigger,
  TagInput,
  TagsInput,
  TagsInputControl,
  TagsInputInput,
  TagsInputLabel,
} from '~/components/ui/tags-input'

export const TagsInputDemo = () => {
  return (
    <TagsInput defaultValue={['React', 'Solid', 'Vue']}>
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
                    <IconButton aria-label="Delete tag" icon={<FiX />} variant="link" size="xs" />
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
