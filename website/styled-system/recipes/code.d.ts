/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface CodeVariant {
  variant: 'outline' | 'ghost'
  size: 'sm' | 'md' | 'lg'
}

type CodeVariantMap = {
  [key in keyof CodeVariant]: Array<CodeVariant[key]>
}

export type CodeVariantProps = {
  [key in keyof CodeVariant]?: ConditionalValue<CodeVariant[key]>
}

export interface CodeRecipe {
  __type: CodeVariantProps
  (props?: CodeVariantProps): string
  raw: (props?: CodeVariantProps) => CodeVariantProps
  variantMap: CodeVariantMap
  variantKeys: Array<keyof CodeVariant>
  splitVariantProps<Props extends CodeVariantProps>(
    props: Props,
  ): [CodeVariantProps, Pretty<DistributiveOmit<Props, keyof CodeVariantProps>>]
}

export declare const code: CodeRecipe
