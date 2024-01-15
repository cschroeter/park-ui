import { useState } from 'react'
import { Skeleton, type SkeletonProps } from '~/components/ui/skeleton'
import { Switch } from '~/components/ui/switch'

export const Demo = (props: SkeletonProps) => {
  const [checked, setChecked] = useState(true)
  return (
    <div>
      <Switch checked={checked} onCheckedChange={(e) => setChecked(e.checked)} />
      <Skeleton loading={checked} {...props} width={'100px'} height={'100px'}>
        <img
          src="https://avatars.githubusercontent.com/u/82451257?v=4"
          alt="Konv Suu"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
          }}
        />
      </Skeleton>
    </div>
  )
}
