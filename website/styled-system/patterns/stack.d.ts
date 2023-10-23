/* eslint-disable */
import type { SystemStyleObject } from '../types/index'
import type { PropertyValue } from '../types/prop-type'
import type { DistributiveOmit } from '../types/system-types'

export interface StackProperties {
  align?: PropertyValue<'alignItems'>
  justify?: PropertyValue<'justifyContent'>
  direction?: PropertyValue<'flexDirection'>
  gap?: PropertyValue<'gap'>
}

interface StackStyles
  extends StackProperties,
    DistributiveOmit<SystemStyleObject, keyof StackProperties> {}

interface StackPatternFn {
  (styles?: StackStyles): string
  raw: (styles?: StackStyles) => SystemStyleObject
}

export declare const stack: StackPatternFn
