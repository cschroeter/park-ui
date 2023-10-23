/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface TagsInputVariant {
  size: 'md'
}

type TagsInputVariantMap = {
  [key in keyof TagsInputVariant]: Array<TagsInputVariant[key]>
}

export type TagsInputVariantProps = {
  [key in keyof TagsInputVariant]?: ConditionalValue<TagsInputVariant[key]>
}

export interface TagsInputRecipe {
  __type: TagsInputVariantProps
  (
    props?: TagsInputVariantProps,
  ): Pretty<
    Record<
      | 'root'
      | 'label'
      | 'control'
      | 'input'
      | 'clearTrigger'
      | 'tag'
      | 'tagInput'
      | 'tagDeleteTrigger',
      string
    >
  >
  raw: (props?: TagsInputVariantProps) => TagsInputVariantProps
  variantMap: TagsInputVariantMap
  variantKeys: Array<keyof TagsInputVariant>
  splitVariantProps<Props extends TagsInputVariantProps>(
    props: Props,
  ): [TagsInputVariantProps, Pretty<DistributiveOmit<Props, keyof TagsInputVariantProps>>]
}

export declare const tagsInput: TagsInputRecipe
