'use client'
import { Portal } from '@ark-ui/react'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'
import { IconButton, type IconButtonProps } from '~/components/ui/icon-button'
import {
  Menu,
  MenuContent,
  MenuItemGroup,
  MenuOptionItem,
  MenuPositioner,
  MenuTrigger,
} from '~/components/ui/menu'
import { convertCommand, type PackageManager } from '~/lib/convert-command'

type Props = { content: string } & Omit<IconButtonProps, 'aria-label' | 'icon'>

export const CopyCommandButton = (props: Props) => {
  const { content, ...rest } = props
  const [_, copy] = useCopyToClipboard()
  const [visible, setVisible] = useState(true)
  const [value, setValue] = useState<Record<string, string | string[]>>({
    manager: '',
  })

  useEffect(() => {
    if (visible) return
    const timer = setTimeout(() => setVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [visible])

  return (
    <Menu
      size="xs"
      positioning={{ placement: 'bottom-end', gutter: -2 }}
      value={value}
      onValueChange={(data) => {
        setValue((prev) => ({
          ...prev,
          [data.name]: data.value,
        }))
        copy(convertCommand(content, data.value as PackageManager))
        setVisible(false)
      }}
    >
      <MenuTrigger asChild>
        <IconButton variant="tertiary" size="xs" {...rest} aria-label="Copy code to clipboard">
          {visible ? <CopyIcon /> : <CheckIcon />}
        </IconButton>
      </MenuTrigger>
      <Portal>
        <MenuPositioner>
          <MenuContent>
            <MenuItemGroup id="manager">
              <MenuOptionItem name="manager" type="radio" value="npm">
                npm
              </MenuOptionItem>
              <MenuOptionItem name="manager" type="radio" value="yarn">
                yarn
              </MenuOptionItem>
              <MenuOptionItem name="manager" type="radio" value="pnpm">
                pnpm
              </MenuOptionItem>
            </MenuItemGroup>
          </MenuContent>
        </MenuPositioner>
      </Portal>
    </Menu>
  )
}
