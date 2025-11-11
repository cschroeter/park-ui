import { Span, TagsInput } from '@/components/ui'

export const App = () => {
  return (
    <TagsInput.Root defaultValue={['React', 'Solid', 'Vue']}>
      <TagsInput.Label>Tags</TagsInput.Label>
      <TagsInput.Control>
        <TagsInput.Items />
        <TagsInput.Input placeholder="Add tag..." />
      </TagsInput.Control>
      <Span textStyle="xs" color="fg.muted" ms="auto">
        Press Enter or Return to add tag
      </Span>
    </TagsInput.Root>
  )
}
