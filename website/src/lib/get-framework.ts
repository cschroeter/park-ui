import { cookies } from 'next/headers'
import { z } from 'zod'
import { type Framework, frameworks } from './frameworks'

const cookieSchema = z.object({
  state: z.object({
    framework: z.enum(frameworks),
  }),
})

export const getFramework = async (): Promise<Framework> => {
  const cookieStore = await cookies()
  const cookieValue = cookieStore.get('park-ui')?.value

  if (!cookieValue) return 'react'

  const result = cookieSchema.safeParse(JSON.parse(cookieValue))
  return result.success ? result.data.state.framework : 'react'
}
