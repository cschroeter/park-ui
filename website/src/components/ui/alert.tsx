import { ark } from '@ark-ui/react'
import type { ComponentPropsWithoutRef } from 'react'
import { styled } from 'styled-system/jsx'
import { alert, type AlertVariantProps } from 'styled-system/recipes'

export type AlertProps = AlertVariantProps & ComponentPropsWithoutRef<typeof ark.div>
export const Alert = styled(ark.div, alert)
