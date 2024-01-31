import type { Meta } from '@storybook/react'
import { Button, Text } from '~/components/ui'

const meta: Meta = {
  title: 'Examples',
}

export default meta

export const Banner = () => {
  return (
    <div className="pb-12 md:pb-24">
      <div className="bg-bg-default" borderBottomWidth="1px">
        <div className="py-4 md:py-3.5 px-4">
          <div className="flex gap-4 flex-col md:flex-row flex-start md:justify-between">
            <div className="pe-4 md:pe-0">
              <Text className="font-medium">Stay Ahead with our Newsletter</Text>
              <Text className="text-fg-muted">
                Embrace trends, industry insights, and actionable advice.
              </Text>
            </div>
            <div className="flex gap-3 flex-col md:flex-row items-stretch md:items-center">
              <Button>Sign Up</Button>
              <Button variant="outline">No, Thanks</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
