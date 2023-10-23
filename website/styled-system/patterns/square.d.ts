/* eslint-disable */
import type { SystemStyleObject } from '../types/index'
import type { PropertyValue } from '../types/prop-type'
import type { DistributiveOmit } from '../types/system-types'

export interface SquareProperties {
  size?: PropertyValue<'width'>
}

interface SquareStyles
  extends SquareProperties,
    DistributiveOmit<SystemStyleObject, keyof SquareProperties> {}

interface SquarePatternFn {
  (styles?: SquareStyles): string
  raw: (styles?: SquareStyles) => SystemStyleObject
}

export declare const square: SquarePatternFn
