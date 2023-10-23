/* eslint-disable */
import type { SystemStyleObject } from '../types/index'
import type { PropertyValue } from '../types/prop-type'
import type { DistributiveOmit } from '../types/system-types'

export interface WrapProperties {
  gap?: PropertyValue<'gap'>
  rowGap?: PropertyValue<'gap'>
  columnGap?: PropertyValue<'gap'>
  align?: PropertyValue<'alignItems'>
  justify?: PropertyValue<'justifyContent'>
}

interface WrapStyles
  extends WrapProperties,
    DistributiveOmit<SystemStyleObject, keyof WrapProperties> {}

interface WrapPatternFn {
  (styles?: WrapStyles): string
  raw: (styles?: WrapStyles) => SystemStyleObject
}

export declare const wrap: WrapPatternFn
