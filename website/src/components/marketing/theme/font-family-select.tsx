import { Portal } from '@ark-ui/react'
import { BiCheck, BiExpandVertical } from 'react-icons/bi'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
import { useThemeGenerator } from '~/lib/use-theme-generator'

export const FontFamilySelect = () => {
  const { currentFontFamily, fontFamilies, updateFontFamily } = useThemeGenerator()

  return (
    <Select
      // @ts-expect-error
      items={fontFamilies}
      value={[currentFontFamily.value]}
      // @ts-expect-error
      onChange={(e) => updateFontFamily(e.items[0])}
      positioning={{ sameWidth: true }}
      size="sm"
    >
      <SelectLabel>Font Family</SelectLabel>
      <SelectTrigger>
        <SelectValue />
        <BiExpandVertical />
      </SelectTrigger>
      <Portal>
        <SelectPositioner zIndex="toast">
          <SelectContent>
            {fontFamilies.map((fontFamily, id) => (
              <SelectItem key={id} item={fontFamily}>
                <SelectItemText>{fontFamily.label}</SelectItemText>
                <SelectItemIndicator>
                  <BiCheck />
                </SelectItemIndicator>
              </SelectItem>
            ))}
          </SelectContent>
        </SelectPositioner>
      </Portal>
    </Select>
  )
}
