import { Portal } from '@ark-ui/react'
import { ArrowRightIcon, XIcon } from 'lucide-react'
import { Button } from '../button/snippet'
import { IconButton } from '../icon-button/snippet'
import { Input } from '../input/snippet'
import { Label } from '../label/snippet'
import {
  Drawer,
  DrawerBackdrop,
  DrawerCloseTrigger,
  DrawerContainer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
  type DrawerProps,
} from './snippet'

export const Demo = (props: DrawerProps) => {
  return (
    <Drawer {...props}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <Portal>
        <DrawerBackdrop />
        <DrawerContainer>
          <DrawerContent>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <DrawerTitle mb="1">Drawer Heading</DrawerTitle>
                <DrawerDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                </DrawerDescription>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Your e-mail" />
                </div>
              </div>
              <DrawerCloseTrigger asChild>
                <Button>
                  Continue <ArrowRightIcon />
                </Button>
              </DrawerCloseTrigger>
            </div>
            <DrawerCloseTrigger position="absolute" top="3" right="4" asChild>
              <IconButton aria-label="Close Drawer" variant="ghost">
                <XIcon />
              </IconButton>
            </DrawerCloseTrigger>
          </DrawerContent>
        </DrawerContainer>
      </Portal>
    </Drawer>
  )
}
