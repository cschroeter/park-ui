/* eslint-disable */
import type { SystemStyleObject } from '../types/index'
import type { PropertyValue } from '../types/prop-type'
import type { DistributiveOmit } from '../types/system-types'

export interface FlexProperties {
  align?: PropertyValue<'alignItems'>
  justify?: PropertyValue<'justifyContent'>
  direction?: PropertyValue<'flexDirection'>
  wrap?: PropertyValue<'flexWrap'>
  basis?: PropertyValue<'flexBasis'>
  grow?: PropertyValue<'flexGrow'>
  shrink?: PropertyValue<'flexShrink'>
}

interface FlexStyles
  extends FlexProperties,
    DistributiveOmit<SystemStyleObject, keyof FlexProperties> {}

interface FlexPatternFn {
  (styles?: FlexStyles): string
  raw: (styles?: FlexStyles) => SystemStyleObject
}

export declare const flex: FlexPatternFn
