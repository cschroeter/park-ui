'use client'
import { PopoverAnchor, Portal } from '@ark-ui/react'
import { useForm } from 'react-hook-form'
import { Stack } from 'styled-system/jsx'
import { useBoolean } from 'usehooks-ts'
import { Button } from '~/components/ui/button'
import {
  Popover,
  PopoverArrow,
  PopoverArrowTip,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverPositioner,
  type PopoverProps,
} from '~/components/ui/popover'
import { Textarea } from '../ui/textarea'

type Fields = {
  message: string
}

export const FeedbackPopover = (props: PopoverProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<Fields>()
  const { value, toggle, setFalse } = useBoolean(false)

  const onSubmit = async (data: Fields) => {
    await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    setFalse()
    reset()
  }

  return (
    <Popover portalled {...props} open={value} onClose={setFalse}>
      <PopoverAnchor asChild>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => toggle()}
          display={{ base: 'none', sm: 'inline-flex' }}
        >
          Feedback
        </Button>
      </PopoverAnchor>
      <Portal>
        <PopoverPositioner>
          <PopoverContent>
            <PopoverArrow>
              <PopoverArrowTip />
            </PopoverArrow>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack gap="4" minW="64">
                <Textarea rows={4} placeholder="Your feedback" required {...register('message')} />
                <Stack gap="3" direction="row">
                  <PopoverCloseTrigger asChild>
                    <Button variant="secondary" size="sm" width="full">
                      Cancel
                    </Button>
                  </PopoverCloseTrigger>
                  <Button type="submit" variant="primary" size="sm" width="full">
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </Button>
                </Stack>
              </Stack>
            </form>
          </PopoverContent>
        </PopoverPositioner>
      </Portal>
    </Popover>
  )
}
