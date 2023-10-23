/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface ToastVariant {}

type ToastVariantMap = {
  [key in keyof ToastVariant]: Array<ToastVariant[key]>
}

export type ToastVariantProps = {
  [key in keyof ToastVariant]?: ConditionalValue<ToastVariant[key]>
}

export interface ToastRecipe {
  __type: ToastVariantProps
  (
    props?: ToastVariantProps,
  ): Pretty<Record<'group' | 'root' | 'title' | 'description' | 'closeTrigger', string>>
  raw: (props?: ToastVariantProps) => ToastVariantProps
  variantMap: ToastVariantMap
  variantKeys: Array<keyof ToastVariant>
  splitVariantProps<Props extends ToastVariantProps>(
    props: Props,
  ): [ToastVariantProps, Pretty<DistributiveOmit<Props, keyof ToastVariantProps>>]
}

export declare const toast: ToastRecipe
