/* eslint-disable */
import type { SystemStyleObject } from '../types/index'
import type { PropertyValue } from '../types/prop-type'
import type { DistributiveOmit } from '../types/system-types'

export interface HstackProperties {
  justify?: PropertyValue<'justifyContent'>
  gap?: PropertyValue<'gap'>
}

interface HstackStyles
  extends HstackProperties,
    DistributiveOmit<SystemStyleObject, keyof HstackProperties> {}

interface HstackPatternFn {
  (styles?: HstackStyles): string
  raw: (styles?: HstackStyles) => SystemStyleObject
}

export declare const hstack: HstackPatternFn
